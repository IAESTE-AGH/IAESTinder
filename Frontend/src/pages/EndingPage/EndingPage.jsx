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
        <h1>Do zobaczenia na rekrutacji!</h1>
      </header>
      <h2>IAESTE</h2>
    </motion.main>
  );
};

export default EndingPage;
