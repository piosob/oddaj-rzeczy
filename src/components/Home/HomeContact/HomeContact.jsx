import ContactForm from "./ContactForm";
import { contactForm } from "../../../assets/img";
import classes from "./HomeContact.module.scss";

const HomeContact = () => {
  return (
    <div className={classes.container} id="HomeContact">
      <div
        className={classes.heroImg}
        style={{ backgroundImage: `url(${contactForm})` }}
      />
      <ContactForm />
    </div>
  );
};

export default HomeContact;
