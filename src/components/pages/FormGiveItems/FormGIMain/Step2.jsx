import React, { useState, useContext } from "react";
import FormContex from "../../../store/form-contex";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Step2.module.scss";
const Step2 = () => {
  const formCtx = useContext(FormContex);

  const [clicked, setClicked] = useState(false);
  const animateFrom = { opacity: 0 };
  const animateTo = { opacity: 1 };
  const handleClick = (event) => {
    if (typeof formCtx.onBagClick !== "function") return;
    formCtx.onBagClick(+event.target.textContent);
    console.log(formCtx.step2Bag);
  };

  return (
    <div className={classes.container}>
      <p>Liczba 60l worków:</p>
      <div
        className={classes.dropdownContainer}
        onClick={() => {
          setClicked((prevClicked) => !prevClicked);
        }}
      >
        <div className={classes.panel}>
          {formCtx.step2Bag ? <p>{formCtx.step2Bag}</p> : <p>— wybierz —</p>}
          {!clicked && <FontAwesomeIcon icon="fa-solid fa-angle-down" />}
          {clicked && <FontAwesomeIcon icon="fa-solid fa-angle-up" />}
        </div>
        {clicked && (
          <motion.ul
            className={classes.dropdown}
            initial={animateFrom}
            animate={animateTo}
            transition={{ duration: 0.1 }}
          >
            <motion.li
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={handleClick}
            >
              1
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              onClick={handleClick}
            >
              2
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={handleClick}
            >
              3
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              onClick={handleClick}
            >
              4
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={handleClick}
            >
              5
            </motion.li>
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Step2;
