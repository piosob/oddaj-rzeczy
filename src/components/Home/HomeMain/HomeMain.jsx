import ContentForOrganize from "./ContentForOrganize";
import { homeHero } from "../../../assets/img";
import classes from "./HomeMain.module.scss";
const HomeMain = () => {
  return (
    <>
      <img
        className={classes.homeHeroImg}
        src={homeHero}
        alt="Some items to pass in to fundraiser."
      />
      <ContentForOrganize />
    </>
  );
};

export default HomeMain;
