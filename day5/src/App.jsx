import { useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import withLoading from "./withLoading";
import Products from "./Products";
import "./App.css";
function App() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
    const [err, seterr] = useState("")

const ProductsWithLoading = withLoading(Products);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>{
            if (!res.ok) {
              throw new Error("Something went Wrong !")
            }
            return res.json()
          })
    .then((data) => {
            setProducts(data)
            setLoading(false)
          })
           .catch((error) => {
            seterr(error.message)
            setLoading(false)
          })
  }, []);
  
  return (
    <ErrorBoundary>
      <ProductsWithLoading isLoading={isLoading} products={products} />
    </ErrorBoundary>
  );
}

export default App;
