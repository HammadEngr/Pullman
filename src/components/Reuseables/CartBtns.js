import React, { useContext } from "react";
import styles from "./CartBtns.module.css";
import CartContext from "../store/CartContext";
import { convertCurr } from "../store/HelperFx";
const CartBtns = (props) => {
  const ctx = useContext(CartContext);
  const total = convertCurr(ctx.totalAmount, ctx.currency);
  const updateCartHandler = () => {};
  const shoppingHandler = () => {};
  const cartClearHandler = () => {};
  const customClass = `${styles.btns_container} ${props.className}`;
  return (
    <div className={customClass}>
      <button onClick={updateCartHandler}>Update Cart</button>
      <button onClick={shoppingHandler}>Continue Shopping</button>
      <button onClick={cartClearHandler}>Clear Cart</button>
      <div className={styles.cart_total}>
        <p>Cart Totals:</p>
        <p>
          {ctx.currency}:{total}
        </p>
      </div>
      <button>Proced to CheckOut</button>
    </div>
  );
};

export default CartBtns;
