import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick = {props.onClose}/>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
};

const portalElement = document.getElementById("overlays"); // helper element
const Modal = (props) => {
  return (
    <Fragment>
      {/* (1) */}
      {/* <Backdrop/>
        <ModalOverlay>
            {props.children}
        </ModalOverlay> */}

      {/* Now here we will create portal for ModalOverlay and Backdrop */}
      {ReactDOM.createPortal(<Backdrop onClose = {props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

/*((1)) In below expressions we are not using react portals but to ensure that our HTML code is not all over 
the place in final application we will use react portals here. For that we need to import react portals from the react dom */

/* Wrapping div in the return in Cart component is replaced by this modal component */

/* since for closing the cart when the backdrop is clicked is required for that we need to pass on a method declared in the App.js file
named as "hideCartHandler" and to pass it to the backdrop we need to pass this using prop through multiple component but we can use context in this
scenario but since we use context in this case in Modal.js then Modal.js will be restricted towards only one work that is closing the cart but 
if we want to use Modals.js for other uses also then using context in this scenario is not suggestable therefore instead of context we will use chain
of props only. */

/* Backdrop here is the blur background that is created when the Your Cart button on the header is clicked. */