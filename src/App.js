import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/HomePage/Home";
import Shop from "./components/ShopPage/Shop";
import DetailPage from "./components/DetailPage/DetailPage";
import ContactUs from "./components/ContactUs/ContactUs";
import Blog from "./components/Blog/Blog";
import Cart from "./components/Cart/Cart";
import CartModal from "./components/Reuseables/CartModal";
import CartContext from "./components/store/CartContext";
import LoginForm from "./components/LoginPage/LoginForm";
import CreateAcc from "./components/LoginPage/CreateAcc";
import "./App.css";

function App() {
  const ctx = useContext(CartContext);
  return (
    <Layout>
      {ctx.cartModal && <CartModal />}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/productdetails/:productId">
          <DetailPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <CreateAcc />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
