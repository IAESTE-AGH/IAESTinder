import React, { useState, useContext } from "react";

const ProfileContext = React.createContext();

export const useProfile = () => {
  return useContext(ProfileContext);
};

export const ProfileContextProvider = (props) => {
  const [reactedProfileIndex, setReactedProfileIndex] = useState();

  const changeProfileHandler = () => {
    setReactedProfileIndex((prev) => prev + 1);
  };

  const value = {
    reactedProfileIndex,
    onChangeProfile: changeProfileHandler,
  };

  return (
    <ProfileContext.Provider value={value}>
      {props.children}
    </ProfileContext.Provider>
  );
};
