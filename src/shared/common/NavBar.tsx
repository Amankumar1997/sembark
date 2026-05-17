import { useCart } from "@/context/CartContext";
import { Link } from "react-router";
import "@/assets/Navbar.css";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Shop App
        </Link>

        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/cart" className="nav-link cart-link">
            <span>Cart</span>
            {cart?.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
