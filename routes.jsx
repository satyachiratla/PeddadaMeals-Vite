import { createBrowserRouter } from "react-router";
import MealsPage from "./src/pages/Meals";
import Categories from "./src/components/Meals/Categories";
import Profile from "./src/pages/Profile";
import AddressesPage from "./src/pages/Addresses";
import OrdersPage from "./src/pages/Orders";
import CartPage from "./src/pages/Cart";

export const router = createBrowserRouter([
  { path: "/", element: <Categories /> },
  { path: "/meals/:category", element: <MealsPage /> },
  { path: "/profile", element: <Profile /> },
  { path: "/addresses", element: <AddressesPage /> },
  { path: "/orders", element: <OrdersPage /> },
  { path: "/cart", element: <CartPage /> },
]);
