const initailState = {
  isLoginModal: false,
  isRegisterModal: false,
};

const modalReducer = (state = initailState, action) => {
  switch (action.type) {
    case "SHOW_LOGIN_MODAL":
      return {
        ...state,
        isLoginModal: true,
      };
    case "CLOSE_LOGIN_MODAL":
      return {
        ...state,
        isLoginModal: false,
      };
    case "SHOW_REGISTER_MODAL":
      return {
        ...state,
        isRegisterModal: true,
      };
    case "CLOSE_REGISTER_MODAL":
      return {
        ...state,
        isRegisterModal: false,
      };

    default:
      return state;
  }
};

export default modalReducer;
