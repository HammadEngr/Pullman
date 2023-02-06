import React, { useReducer } from "react";
/// CONTEXT
const CartContext = React.createContext({
  inputData: {},
  items: [],
  totalAmount: 0,
  currency: "",
  selectCurrency: (val) => {},
  addItemHandler: (item) => {},
  removeItemHandler: (item) => {},
  deleteProduct: (id) => {},
  cartModalState: (val) => {},
});
/////////////////////////////////////////////////////////
/// DEFAULT CART STATE
const defaultCartState = {
  inputData: {
    id: "",
    title: "",
    price: "",
    quantity: 1,
    size: "",
    color: "",
    material: "",
    img: "",
  },
  items: [],
  totalAmount: 0,
  currency: "GBP",
  cartModal: false,
};

// GET TOTALs, HELPER FUNCTION
const calcTotals = (arr) => {
  const total = arr
    .map((el) => el.price * el.quantity)
    .reduce((cur, acc) => cur + acc, 0);
  return total;
};
// GET INDEX OF ITEM, HELPER FUNCTION
const getIndex = (arr, inputId) => {
  const index = arr.findIndex((item) => item.id === inputId);
  return index;
};
// REDUCER FUNCTION
const cartReducer = (state, action) => {
  // ADDING ITEMS
  if (action.type === "ADD") {
    // GETTING TOTAL AMOUNT
    state.totalAmount = calcTotals(state.items);

    // CHECKING EXISTING ITEMS
    const existingCartItemIndex = getIndex(state.items, action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];

    // UPDATING EXISTING ITEMS
    if (existingCartItem) {
      existingCartItem.quantity =
        existingCartItem.quantity + action.item.quantity;

      // UPDATING TOTALS
      state.totalAmount = calcTotals(state.items);
    } else {
      state.items = [...state.items, action.item];
      state.totalAmount = calcTotals(state.items);
    }
    return {
      items: state.items,
      inputData: state.inputData,
      currency: state.currency,
      totalAmount: state.totalAmount,
    };
  }
  // REMOVING ITEMS(qty only)
  if (action.type === "REMOVE") {
    // GET INDEX
    const itemIndex = getIndex(state.items, action.item.id);
    const existingItem = state.items[itemIndex];
    // GAURD CLAUSE
    if (existingItem.quantity === 1) return;
    // UPDATE ITEM
    state.items[itemIndex].quantity = state.items[itemIndex].quantity - 1;
    state.totalAmount = calcTotals(state.items);
    return {
      items: state.items,
      inputData: state.inputData,
      currency: state.currency,
      totalAmount: state.totalAmount,
    };
  }
  // DELETING ITEMS FROM STATE
  if (action.type === "DELETE") {
    // GET INDEX
    const itemIndex = getIndex(state.items, action.id);
    // REMOVE ITEM
    state.items.splice(itemIndex, 1);
    // UPDATE TOTALS
    state.totalAmount = calcTotals(state.items);
    return {
      items: state.items,
      inputData: state.inputData,
      currency: state.currency,
      totalAmount: state.totalAmount,
    };
  }
  if (action.type === "CURRENCY") {
    state.currency = action.val;
    return {
      items: state.items,
      inputData: state.inputData,
      totalAmount: state.totalAmount,
      currency: state.currency,
    };
  }
  if (action.type === "MODAL") {
    state.cartModal = action.val;
    return {
      items: state.items,
      inputData: state.inputData,
      totalAmount: state.totalAmount,
      currency: state.currency,
      cartModal: state.cartModal,
    };
  }

  return defaultCartState;
};
/////////////////////////////////////////////////////////////
/// CONTEXT PROVIDER
export const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };
  const deleteProduct = (id) => {
    dispatchCartAction({ type: "DELETE", id: id });
  };
  const selectCurrency = (val) => {
    dispatchCartAction({ type: "CURRENCY", val: val });
  };
  const cartModalState = (val) => {
    dispatchCartAction({ type: "MODAL", val: val });
  };

  const contextValue = {
    items: cartState.items,
    inputData: cartState.inputData,
    totalAmount: cartState.totalAmount,
    currency: cartState.currency,
    cartModal: cartState.cartModal,
    selectCurrency: selectCurrency,
    addItemHandler: addItemHandler,
    removeItemHandler: removeItemHandler,
    deleteProduct: deleteProduct,
    cartModalState: cartModalState,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
