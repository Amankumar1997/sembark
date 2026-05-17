import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router";
import "@/assets/CartView.css";

export const CartView = () => {
  const { cart, removeFromCart, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  const renderCheckSummary = (totalPrice: number) => {
    return (
      <div className="cart-summary">
        <h2>Summary</h2>
        <div className="summary-row">
          <span>Total:</span>
          <span className="total-amount">${totalPrice.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    );
  };
  return (
    <div className="cart-page">
      <h1>Your Cart ({totalItems})</h1>
      {cart.length === 0 ? (
        <div className="empty-msg">
          Your cart is empty.{" "}
          <button onClick={() => navigate("/")}>Shop Now</button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart?.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.title} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p className="item-price">${item.price * item.quantity}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {renderCheckSummary(totalPrice)}
        </div>
      )}
    </div>
  );
};
