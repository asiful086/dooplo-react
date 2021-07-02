export const login = (item) => {
  return {
    type: "LOGIN",
    payload: item,
  };
};
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
