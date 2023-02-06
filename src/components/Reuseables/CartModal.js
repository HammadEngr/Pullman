import React, { useContext } from "react";
import styles from "./CartModal.module.css";
import { Link } from "react-router-dom";
import Modal from "../Layout/Modal";
import pullman from "../../images/InStore/pullman_four.jpg";
import CartContext from "../store/CartContext";
const CartModal = (props) => {
  const ctx = useContext(CartContext);
  const closeHandler = (e) => {
    const btn = e.target.closest("div");
    if (!btn) return;
    ctx.cartModalState(false);
  };
  const customClass = `${styles.main} ${props.className}`;
  return (
    <Modal>
      <div className={customClass}>
        <div className={styles.sub_box}>
          <div className={styles.img_box}>
            <img src={pullman} />
          </div>
          <div className={styles.title_box}>
            <h1 className={styles.title}>SELL MENZ ROCKY</h1>
            <p className={styles.added}>
              <span>
                <img />
              </span>
              Added to cart successfully
            </p>
          </div>
          <div className={styles.btns}>
            <button className={styles.view_cart}>
              <Link to="/cart" onClick={closeHandler}>
                View Cart
              </Link>
            </button>
            <button className={styles.checkout} onClick={closeHandler}>
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
