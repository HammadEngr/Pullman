import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MainHeaderContextProvider } from "./components/store/MainHeaderContext";
import { MobileHeaderContextProvider } from "./components/store/MobileHeaderContext";
import { CartContextProvider } from "./components/store/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainHeaderContextProvider>
      <MobileHeaderContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </MobileHeaderContextProvider>
    </MainHeaderContextProvider>
  </BrowserRouter>
);
