import React, { createContext, useContext, useEffect, useReducer } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import combineReducers from "react-combine-reducers";
import locationReducer from "./locationReducer";
import stylistsReducer from "./stylistsReducer";
import categoriesReducer from "./categoriesReducer";
import dataReducer from "./adminReducer.js";

const initialAdminState = {
  adminData: {},
};

const initialStateLocations = {
  locations: [],
};

const initialStateStylists = {
  stylists: [],
};

const initialCategories = {
  categories: [],
  //   {
  //     id: 1,
  //     name: "Braided",
  //     type: "Hair Service",
  //     subcategories: [
  //       {
  //         id: 1,
  //         price: "50",
  //         name: "Bob",
  //       },
  //       {
  //         id: 2,
  //         price: "50",
  //         name: "Twist Braid - Medium",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Conrows",
  //     type: "Hair Service",
  //     subcategories: [
  //       {
  //         price: "50",
  //         name: "1 Pony no extension",
  //       },
  //       {
  //         price: "50",
  //         name: "2 Ponies add extension",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Conrows",
  //     type: "Hair Service",
  //     subcategories: [
  //       {
  //         price: "50",
  //         name: "1 Pony no extension",
  //       },
  //       {
  //         price: "50",
  //         name: "2 Ponies add extension",
  //       },
  //     ],
  //   },
  // ],
};

export const GlobalContext = createContext();

const [rootReducer, initialState] = combineReducers({
  adminState: [dataReducer, initialAdminState],
  locationsState: [locationReducer, initialStateLocations],
  stylistsState: [stylistsReducer, initialStateStylists],
  categoriesState: [categoriesReducer, initialCategories],
});

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  //Actions.

  useEffect(() => {
    const initializeAdminData = async () => {
      console.log("Loading...");
      const adminData = await getDocs(collection(db, "admin"));
      console.log("Loaded");
      dispatch({
        type: "INITIALIZE_ADMIN_DATA",
        data: adminData,
      });
    };

    const initializeLocations = async () => {
      const locationData = await getDocs(collection(db, "location"));
      const stylistsData = await getDocs(collection(db, "stylist"));
      const categoriesData = await getDocs(collection(db, "category"));
      // console.log(categoriesData);
      dispatch({
        type: "INITIALIZE_LOCATION_DATA",
        data: locationData,
      });
      dispatch({
        type: "INITIALIZE_STYLIST_DATA",
        data: stylistsData,
      });
      dispatch({
        type: "INITIALIZE_CATEGORIES_DATA",
        data: categoriesData,
      });
    };

    initializeAdminData();
    initializeLocations();
  }, []);

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
        adminCredentials: state.adminState.adminData,
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

export const useGlobalState = () => {
  return useContext(GlobalContext);
};
