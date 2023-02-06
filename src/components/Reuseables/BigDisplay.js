import React, { useRef, useState, useContext, useEffect } from "react";
import styles from "./BigDisplay.module.css";
import TimeDisplay from "./TimeDisplay";
import CartContext from "../store/CartContext";
import { convertCurr } from "../store/HelperFx";
////////////////// GLOBAL VARIABLES
let sizeBtn = false;
let colorBtn = false;

const BigDisplay = (props) => {
  ////////////////// STATE
  const ctx = useContext(CartContext);
  const formData = ctx.inputData;
  const [img, setImg] = useState(props.data.images[0]);
  const [smallImgState, setSmallImgState] = useState({
    active: 0,
  });
  const [sizeState, setSizeState] = useState({ active: null });
  const [colorState, setColorState] = useState({ active: null });

  const actualPrice = convertCurr(props.data.actual_price, ctx.currency);
  const salesPrice = convertCurr(props.data.sale_price(), ctx.currency);

  formData.id = props.data.productId;
  formData.title = props.data.title;
  formData.price = salesPrice;
  formData.img = props.data.img;
  formData.quantity = 1;

  const [inputData, setInputData] = useState(ctx.inputData);
  const [checked, setChecked] = useState(false);
  const [cartBtnState, setCartBtnState] = useState(sizeBtn && colorBtn);

  // HELPER FUNCTIONS FOR TOGGLE CLASS ON SELECTION
  const toggleActive = (index, state, setState) => {
    setState({ ...state, active: index });
  };
  const toggleActiveClass = (index, state, baseClass, activeClass) => {
    if (state.active === index) {
      return `${baseClass} ${activeClass}`;
    } else {
      return `${baseClass}`;
    }
  };

  // COLOR AND SIZE SELECT HANDLER

  const sizeAndColorSelectHandler = (e, i) => {
    const el = e.target.closest("div").querySelector("input");
    if (!el) return;
    if (el.name === "sizes") {
      el.checked = true;
      sizeBtn = true;
      setCartBtnState(sizeBtn && colorBtn);
      setInputData((prev) => {
        return {
          ...prev,
          size: el.value,
        };
      });
      toggleActive(i, sizeState, setSizeState);
    }
    if (el.name === "colors") {
      el.checked = true;
      colorBtn = true;
      setCartBtnState(sizeBtn && colorBtn);
      setInputData((prev) => {
        return {
          ...prev,
          color: el.value,
        };
      });
    }
    toggleActive(i, colorState, setColorState);
  };
  // ADD TO CART HANDLER
  const addToCartHandler = (e) => {
    e.preventDefault();
    ctx.addItemHandler(inputData);
    sizeBtn = false;
    colorBtn = false;
    setCartBtnState(sizeBtn && colorBtn);
  };
  // QUANTITY CHANGE HANDLER
  const qtyChangeHandler = (e) => {
    const { name } = e.target.closest("button");
    if (name === "increase") {
      setInputData((prev) => {
        return {
          ...prev,
          quantity: prev.quantity + 1,
        };
      });
    }
    if (name === "decrease") {
      if (inputData.quantity === 1) return;
      setInputData((prev) => {
        return {
          ...prev,
          quantity: prev.quantity - 1,
        };
      });
    }
  };

  // AGREE WITH TERMS AND CONDITIONS: Handler
  const checkBoxHandler = (e) => {
    if (!e.target.checked) setChecked(false);
    if (e.target.checked) setChecked(true);
  };

  // BUY HANDLER
  const buyHandler = () => {};

  // IMAGE CHANGE HANDLER

  const imgSelectHandler = (img, i) => {
    setImg(img);
    toggleActive(i, smallImgState, setSmallImgState);
  };

  // UNIVERSAL STYLE CLASS
  const customClass = `${styles.main} ${props.className}`;

  return (
    <div className={customClass}>
      <div className={styles.image}>
        <div className={styles.img_big}>
          <div
            className={styles.imgB}
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
        <div className={styles.s_img_container}>
          {props.data.images.map((img, i) => (
            <div
              className={toggleActiveClass(
                i,
                smallImgState,
                styles.img_s,
                styles.active
              )}
              onClick={() => imgSelectHandler(img, i)}
              key={`${Math.random()}BIG-DISP-img${i}`}
            >
              <img src={img} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.title}>
          <h1 className={styles.heading}>{props.data.title}</h1>
          <p className={styles.sku}>SKU:{props.data.sku}</p>
        </div>
        <div className={styles.price}>
          <p className={styles.actual_price}>
            {ctx.currency}:{actualPrice}
          </p>
          <p className={styles.sale_price}>
            {ctx.currency}:{salesPrice}
          </p>
        </div>

        {/* <TimeDisplay className={styles.time_left} /> */}

        <div className={styles.description}>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
        <form onSubmit={addToCartHandler}>
          <div className={styles.sizes}>
            <p>Size :</p>
            {props.data.sizes.map((size, i) => (
              <div
                className={toggleActiveClass(
                  i,
                  sizeState,
                  styles.size,
                  styles.active
                )}
                onClick={(e) => {
                  sizeAndColorSelectHandler(e, i);
                }}
                key={`${Math.random()}BIG-DISP-size${i}`}
              >
                <label htmlFor={`${size}`}>{size}</label>
                <input type="radio" value={`${size}`} name="sizes" />
              </div>
            ))}
          </div>
          <div className={styles.colors}>
            <p>Color:</p>
            {props.data.colors.map((color, i) => (
              <div
                className={toggleActiveClass(
                  i,
                  colorState,
                  styles.color,
                  styles.active
                )}
                onClick={(e) => sizeAndColorSelectHandler(e, i)}
                style={{ backgroundColor: `${color}` }}
                key={`${Math.random()}BIG-DISP-color${i}`}
              >
                <label htmlFor={`${color}`} />
                <input type="radio" value={`${color}`} name="colors" />
              </div>
            ))}
          </div>
          <div className={styles.material}>
            <p>Material:</p>
            {props.data.materials.map((m, i) => (
              <p key={`${Math.random()}BIG-DISP-mat${i}`}>{m}</p>
            ))}
          </div>

          <div className={styles.order_qty}>
            <div className={styles.qty_container}>
              <p>QTY:</p>
              <div className={styles.enter_qty}>
                <button
                  type="button"
                  className={styles.btn}
                  name="decrease"
                  onClick={qtyChangeHandler}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                </button>
                <p className={styles.qty} type="number">
                  {inputData.quantity}
                </p>
                <button
                  type="button"
                  className={styles.btn}
                  name="increase"
                  onClick={qtyChangeHandler}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </button>
              </div>
            </div>
            <button
              className={
                cartBtnState
                  ? `${styles.cart_btn} ${styles.active}`
                  : `${styles.buy_btn}`
              }
              // onClick={addToCartHandler}
              disabled={!cartBtnState}
              type="submit"
            >
              ADD TO CART
            </button>
            <div className={styles.like_btn}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </div>
          </div>
        </form>
        <form className={styles.form}>
          <input type="checkbox" onChange={checkBoxHandler} />
          <label>I agree with terms and conditions</label>
        </form>
        <button
          className={
            checked ? `${styles.buy_btn} ${styles.active}` : `${styles.buy_btn}`
          }
          disabled={!checked}
          onClick={buyHandler}
        >
          Buy It Now
        </button>
      </div>
    </div>
  );
};

export default BigDisplay;
