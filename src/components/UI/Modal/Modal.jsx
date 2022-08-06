import ReactDOM from "react-dom";
import Button from "../Button/Button";
import classes from "./Modal.module.scss";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h3 className={classes.title}>{props.title}</h3>
      </header>
      <main className={classes.main}>
        <p className={classes.message}>{props.message}</p>
      </main>
      <footer className={classes.footer}>
        <Button onConfirmModal={props.onConfirm}>Zamknij</Button>
      </footer>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} />,
        portalElement
      )}
    </>
  );
};

export default Modal;

// <header className={classes.header}>
// <h3 className={classes.title}>{props.title}</h3>
// </header>
// <main className={classes.main}>
// <p className={classes.message}>{props.message}</p>
// </main>
// <footer className={classes.footer}>
// <Button>Zamknij</Button>
// </footer>
