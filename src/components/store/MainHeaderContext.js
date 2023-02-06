import React, { useState } from "react";
const MainHeaderContext = React.createContext({
  onHome: false,
  onProduct: false,
  onClickHandler: () => {},
});
export const MainHeaderContextProvider = (props) => {
  const [onHome, setOnHome] = useState(false);
  const [onProduct, setOnProduct] = useState(false);
  const onClickHandler = (title) => {
    if (!title) return;
    if (title === "Home") setOnHome((prev) => !prev);
    if (title === "Product") setOnProduct((prev) => !prev);
  };
  return (
    <MainHeaderContext.Provider
      value={{
        onHome: onHome,
        onProduct: onProduct,
        onClickHandler: onClickHandler,
      }}
    >
      {props.children}
    </MainHeaderContext.Provider>
  );
};
export default MainHeaderContext;
