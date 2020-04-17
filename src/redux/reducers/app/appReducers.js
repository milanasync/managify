const INITIAL_STATE = {
  theme: {
    style: {},
  },
};

export default appReducers = (state = INITIAL_STATE, action) => {
  let currentState = state;
  switch (action.type) {
    case 'SET_INITIAL_THEME':
      currentState.theme = {...currentState.theme, ...action.payload};
      return currentState;
    default:
      return currentState;
  }
};
