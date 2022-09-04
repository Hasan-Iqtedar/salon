const categoriesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CATEGORY": {
      action.newItem.id = state.categories[state.categories.length - 1].id + 1;
      const updatedItems = [...state.categories, action.newItem];
      return {
        ...state,
        categories: updatedItems,
      };
    }

    case "ADD_SUBCATEGORY": {
      const categoryIndex = state.categories.findIndex(
        (ele) => ele.id === action.id
      );

      action.newItem.id =
        state.categories.subcategories[
          state.categories.subcategories.length - 1
        ].id + 1;

      const newSubcategories = [
        ...state.categories[categoryIndex].subcategories,
        action.newItem,
      ];

      const updatedItems = state.categories;
      updatedItems.categories[categoryIndex] = newSubcategories;
      return {
        ...state,
        categories: updatedItems,
      };
    }

    default: {
      return state;
    }
  }
};

export default categoriesReducer;