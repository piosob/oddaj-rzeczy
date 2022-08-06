import React from "react";
import classes from "./Input.module.scss";

const Input = React.forwardRef((props, ref) => {
  const handleChange = (event) => {
    props.handleChange && props.handleChange();
    props.onChange && props.onChange(event);
  };

  return (
    <label
      className={`${classes.label} ${
        props.labelClassName ? props.labelClassName : ""
      }`}
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
