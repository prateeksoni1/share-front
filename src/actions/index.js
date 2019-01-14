export const loginAction = user => {
  return {
    type: "USER",
    payload: user
  };
};

export const logoutAction = () => {
  return {
    type: "LOGOUT"
  };
};
