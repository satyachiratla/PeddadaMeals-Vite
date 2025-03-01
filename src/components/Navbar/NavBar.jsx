import { useState } from "react";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";

import { logout } from "../../../redux-store/slices/authSlice";
import Logo from "../../assets/images/logo.jpeg";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import useUser from "../../hooks/useUser";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();
  const { isAuthenticated, userData, refetch } = useUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector((state) => state.cart.items);

  const navVariants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.3, type: "tween" },
    },
  };

  const toggleHandler = () => {
    setToggle(false);
  };

  const signOutHandler = () => {
    dispatch(logout());
    refetch();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur flex justify-between items-center py-6 px-6 mx-auto border-b border-gray-300/75">
      <Link to="/">
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center gap-3 md:gap-4"
        >
          <img
            src={Logo}
            alt="logo"
            width={37}
            height={37}
            className="rounded-full border border-gray-200"
          />
          <p className="text-xl orange_gradient font-bold tracking-wider md:text-2xl">
            Peddada Meals
          </p>
        </motion.div>
      </Link>

      {/* <-- Mobile Navigation --> */}
      <MobileNav
        signOut={signOutHandler}
        session={isAuthenticated}
        toggleHandler={toggleHandler}
        setToggle={setToggle}
        toggle={toggle}
        items={items}
        userData={userData}
      />

      {/* <-- Desktop Navigation --> */}
      <DesktopNav
        session={isAuthenticated}
        signOut={signOutHandler}
        pathname={pathname}
        items={items}
        userData={userData}
      />
    </nav>
  );
}
