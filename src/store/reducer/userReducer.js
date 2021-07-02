const initailState = {
  user: null,
};

const cartReducer = (state = initailState, action) => {
  switch (action.type) {
    case "LOGIN": {
        
      return {
        ...state,
        user: action.payload,
      };
    }

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default cartReducer;
