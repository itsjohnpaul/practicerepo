import "./Cartpage.css";
import useCartReducer from "./Reducer"; 

function Cartpage() {
  const { carts, dispatch } = useCartReducer();

  const totalPrice = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="page">
      <h1 className="title">Your Cart</h1>
<center>  <h2 className="total">Total: ${totalPrice}</h2></center>
      <div className="li">
        {carts.map(item => (
          <div className="item" key={item.id}>
            <img className="img" src={item.image} alt={item.title} />
            <div className="info">
              <h3 className="name">{item.title}</h3>
              <p className="price">${item.price}</p>
              <p className="qty">Qty: {item.quantity}</p>
              <button 
                className="remove" 
                onClick={() => dispatch({ type: "Delete", payload: item.id })}
              >
                Remove
              </button>
              <button 
                className="in" 
                onClick={() => dispatch({ type: "increase", payload: item.id })}
              >
                +
              </button>
              <button 
                className="de" 
                onClick={() => dispatch({ type: "decrease", payload: item.id })}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Cartpage;
