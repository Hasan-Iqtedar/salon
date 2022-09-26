const adminReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_ADMIN_STATE": {
      const admin = action.data.docs[0].data();
      return {
        ...state,
        adminData: {
          email: admin.email,
          password: admin.password,
          id: action.data.docs[0].id,
        },
      };
    }

    default: {
      return {
        state,
      };
    }
  }
};

export default adminReducer;
