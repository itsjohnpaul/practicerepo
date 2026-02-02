import { BrowserRouter, Routes, Route } from "react-router-dom";
import UmrahTable from "./Request/Todayrequest";
import UmrahView from "./Request/UmrahView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UmrahTable />} />
        <Route path="/umrah/:id" element={<UmrahView />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
