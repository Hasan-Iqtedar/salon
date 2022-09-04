import React, { createContext, useReducer } from "react";
import combineReducers from "react-combine-reducers";
import locationReducer from "./locationReducer";
import stylistsReducer from "./stylistsReducer";

const initialStateLocations = {
  locations: [
    { address: "Street abc, city abc" },
    { address: "Street abc, city abc" },
    { address: "Street abc, city abc" },
  ],
};

const initialStateStylists = {
  stylists: [
    { id: "1", picture: "", name: "David", rating: "5" },
    { id: "2", picture: "", name: "John", rating: "4" },
    { id: "3", picture: "", name: "Joe", rating: "5" },
    { id: "4", picture: "", name: "David", rating: "5" },
    { id: "5", picture: "", name: "John", rating: "4" },
    { id: "6", picture: "", name: "Joe", rating: "5" },
    { id: "7", picture: "", name: "David", rating: "5" },
    { id: "8", picture: "", name: "John", rating: "4" },
    { id: "9", picture: "", name: "Joe", rating: "5" },
    { id: "10", picture: "", name: "David", rating: "5" },
    { id: "11", picture: "", name: "John", rating: "4" },
    { id: "12", picture: "", name: "Joe", rating: "5" },
  ],
};

// const initialState = {
// locations: [
//   { address: "Street abc, city abc" },
//   { address: "Street abc, city abc" },
//   { address: "Street abc, city abc" },
// ],
// stylists: [
//   { id: "1", picture: "", name: "David", rating: "5" },
//   { id: "2", picture: "", name: "John", rating: "4" },
//   { id: "3", picture: "", name: "Joe", rating: "5" },
//   { id: "4", picture: "", name: "David", rating: "5" },
//   { id: "5", picture: "", name: "John", rating: "4" },
//   { id: "6", picture: "", name: "Joe", rating: "5" },
//   { id: "7", picture: "", name: "David", rating: "5" },
//   { id: "8", picture: "", name: "John", rating: "4" },
//   { id: "9", picture: "", name: "Joe", rating: "5" },
//   { id: "10", picture: "", name: "David", rating: "5" },
//   { id: "11", picture: "", name: "John", rating: "4" },
//   { id: "12", picture: "", name: "Joe", rating: "5" },
// ],
// };

export const GlobalContext = createContext();

const [rootReducer, initialState] = combineReducers({
  locationsState: [locationReducer, initialStateLocations],
  stylistsState: [stylistsReducer, initialStateStylists],
});

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  // const []
  //Actions.
  const addLocation = (item) => {
    dispatch({
      type: "ADD_LOCATION",
      newItem: item,
    });
  };

  const addStylist = (item) => {
    dispatch({
      type: "ADD_STYLIST",
      newItem: item,
    });
  };

  const updateStylist = (id, name) => {
    dispatch({
      type: "UPDATE_STYLIST",
      id: id,
      name: name,
    });
  };

  const deleteStylist = (id) => {
    dispatch({
      type: "DELETE_STYLIST",
      id: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        locations: state.locationsState.locations,
        stylists: state.stylistsState.stylists,
        addLocation,
        addStylist,
        updateStylist,
        deleteStylist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
