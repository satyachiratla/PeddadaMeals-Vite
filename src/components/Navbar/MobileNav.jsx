/* eslint-disable react/prop-types */
import { Link } from "react-router";
import { FaUserCircle } from "react-icons/fa";

export default function MobileNav({
  setToggle,
  toggleHandler,
  toggle,
  items,
  session,
  signOut,
  userData,
}) {
  return (
    <div className="md:hidden relative">
      {session ? (
        <div>
          {userData?.user?.profilePic ? (
            <img
              src={userData?.user.profilePic}
              alt="logo"
              width={20}
              height={20}
              className="rounded-full object-cover w-10 h-10"
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <FaUserCircle
              size={28}
              onClick={() => setToggle((prev) => !prev)}
            />
          )}
          {toggle && (
            <div className="custom_dropdown">
              <Link
                to="/cart"
                className="dropdown_link"
                onClick={toggleHandler}
              >
                Cart{" "}
                <span className="text-white bg-amber-700 rounded-full px-1">
                  {items.length}
                </span>
              </Link>
              <Link
                to="/orders"
                className="custom_dropdown_link"
                onClick={toggleHandler}
              >
                Your Orders
              </Link>
              <button
                className="w-full btn btn-neutral btn-sm"
                onClick={() => {
                  setToggle(false);
                  signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <button
            type="button"
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="btn btn-neutral btn-sm"
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
}
