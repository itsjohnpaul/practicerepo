import "./App.css"
import usefetch from './usefetch'
import useSort from './sortings';
import useCartReducer from './Reducer';
import { useState } from "react";
import Loading from "./Loading";

function Home() {
  const { carts, dispatch } = useCartReducer();

  const { cart, loading, err } = usefetch("https://fakestoreapi.com/products");
  const { search, sort, filtersorted, setSearch, setSort } = useSort(cart);
  if (loading) return <Loading />;
  if (err) return <h2 style={{ color: "red",textAlign:"center" ,margin:"300px"} }>{err}</h2>
 

  return (
    <div>
      <center> 
        <input
        type="text"
        value={search}
        placeholder="search items!"
        onChange={(e) => setSearch(e.target.value)}
      />

        <button onClick={() => setSort(!sort)}>
          {sort ? "Unsort":"Sort by Price"}
        </button></center>

      <div className="d">
        {filtersorted.map((item) => (
          <div className="di" key={item.id}>
            <div className="con">
              <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <h3>${item.price}</h3>

            </div>
            <div className="bu">
              <button onClick={() => {
                dispatch({ type: "Add", payload: item });
                alert("added");
              }}>
                Add to cart
              </button> </div>
          </div>
        ))}
      </div>

    


    </div>
  )
}

export default Home
