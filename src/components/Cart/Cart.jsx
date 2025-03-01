import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../../redux-store/slices/cartSlice";

import CartItem from "./CartItem";
import ChooseAddress from "./ChooseAddress";

export default function Cart() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const cartVariants = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.5 },
    },
  };

  const checkoutVariants = {
    hidden: {
      y: 250,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.5 },
    },
  };

  const cartItemAddHandler = (item) => {
    dispatch(addItemToCart({ ...item, quantity: 1 }));
  };

  const cartItemRemoveHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  let content;

  if (items.length === 0) {
    content = (
      <p className="text-cyan-500 font-noto text-lg tracking-wide">
        No items added Yet! <br></br> Please checkout our menu add items that
        you like...
      </p>
    );
  } else {
    content = (
      <>
        <ul className="space-y-5">
          {items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onAdd={cartItemAddHandler.bind(null, item)}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />
          ))}
        </ul>
        <div className="mt-4 flex justify-center items-center">
          <span className="font-bold text-2xl text-cyan-500 tracking-wider items-center pr-4">
            Total Amount:
          </span>
          <span className="font-semibold text-zinc-100 font-inter text-2xl">
            ₹{totalAmount}
          </span>
        </div>
      </>
    );
  }

  return (
    <>
      <motion.div
        variants={cartVariants}
        initial="hidden"
        animate="visible"
        className="mt-8 rounded-xl shadow p-8 text-white bg-sky-950 max-w-2xl mx-auto"
      >
        {content}
      </motion.div>
      <motion.div
        variants={checkoutVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <Checkout onAddOrder={orderSubmitHandler} isSubmitting={isSubmitting} /> */}
        <ChooseAddress items={items} totalPrice={totalAmount} />
      </motion.div>
    </>
  );
}
