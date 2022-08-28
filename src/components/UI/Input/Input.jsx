// import React from "react";

import React, { useContext } from "react";
import FormContex from "../../store/form-contex";
import classes from "./Input.module.scss";

const Input = React.forwardRef((props, ref) => {
  const formCtx = useContext(FormContex);

  const handleChange = (event) => {
    const { name, value } = event.target;
    props.handleChange && props.handleChange();
    props.onChange && props.onChange(event);
    if (name === "customOrganization") {
      formCtx.onStep3CustomOrganizationChange(value);
    } else {
      formCtx.onStep4Change(name, value);
    }
  };

  const handleLabelClick = (event) => {
    if (typeof formCtx.onRadioClick !== "function") return;
    if (typeof formCtx.onWhoHelpClick !== "function") return;
    // setting contex step1Radio value in step 1
    if (event.target.type === "radio") {
      formCtx.onRadioClick(event.target.value);
    }
    // setting contex step3WhoHelp value in step 3
    if (event.target.type === "checkbox") {
      formCtx.onWhoHelpClick(event.target.value);
    }
  };

  return (
    <label
      className={`${classes.label} ${
        props.labelClassName ? props.labelClassName : ""
      }`}
      onClick={handleLabelClick}
    >
      {props.label}
      <input
        name={props.name}
        value={props.value}
        className={`${classes.input} ${
          props.inputClassName ? props.inputClassName : ""
        }`}
        type={props.type || "text"}
        placeholder={props.placeholder}
        ref={ref}
        onChange={handleChange}
      />
      {props.children}
    </label>
  );
});

// const Input = React.forwardRef((props, ref) => {
//   return (
//     <label
//       className={`${classes.label} ${
//         props.labelClassName ? props.labelClassName : ""
//       }`}
//     >
//       {props.label}
//       <input
//         ref={ref}
//         className={`${classes.input} ${
//           props.inputClassName ? props.inputClassName : ""
//         }`}
//         type={props.type || "text"}
//         placeholder={props.placeholder}
//       />
//     </label>
//   );
// });

export default Input;
