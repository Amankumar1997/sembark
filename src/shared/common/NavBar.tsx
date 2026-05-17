import { Link } from "react-router";

const Navbar = () => {
//   const { state } = useCart();

//   const totalItems = state.items.reduce(
//     (sum, item) => sum + item.quantity,
//     0
//   );

  return (
    <nav className="w-full shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        ShopApp
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-gray-600">
          Home
        </Link>

        <Link to="/cart" className="relative hover:text-gray-600">
          Cart 1
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;