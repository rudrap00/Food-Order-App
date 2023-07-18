import { Fragment } from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => <div className={classes.backdrop} onClick={props.onClose} />;

const ModalOverlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

const portalElement = document.getElementById("overlays");

const Modal = (props) => (
  <Fragment>
    {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
    {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
  </Fragment>
);

export default Modal;
