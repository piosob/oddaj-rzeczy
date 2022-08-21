import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import AuthContex from "../../store/auth-contex";
import Button from "../../UI/Button/Button";
import classes from "./LoginSection.module.scss";

const LoginSection = () => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthContex);
  const onLogoutNavigate = () => {
    navigate("/wylogowano", { replace: true });
  };
  return (
    <aside className={classes["login-btns-container"]}>
      {authCtx.isLoggedIn && (
        <h2 className={classes.successDesc}>Jesteś zalogowany.</h2>
      )}
      {authCtx.isLoggedIn && <h3> {authCtx.email}</h3>}
      {!authCtx.isLoggedIn && (
        <Button className={`${classes["non-active"]} ${classes.btn}`}>
          <Link to="/logowanie">
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" />
            Zaloguj
          </Link>
        </Button>
      )}
      {!authCtx.isLoggedIn && (
        <Button className={`${classes.active} ${classes.btn}`}>
          <Link to="/rejestracja">
            <FontAwesomeIcon icon="fa-solid fa-user-plus" />
            Załóż konto
          </Link>
        </Button>
      )}
      {authCtx.isLoggedIn && (
        <Button
          className={classes.logoutBtn}
          onLogout={authCtx.onLogOut}
          onLogoutNavigate={onLogoutNavigate}
        >
          <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
          Wyloguj!
        </Button>
      )}
    </aside>
  );
};

export default LoginSection;
