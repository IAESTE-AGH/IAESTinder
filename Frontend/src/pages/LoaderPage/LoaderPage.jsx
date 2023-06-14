import { motion } from "framer-motion";
import logo from "../../assets/inne/Logo_SWIPE_JOIN.webp";
import classes from "./LoaderPage.module.css";
const LoaderPage = () => {
  return (
    <motion.main
      className={classes.loadingPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <header>
        <img src={logo} />
      </header>
    </motion.main>
  );
};

export default LoaderPage;
