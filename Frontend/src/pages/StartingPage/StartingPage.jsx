import { Link } from "react-router-dom";
import classes from "./StartingPage.module.css";
import logo from "../../assets/logo-white3.png";

const StartingPage = () => {
  return (
    <>
      <Link to="QR" style={{ textDecoration: "none" }}>
        <div className={classes.startingPageContainer}>
          <header>
            <img src={logo} />
            <h1>IAESTinder</h1>
          </header>
        </div>
      </Link>
    </>
  );
};

export default StartingPage;
