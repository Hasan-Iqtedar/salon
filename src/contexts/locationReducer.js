const locationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LOCATION": {
      action.newItem.id = state.currentId + 1;
      const updatedItems = [...state.items, action.newItem];
      return {
        ...state,
        currentId: state.currentId + 1,
        items: updatedItems,
      };
    }

    default: {
      return state;
    }
  }
};

export default locationReducer;
