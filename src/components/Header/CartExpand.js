import React, { useContext } from "react";
import styles from "./CartExpand.module.css";
import { Link } from "react-router-dom";
import CartTableRow from "../Reuseables/CartTableRow";
import CartContext from "../store/CartContext";
import { convertCurr } from "../store/HelperFx";
const CartExpand = (props) => {
  const ctx = useContext(CartContext);
  const total = convertCurr(ctx.totalAmount, ctx.currency);
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      {ctx.items.length > 0 && (
        <>
          <table>
            <tbody>
              {ctx.items.map((data, i) => (
                <CartTableRow
                  data={data}
                  className={styles.row}
                  key={`${Math.random()}CART_EXPAND_CART_ROW${i}`}
                />
              ))}
            </tbody>
          </table>
          <div className={styles.totals_container}>
            <p>Total Amount</p>
            <p className={styles.totals}>{total}</p>
          </div>
        </>
      )}
      {ctx.items.length === 0 && <p>Your cart is empty</p>}
      <button className={styles.view_cart}>
        <Link to="./cart">View Cart</Link>
      </button>
    </div>
  );
};

export default CartExpand;
