import { useState } from "react";
import classes from "./profile.module.css";
import malysz1 from "../assets/malysz1.png";
import malysz2 from "../assets/malysz2.png";
import malysz3 from "../assets/malysz3.png";
import malysz4 from "../assets/malysz4.png";
import pudzian1 from "../assets/pudzian1.png";
import pudzian2 from "../assets/pudzian2.png";
import pudzian3 from "../assets/pudzian3.png";
import pudzian4 from "../assets/pudzian4.png";
import ProgressBar from "./ProgressBar";
import Information from "./Information";
import Sticker from "./Sticker";

const profileData = [
  {
    name: "Adam",
    description: "102 metry STO DWA METRY",
    age: "45",
    distance: "50 kilometrów stąd",
    pictures: [malysz1, malysz2, malysz3, malysz4],
    interests: ["narty", "skoki narciarskie", "zima", "piwo", "taniec"],
    active: true,
  },
  {
    name: "Mariusz",
    description: "Tanio skóry nie sprzedam",
    age: "46",
    distance: "200 kilometrów stąd",
    pictures: [pudzian1, pudzian2, pudzian3, pudzian4],
    interests: ["On", "byl", "lepszy", "w", "kulach"],
    active: true,
  },
];

const Profile = ({ profileIndex }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [activeLikeSticker, setActiveLikeSticker] = useState(false);
  const [activeNopeSticker, setActiveNopeSticker] = useState(false);

  console.log(profileIndex);

  const leftListenerHandler = () => {
    if (currentPhotoIndex >= 1) {
      setCurrentPhotoIndex((prev) => prev - 1);
    }
  };

  const rightListenerHandler = () => {
    if (currentPhotoIndex <= 2) {
      setCurrentPhotoIndex((prev) => prev + 1);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftListener} onClick={leftListenerHandler}></div>
      <div
        className={classes.rightListener}
        onClick={rightListenerHandler}
      ></div>
      <div className={classes.imagesContainer}>
        <Sticker stickerText={"LIKE"} activeSticker={activeLikeSticker} />
        <Sticker stickerText={"NOPE"} activeSticker={activeNopeSticker} />
        <ProgressBar
          profileData={profileData}
          currentPhotoIndex={currentPhotoIndex}
          currentProfileIndex={profileIndex}
        />
        <Information
          profileData={profileData}
          currentPhotoIndex={currentPhotoIndex}
          currentProfileIndex={profileIndex}
        />
        <img
          className={classes.image}
          src={profileData[profileIndex].pictures[currentPhotoIndex]}
        />
      </div>
    </div>
  );
};

export default Profile;
