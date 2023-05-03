import classes from "./ProgressBar.module.css";

const ProgressBar = ({
  currentPhotoIndex,
  currentProfileIndex,
  profileData,
}) => {
  return (
    <div className={classes.progresBar}>
      {profileData[currentProfileIndex].pictures.map((item, index) => (
        <div
          className={
            currentPhotoIndex === index
              ? `${classes.littleBar} ${classes.littleBarActive}`
              : `${classes.littleBar} `
          }
          key={index}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
