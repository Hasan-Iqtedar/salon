const stylistsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STYLIST": {
      action.newItem.id = state.stylists[state.stylists.length - 1].id + 1;
      const updatedItems = [...state.stylists, action.newItem];
      return {
        ...state,
        stylists: updatedItems,
      };
    }

    case "UPDATE_STYLIST": {
      console.log(state.stylists);
      const itemIndex = state.stylists.findIndex(
        (item) => item.id === action.id
      );

      const updatedItem = state.stylists[itemIndex];
      updatedItem.name = action.name;

      const updatedItems = state.stylists;
      updatedItems[itemIndex] = updatedItem;
      return {
        ...state,
        stylists: updatedItems,
      };
    }

    case "DELETE_STYLIST": {
      const updateItems = state.stylists.filter(
        (element) => element.id !== action.id
      );

      return {
        ...state,
        stylists: updateItems,
      };
    }

    default: {
      return state;
    }
  }
};

export default stylistsReducer;
