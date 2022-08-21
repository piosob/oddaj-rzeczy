import React, { useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "../../UI";
import {
  validateNameInput,
  validateEmailInput,
  validateMessageTextArea,
} from "./validate";
import { sendRequest } from "../../API/sendRequest";
import { homeHeroDecoration } from "../../../assets/img";
import classes from "./ContactForm.module.scss";

const INITIAL_VALUE = {
  nameInputValue: "",
  nameInputIsValid: false,
  emailInputValue: "",
  emailInputIsValid: false,
  messageInputValue: "",
  messageInputIsValid: false,
  formSubmitClick: false,
  formSentStatus: null,
};

const formReducer = (state, action) => {
  if (action.type === "NAME_INPUT") {
    return {
      ...state,
      nameInputValue: action.val,
      formSubmitClick: false,
      // formSentStatus: null,
    };
  } else if (action.type === "EMAIL_INPUT") {
    return {
      ...state,
      emailInputValue: action.val,
      formSubmitClick: false,
      // formSentStatus: null,
    };
  } else if (action.type === "MESSAGE_INPUT") {
    return {
      ...state,
      messageInputValue: action.val,
      formSubmitClick: false,
      // formSentStatus: null,
    };
  } else if (action.type === "FORM_SUBMIT") {
    return {
      ...state,
      formSubmitClick: true,
      nameInputIsValid: validateNameInput(action.nameVal),
      emailInputIsValid: validateEmailInput(action.emailVal),
      messageInputIsValid: validateMessageTextArea(action.messageVal),
      nameInputValue: "",
      emailInputValue: "",
      messageInputValue: "",
    };
  } else if (action.type === "END_FETCHING_DATA_OK") {
    return {
      ...state,
      formSentStatus: action.val,
    };
  } else if (action.type === "END_FETCHING_DATA_NOT_OK") {
    return {
      ...state,
      formSentStatus: "error",
    };
  }
  return INITIAL_VALUE;
};

const ContactForm = () => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_VALUE);

  // useEffect(() => {
  // const timeoutId = setTimeout(() => {
  //   console.log(formState.formSentStatus);
  //   dispatchForm({
  //     type: "HIDE_DESC",
  //   });
  // }, 2_000);
  // return () => clearTimeout(timeoutId);
  // }, [formState.formSentStatus]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      dispatchForm({
        type: "NAME_INPUT",
        val: value,
      });
    } else if (name === "email") {
      dispatchForm({
        type: "EMAIL_INPUT",
        val: value,
      });
    } else if (name === "message") {
      dispatchForm({
        type: "MESSAGE_INPUT",
        val: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchForm({
      type: "FORM_SUBMIT",
      nameVal: formState.nameInputValue,
      emailVal: formState.emailInputValue,
      messageVal: formState.messageInputValue,
    });
    if (
      validateNameInput(formState.nameInputValue) &&
      validateEmailInput(formState.emailInputValue) &&
      validateMessageTextArea(formState.messageInputValue)
    ) {
      const data = {
        name: formState.nameInputValue,
        email: formState.emailInputValue,
        message: formState.messageInputValue,
      };
      sendRequest(data, process.env.REACT_APP_CONTACT)
        .then((result) => {
          // console.log(result);
          if (result) {
            dispatchForm({
              type: "END_FETCHING_DATA_OK",
              val: result.status,
            });
          }
        })
        .catch((err) => {
          dispatchForm({
            type: "END_FETCHING_DATA_NOT_OK",
          });
        });
    }
  };
  return (
    <section className={classes.container}>
      <h3 className={classes.heading}>Skontaktuj się z nami</h3>
      <img src={homeHeroDecoration} alt="decoration" />
      {formState.formSentStatus === "success" && (
        <p className={classes.successDescription}>
          Wiadomość została wysłana!
          <span>Wkrótce się skontaktujemy.</span>
        </p>
      )}
      {formState.formSentStatus === "error" && (
        <p className={classes.errorDescription}>
          Błąd! Wiadomość nie została wysłana.
        </p>
      )}
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.nameEmailInputArea}>
          <Input
            name="name"
            value={formState.nameInputValue}
            label="Wpisz swoje imię"
            placeholder="Krzysztof"
            inputClassName={`${
              formState.formSubmitClick && !formState.nameInputIsValid
                ? classes.inputInvalid
                : ""
            }`}
            onChange={changeHandler}
          >
            {formState.formSubmitClick && !formState.nameInputIsValid && (
              <p className={classes.errorDescription}>
                Podane imię jest nieprawidłowe!
              </p>
            )}
          </Input>
          <Input
            name="email"
            value={formState.emailInputValue}
            label="Wpisz swój email"
            placeholder="abc@xyz.pl"
            inputClassName={`${
              formState.formSubmitClick && !formState.emailInputIsValid
                ? classes.inputInvalid
                : ""
            }`}
            onChange={changeHandler}
          >
            {formState.formSubmitClick && !formState.emailInputIsValid && (
              <p className={classes.errorDescription}>
                Podany email jest nieprawidłowy!
              </p>
            )}
          </Input>
        </div>
        <label className={classes["label-text-area"]}>
          Wpisz swoją wiadomość
          <textarea
            name="message"
            value={formState.messageInputValue}
            className={`${classes["text-area"]} ${
              formState.formSubmitClick && !formState.messageInputIsValid
                ? classes.inputInvalid
                : ""
            }`}
            rows="5"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            onChange={changeHandler}
          />
          {formState.formSubmitClick && !formState.messageInputIsValid && (
            <p className={classes.errorDescription}>
              Wiadomość musi mieć conajmniej 120 znaków!
            </p>
          )}
        </label>
        <Button className={classes["submit-button"]} type="submit">
          <FontAwesomeIcon icon="fa-solid fa-message" />
          Wyślij!
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
