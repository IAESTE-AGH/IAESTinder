import classes from "./EndingPage.module.css";
import { motion } from "framer-motion";
import logo from "../../assets/inne/Logo_SWIPE_JOIN.webp";

const EndingPage = () => {
  return (
    <motion.main
      className={classes.endingPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <img src={logo} />
      <header>
        <h2>
          Znalazłeś grupę do której pasujesz <span>&#129392;</span>! Proponujemy
          pierwsze spotkanie na rekrutacji, ale najpierw opowiedz nam coś o
          sobie &#128522;
        </h2>

        <a
          className={classes.sendBottomColor}
          href="https://forms.office.com/r/27JL2Hedmf"
        >
          <button type="submit" className={classes.formButton}>
            Przejdź do formularza
          </button>
        </a>
      </header>
      <h3>IAESTE</h3>
    </motion.main>
  );
};

export default EndingPage;
