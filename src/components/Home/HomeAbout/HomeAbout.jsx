import { people, homeHeroDecoration, signature } from "../../../assets/img";
import classes from "./HomeAbout.module.scss";

const HomeAbout = () => {
  return (
    <div className={classes["home-about-container"]} id="HomeAbout">
      <div className={classes["about-area"]}>
        <section className={classes["section-about"]}>
          <h3 className={classes.h3}>O nas</h3>
          <img src={homeHeroDecoration} alt="decoration" />
          <p className={classes.description}>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img className={classes.signature} src={signature} alt="signature" />
        </section>
      </div>
      <img className={classes.img} src={people} alt="Group of happy people." />
    </div>
  );
};

export default HomeAbout;
