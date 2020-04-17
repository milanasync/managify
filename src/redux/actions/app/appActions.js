const appAction = (payload = null) => {
  return {
    type: "SET_INITIAL_THEME",
    payload
  };
};
  
export default { appAction };
  
