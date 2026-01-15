import "./Products.css";

function Products({ products }) {
  return (
    <div className="user">
      <h2 className="title">Users List</h2>
      {products.map(user => (
        <div key={user.id} className="card">
         <p>ID: {user.id}</p>
         <p>NAME: {user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
