import classes from "./TopBar.module.css";
import logo from "../../assets/inne/Logo_SWIPE_JOIN.webp";

const TopBar = () => {
  return (
    <header className={classes.topBar}>
      <img src={logo} />
    </header>
  );
};

export default TopBar;
