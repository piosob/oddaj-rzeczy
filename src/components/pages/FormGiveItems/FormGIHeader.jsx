import { formHero, homeHeroDecoration } from "../../../assets/img";
import classes from "./FormGIHeader.module.scss";
const FormGIHeader = () => {
  return (
    <div className={classes.container}>
      <img src={formHero} alt="decoration" />
      <div className={classes.content4steps}>
        <h3 className={classes.heading}>
          Oddaj rzeczy, których już nie chcesz
          <span className={classes.dblock}>POTRZEBUJĄCYM</span>
        </h3>
        <img src={homeHeroDecoration} alt="decoration" />
        <p className={classes.fourStepDesc}>Wystarczą 4 proste kroki:</p>
        <div className={classes["diamonds-container"]}>
          <div className={classes.diamond}>
            <p className={classes.pNumb}>1</p>
            <p className={classes.stepDesc}>Wybierz rzeczy</p>
          </div>
          <div className={classes.diamond}>
            <p className={classes.pNumb}>2</p>
            <p className={classes.stepDesc}>
              Spakuj je <span className={classes.dblock}>w worki</span>
            </p>
          </div>
          <div className={classes.diamond}>
            <p className={classes.pNumb}>3</p>
            <p className={classes.stepDesc}>
              Wybierz <span className={classes.dblock}>fundację</span>
            </p>
          </div>
          <div className={classes.diamond}>
            <p className={classes.pNumb}>4</p>
            <p className={classes.stepDesc}>
              Wybierz <span className={classes.dblock}>kuriera</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormGIHeader;
