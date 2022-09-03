import React, { createContext, useReducer } from "react";
import locationReducer from "./locationReducer";

const initialState = {
  locations: [
    { address: "Street abc, city abc" },
    { address: "Street abc, city abc" },
    { address: "Street abc, city abc" },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(locationReducer, initialState);

  //Actions.
  const addLocation = (item) => {
    dispatch({
      type: "ADD_LOCATION",
      newItem: item,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        locations: state.locations,
        addLocation,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
