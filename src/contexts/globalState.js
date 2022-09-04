import React, { createContext, useReducer } from "react";
import combineReducers from "react-combine-reducers";
import locationReducer from "./locationReducer";
import stylistsReducer from "./stylistsReducer";
import categoriesReducer from "./categoriesReducer";

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

const initialCategories = {
  categories: [
    {
      id: 1,
      name: "Braided",
      type: "Hair Service",
      subcategories: [
        {
          id: 1,
          price: "50",
          name: "Bob",
        },
        {
          id: 2,
          price: "50",
          name: "Twist Braid - Medium",
        },
      ],
    },
    {
      id: 2,
      name: "Conrows",
      type: "Hair Service",
      subcategories: [
        {
          price: "50",
          name: "1 Pony no extension",
        },
        {
          price: "50",
          name: "2 Ponies add extension",
        },
      ],
    },
    {
      id: 2,
      name: "Conrows",
      type: "Hair Service",
      subcategories: [
        {
          price: "50",
          name: "1 Pony no extension",
        },
        {
          price: "50",
          name: "2 Ponies add extension",
        },
      ],
    },
  ],
};

export const GlobalContext = createContext();

const [rootReducer, initialState] = combineReducers({
  locationsState: [locationReducer, initialStateLocations],
  stylistsState: [stylistsReducer, initialStateStylists],
  categoriesState: [categoriesReducer, initialCategories],
});

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

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

  const addCategory = (item) => {
    dispatch({
      type: "ADD_CATEGORY",
      newItem: item,
    });
  };

  const addSubcategory = (id, item) => {
    dispatch({
      type: "ADD_SUBCATEGORY",
      newItem: item,
      id: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        locations: state.locationsState.locations,
        stylists: state.stylistsState.stylists,
        categories: state.categoriesState.categories,
        addLocation,
        addStylist,
        updateStylist,
        deleteStylist,
        addCategory,
        addSubcategory,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
