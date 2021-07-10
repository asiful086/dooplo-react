const initailState = {
  cartTickets: [],
};

const cartReducer = (state = initailState, action) => {
  switch (action.type) {
    // case "ADD":
    //   return {
    //     ...state,
    //     cartTickets: [...state.cartTickets, action.payload],
    //   };
    case "FETCH_TICKETS": {
      return {
        ...state,
        cartTickets: action.payload,
      };
    }

    // case "DECREMENT":
    //   return {
    //     ...state,
    //     count: state.count - 1,
    //   };

    default:
      return state;
  }
};

export default cartReducer;
