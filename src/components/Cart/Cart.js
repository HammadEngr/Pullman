import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import PagesHeader from "../Reuseables/PagesHeader";
import CartTableRow from "../Reuseables/CartTableRow";
import CartBtns from "../Reuseables/CartBtns";
import CartContext from "../store/CartContext";
import bag from "../../images/icons/shopping-bag.png";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const customClass = `${styles.main} ${props.className}`;
  return (
    <div className={customClass}>
      <PagesHeader className={styles.header}>
        <h1>Shopping Cart</h1>
      </PagesHeader>
      {ctx.items.length === 0 && (
        <div className={styles.empty}>
          <img src={bag} />
          <h1>Shopping Cart</h1>
          <p>Your Cart is Currently Empty</p>
          <Link to="/home">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
      {ctx.items.length > 0 && (
        <div className={styles.product_details}>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <td>Image</td>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Total</td>
                  <td>Remove</td>
                </tr>
              </thead>
              <tbody>
                {ctx.items.map((item, i) => (
                  <CartTableRow
                    data={item}
                    key={`${Math.random()}CART-CART_ROW${i}`}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <CartBtns />
        </div>
      )}
    </div>
  );
};

export default Cart;
