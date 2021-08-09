const initailState = {
  isLoginModal: false,
  isRegisterModal: false,
  isTicketModal: false,
  isAfterTransactionModal: false,
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
    case "SHOW_TICKET_MODAL":
      return {
        ...state,
        isTicketModal: true,
      };
    case "CLOSE_TICKET_MODAL":
      return {
        ...state,
        isTicketModal: false,
      };
    case "SHOW_AFTER_TRANSACTION_MODAL":
      return {
        ...state,
        isAfterTransactionModal: true,
      };
    case "CLOSE_AFTER_TRANSACTION_MODAL":
      return {
        ...state,
        isAfterTransactionModal: false,
      };

    default:
      return state;
  }
};

export default modalReducer;
