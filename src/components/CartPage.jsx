import React from 'react';
import { useCart } from './CartContext'; // Import the custom hook

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, totalQuantity } = useCart(); // Access the context values

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(cartItems).map((productId) => (
                <tr key={productId}>
                  <td>Product {productId}</td>
                  <td>{cartItems[productId]}</td>
                  <td>
                    <button onClick={() => removeFromCart(productId)}>-</button>
                    <button onClick={() => addToCart(productId)}>+</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h2>Total Items: {totalQuantity}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
