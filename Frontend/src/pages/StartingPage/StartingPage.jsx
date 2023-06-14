import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./StartingPage.module.css";
import logo from "../../assets/inne/Logo_SWIPE_JOIN.webp";

const StartingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.innerWidth > window.innerHeight) {
      setTimeout(() => {
        navigate("/QR");
      }, 1000);
    }
  }, []);

  return (
    <Link to="instruction">
      <motion.main
        className={classes.startingPage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <main>
          <img src={logo} />
          <h1>IAESTE</h1>
        </main>
      </motion.main>
    </Link>
  );
};

export default StartingPage;
