import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  validateEmailInput,
  validatePasswordLength,
} from "../../Home/HomeContact/validate";
import { handleLoginRegister } from "../../API/sendRequest";
import { LogInRegister } from "../../UI/";
import { Input } from "../../UI/";
import AuthContex from "../../store/auth-contex";
import classes from "./LogIn.module.scss";

const LogIn = (props) => {
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passIsValid, setPassIsValid] = useState(false);
  const [formIsTouched, setFormIsTouched] = useState(false);

  const authCtx = useContext(AuthContex);

  const emailInputRef = useRef();
  const passInputRef = useRef();

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormIsTouched(true);
    let enteredEmailInputValue = emailInputRef.current.value;
    let enteredPassInputValue = passInputRef.current.value;
    setEmailIsValid(validateEmailInput(enteredEmailInputValue));
    setPassIsValid(validatePasswordLength(enteredPassInputValue));

    if (
      validateEmailInput(enteredEmailInputValue) &&
      validatePasswordLength(enteredPassInputValue)
    ) {
      const data = {
        email: enteredEmailInputValue,
        password: enteredPassInputValue,
        returnSecureToken: true,
      };
      handleLoginRegister(process.env.REACT_APP_LOGIN, data)
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            return response.json().then((data) => {
              console.log(data.error.message);
            });
          } else {
            navigate("/", { replace: true });
          }
          return response.json();
        })
        .then((result) => {
          // extra '+' convert string into number
          const expirationTime = new Date(
            new Date().getTime() + +result.expiresIn * 1000
          );
          authCtx.onLogin(result.idToken, result.email, expirationTime);
        })
        .catch((error) => console.log(error));
    }
    emailInputRef.current.value = "";
    passInputRef.current.value = "";
  };

  const handleChange = () => {
    setFormIsTouched(false);
  };

  return (
    <LogInRegister
      title="Zaloguj się"
      handleSubmit={handleSubmit}
      firstButtonDescription="Załóż konto"
      secondButtonDescription="Zaloguj się"
      path="rejestracja"
    >
      <Input
        labelClassName={classes.label}
        inputClassName={classes.input}
        label="Email"
        type="email"
        ref={emailInputRef}
        handleChange={handleChange}
      />
      {!emailIsValid && formIsTouched && (
        <p className={classes["error-description"]}>Niepoprawny email!</p>
      )}
      <Input
        labelClassName={classes.label}
        inputClassName={classes.input}
        label="Hasło"
        type="password"
        ref={passInputRef}
        handleChange={handleChange}
      />
      {!passIsValid && formIsTouched && (
        <p className={classes["error-description"]}>
          Podane hasło jest za krótkie!
        </p>
      )}
    </LogInRegister>
  );
};

export default LogIn;
