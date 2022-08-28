import React, { useState, useContext } from "react";
import FormContex from "../../../../store/form-contex";
import Input from "../../../../UI/Input/Input";
import { helpGroups } from "./data";
import isHelpGroupExist from "./isHelpGroupExist";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Step3.module.scss";
const Step3 = () => {
  const formCtx = useContext(FormContex);

  const [clicked, setClicked] = useState(false);
  const animateFrom = { opacity: 0 };
  const animateTo = { opacity: 1 };
  const handleLocalizationClick = (event) => {
    if (typeof formCtx.onLocalizationClick !== "function") return;
    formCtx.onLocalizationClick(event.target.textContent);
  };

  // const testAray = ["samotnym matkom", "dzieciom", "bezdomnym"];
  // const testGroup = "dzieciom";
  // console.log(isHelpGroupExist(testGroup, testAray));

  const helpGroupsList = helpGroups.map((helpGroup) => (
    <Input
      key={helpGroup}
      value={helpGroup}
      label={helpGroup}
      labelClassName={
        isHelpGroupExist(helpGroup, formCtx.step3WhoHelp)
          ? classes.activeCheckbox
          : classes.defaultCheckbox
      }
      inputClassName={classes.checkbox}
      type="checkbox"
    ></Input>
  ));
  return (
    <form className={classes.container}>
      <div
        className={classes.dropdownContainer}
        onClick={() => {
          setClicked((prevClicked) => !prevClicked);
        }}
      >
        <div className={classes.panel}>
          {formCtx.step3Localization ? (
            <p>{formCtx.step3Localization}</p>
          ) : (
            <p>— wybierz —</p>
          )}
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
              onClick={handleLocalizationClick}
            >
              Poznań
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              onClick={handleLocalizationClick}
            >
              Warszawa
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={handleLocalizationClick}
            >
              Kraków
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              onClick={handleLocalizationClick}
            >
              Wrocław
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={handleLocalizationClick}
            >
              Katowice
            </motion.li>
          </motion.ul>
        )}
      </div>
      {formCtx.step3WhoHelpErrorMessage && (
        <h2 className={classes.errorMessage}>
          {formCtx.step3WhoHelpErrorMessage}
        </h2>
      )}
      <h4 className={classes.whoHelpHeding}>Komu chcesz pomóc?</h4>
      <section className={classes.sectionCheckbox}>{helpGroupsList}</section>
      <Input
        name="customOrganization"
        label="Wpisz nazwę konkretnej organizacji (opcjonalnie)"
        labelClassName={classes.inputLabel}
        inputClassName={classes.input}
        value={formCtx.step3CustomOrganization}
      />
    </form>
  );
};

export default Step3;
