import React, { useState, useRef, useEffect } from "react";
import {
  validateEmailInput,
  validatePasswordLength,
} from "../../Home/HomeContact/validate";
import { handleLoginRegister } from "../../API/sendRequest";
import { LogInRegister } from "../../UI/";
import { Input } from "../../UI/";
import classes from "./Register.module.scss";

const Register = (props) => {
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passIsValid, setPassIsValid] = useState(false);
  const [pass2IsValid, setPass2IsValid] = useState(false);
  const [passIsEqual, setPassIsEqual] = useState(false);
  const [formIsTouched, setFormIsTouched] = useState(false);
  const [responseOK, setResponseOK] = useState(false);

  const emailInputRef = useRef();
  const passInputRef = useRef();
  const pass2InputRef = useRef();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setResponseOK(false);
    }, 5_000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [responseOK]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setResponseOK(false);
    setFormIsTouched(true);
    let enteredEmailInputValue = emailInputRef.current.value;
    let enteredPassInputValue = passInputRef.current.value;
    let enteredPass2InputValue = pass2InputRef.current.value;
    setEmailIsValid(validateEmailInput(enteredEmailInputValue));
    setPassIsValid(validatePasswordLength(enteredPassInputValue));
    setPass2IsValid(validatePasswordLength(enteredPass2InputValue));
    setPassIsEqual(enteredPassInputValue === enteredPass2InputValue);
    console.log(emailIsValid && passIsValid && pass2IsValid && formIsTouched);
    if (
      validateEmailInput(enteredEmailInputValue) &&
      validatePasswordLength(enteredPassInputValue) &&
      validatePasswordLength(enteredPass2InputValue)
    ) {
      const data = {
        email: enteredEmailInputValue,
        password: enteredPassInputValue,
        returnSecureToken: true,
      };
      handleLoginRegister(process.env.REACT_APP_REGISTER, data)
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            return response.json().then((data) => {
              console.log(data.error.message);
            });
          } else {
            setResponseOK(true);
          }
          return response.json();
        })
        .catch((error) => console.log(error));
    }
    emailInputRef.current.value = "";
    passInputRef.current.value = "";
    pass2InputRef.current.value = "";
  };

  const handleChange = () => {
    setFormIsTouched(false);
    setResponseOK(false);
  };

  return (
    <LogInRegister
      title="Załóż konto"
      handleSubmit={handleSubmit}
      firstButtonDescription="Zaloguj się"
      secondButtonDescription="Załóż konto"
      path="logowanie"
    >
      {responseOK && (
        <p className={classes.successDescription}>Konto zostało utworzone.</p>
      )}
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
      <Input
        labelClassName={classes.label}
        inputClassName={classes.input}
        label="Powtórz hasło"
        type="password"
        ref={pass2InputRef}
        handleChange={handleChange}
      />
      {!pass2IsValid && formIsTouched && (
        <p className={classes["error-description"]}>
          Podane hasło jest za krótkie!
        </p>
      )}
      {!passIsEqual && formIsTouched && (
        <p className={classes["error-description"]}>Podano różne hasła!</p>
      )}
    </LogInRegister>
  );
};

export default Register;
