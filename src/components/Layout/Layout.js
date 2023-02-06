import React, { useContext } from "react";
import MainHeader from "../Header/MainHeader";
import Footer from "../Footer/Footer";
import MobileHeader from "../MobileHeader/MobileHeader";
import MobileHeaderContext from "../store/MobileHeaderContext";
const Layout = (props) => {
  const mtx = useContext(MobileHeaderContext);
  return (
    <React.Fragment>
      <MainHeader />
      {mtx.onToggle && <MobileHeader />}
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
