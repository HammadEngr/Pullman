import React, { useContext } from "react";
import styles from "./CartTableRow.module.css";
import { Link } from "react-router-dom";
import CartContext from "../store/CartContext";
import { convertCurr } from "../store/HelperFx";

const CartTableRow = (props) => {
  const ctx = useContext(CartContext);
  // GETTING ITEM IN STATE.ITEMS FROM CONTEXT
  let item = ctx.items.find((item) => item.id === props.data.id);
  // const price = convertCurr(props.data.price, ctx.currency);
  // QUANTITY CHANGE HANDLER
  const qtyChangeHandler = (e) => {
    const { name } = e.target.closest("button");
    // INCREASE
    if (name === "increase") {
      ctx.addItemHandler({ ...item, quantity: 1 });
    }
    // DECREASE
    if (name === "decrease") {
      if (item.quantity === 1) return;
      ctx.removeItemHandler(item);
    }
  };
  const deleteHandler = () => {
    ctx.deleteProduct(item.id);
  };
  // UNIVERSAL STYLE CLASS
  const customClass = `${styles.main} ${props.className}`;
  return (
    <tr className={customClass}>
      <td>
        <Link to={`/detailspage/${props.data.productId}`}>
          <img src={props.data.img} />
        </Link>
      </td>
      <td>
        <Link to={`/detailspage/${props.data.productId}`}>
          <p className={styles.name}>{props.data.title}</p>
          <span className={styles.size}>{props.data.size} /</span>
          <span className={styles.color}>{props.data.color} /</span>
          <span className={styles.material}>Material</span>
        </Link>
      </td>
      <td className={styles.price}>
        <p>
          <span>{ctx.currency}:</span>
          {props.data.price}
        </p>
      </td>
      <td className={styles.pro_qty}>
        <div className={styles.qty}>
          <button type="button" name="decrease" onClick={qtyChangeHandler}>
            -
          </button>
          <p>{item.quantity}</p>
          <button type="button" name="increase" onClick={qtyChangeHandler}>
            +
          </button>
        </div>
      </td>
      <td className={styles.total}>
        {ctx.currency}:{props.data.price * item.quantity}
      </td>
      <td className={styles.remove}>
        <button onClick={deleteHandler} className={styles.del_btn}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CartTableRow;
