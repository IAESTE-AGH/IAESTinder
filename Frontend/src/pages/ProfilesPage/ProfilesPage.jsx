import { useState } from "react";
import TopBar from "../../components/TopBar";
import Profile from "../../components/Profile";
import classes from "./ProfilesPage.module.css";
import IconsLayer from "../../components/IconsLayer";

const ProfilesPage = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const clickedIconHandler = () => {
    setCurrentProfileIndex((prev) => prev + 1);
  };

  return (
    <div className={classes.profilePagecontainer}>
      <TopBar />
      <Profile profileIndex={currentProfileIndex} />
      <IconsLayer clickedIcon={clickedIconHandler} />
    </div>
  );
};

export default ProfilesPage;
