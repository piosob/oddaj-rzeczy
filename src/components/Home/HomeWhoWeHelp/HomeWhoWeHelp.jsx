import React, { useState } from "react";
import { MainDescripiton, ContentWhoWeHelp } from ".";
import Button from "../../UI/Button/Button";
import { homeHeroDecoration } from "../../../assets/img";
import { Pagination } from "../../Pagination/Pagination";
import { foundations, NGOS } from "./data";
import classes from "./HomeWhoWeHelp.module.scss";

const HomeWhoWeHelp = () => {
  const [step, setStep] = useState("1");
  const [paginationStartNumber, setPaginationStartNumber] = useState(0);

  // set number of Foundations, Organizations, Collection to show on page. Default in project design = 3
  const ITEMS_PER_PAGE = 3;

  // function on Foundations, Organizations, Collection button click
  const handleBrandButtonClick = (step) => {
    setStep(step);
    setPaginationStartNumber(0);
  };

  // function for setting numbers of pages for pagination according to data from data.js
  const setPagesForPagination = (step) => {
    if (step === "1") {
      return Math.ceil(foundations.items.length / ITEMS_PER_PAGE);
    } else if (step === "2") {
      return Math.ceil(NGOS.items.length / ITEMS_PER_PAGE);
    } else return null;
  };

  //function for slicing data from array from data.js for correct display - according to ITEMS_PER_PAGE
  const setPagesRange = (clickedPage, itemsPerPage) => {
    let START;
    switch (clickedPage) {
      case 1:
        START = 0;
        break;
      case 2:
        START = itemsPerPage * 1;
        break;
      case 3:
        START = itemsPerPage * 2;
        break;
      default:
        START = 0;
    }
    setPaginationStartNumber(START);
  };

  return (
    <div className={classes["who-we-help-container"]} id="HomeWhoHeHelp">
      <section className={classes.header}>
        <h3 className={classes.heading}>Komu pomagamy?</h3>
        <img src={homeHeroDecoration} alt="decoration" />
        <div className={classes["actions-btns"]}>
          <Button
            className={`${classes.btn} ${
              step === "1" ? classes["active-btn"] : ""
            }`}
            step="1"
            onBrandClick={handleBrandButtonClick}
          >
            Fundacjom
          </Button>
          <Button
            className={`${classes.btn} ${
              step === "2" ? classes["active-btn"] : ""
            }`}
            step="2"
            onBrandClick={handleBrandButtonClick}
          >
            Organizacjom <span className={classes.span}>pozarządowym</span>
          </Button>
          <Button
            className={`${classes.btn} ${
              step === "3" ? classes["active-btn"] : ""
            }`}
            step="3"
            onBrandClick={handleBrandButtonClick}
          >
            Lokalnym <span className={classes.span}>zbiórkom</span>
          </Button>
        </div>
        <MainDescripiton chosenStep={step} />
      </section>
      <section className={classes.contentWhoWeHelp}>
        <ContentWhoWeHelp
          chosenStep={step}
          itemsPerPage={ITEMS_PER_PAGE}
          paginationStartNumber={paginationStartNumber}
        />
      </section>
      <Pagination
        totalPages={setPagesForPagination(step)}
        itemsPerPage={ITEMS_PER_PAGE}
        setPagesRange={setPagesRange}
      />
    </div>
  );
};

export default HomeWhoWeHelp;
