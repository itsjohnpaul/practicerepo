import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("FATAL ERROR: GEMINI_API_KEY is not set in .env.");
    process.exit(1);
}

// Retry function for 503 overloads
async function callGeminiAPI(userMessage, retries = 5, delay = 3000) {
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5:generateContent?key=${API_KEY}`;

    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    input: { text: userMessage }
                })
            });

            const data = await response.json();

            if (response.ok) {
                // Extract the generated text safely
                return data?.candidates?.[0]?.content?.[0]?.text || "No response generated.";
            } else if (response.status === 503) {
                console.warn(`503 overload, retry ${attempt + 1} in ${delay}ms...`);
                await new Promise(r => setTimeout(r, delay));
            } else {
                throw new Error(data.error?.message || "Unknown API error");
            }

        } catch (err) {
            console.error("Attempt", attempt + 1, "Error:", err.message);
            if (attempt === retries - 1) throw err;
            await new Promise(r => setTimeout(r, delay));
        }
    }
}

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ reply: "No message provided." });
    }

    try {
        const reply = await callGeminiAPI(userMessage);
        res.json({ reply });
    } catch (err) {
        res.status(500).json({ reply: `Error contacting Gemini API: ${err.message}` });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
