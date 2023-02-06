import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={styles.backdrop}>BackDrop</div>;
};

const ModalOverlays = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
