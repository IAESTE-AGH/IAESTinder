import classes from "./SaveMailPage.module.css";
import { useState } from "react";
import { useQuestions } from "../../store/questions-context";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SaveMailPage = () => {
  const API_KEY = import.meta.env.VITE_REAL_TIME_DB_KEY;
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [notification, setNotification] = useState("");

  const { matchedGroup } = useQuestions();

  const navigate = useNavigate();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const sumbitFormHandler = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      console.log("zły mail");
      setError(true);
      setNotification("Podano zły email");
      return;
    }

    const emailData = {
      emailAdress: email,
      group: matchedGroup,
    };

    console.log(emailData);

    // Cors policy error to fix

    // const response = await fetch(`${API_KEY}/IAESTE`, {
    //   method: "POST",
    //   body: JSON.stringify(emailData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const responseData = await response.json();
    // console.log(responseData);
    // if (!response.ok) {
    //   setNotification("Wysyłanie maila nie powiodło się");
    //   setError(true);
    //   throw new Error(data.message || "Could not add email");
    // }

    setNotification("Wysyłanie maila powiodło się");
    setSuccess(true);
    setError(false);
    setTimeout(() => {
      navigate("/endingPage");
    }, 1000);

    setEmail("");
  };

  return (
    <motion.main
      className={classes.SaveMailPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <text>
          <h1 className={classes.header}>Zapraszamy do kolejnego etapu rekrutacji!</h1>
          <p className={classes.paragraph}>
            Po wypełnieniu formularza zgłoszeniowego poinformujemy Cię o kolejnych etapach rekrutacji 
          </p>
        </text>
        <a className={classes.sendBottomColor} href="https://forms.office.com/r/27JL2Hedmf">
          <button type="submit" className={classes.formButton}>
            Wypełnij formularz
          </button>
        </a>
      </section>
    </motion.main>
  );
};

export default SaveMailPage;
