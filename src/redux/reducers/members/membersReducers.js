const INITIAL_STATE = {
  list: [],
};

const membersReducers = (state = INITIAL_STATE, action) => {
  let currentState = state;
  switch (action.type) {
    case 'ADD_MEMBER':
      currentState.list.push(action.payload);
      return currentState;
    case 'EDIT_MEMBER':
      let list = currentState.list;
      list[action.payload.id - 1] = action.payload;
      currentState.list = list;
      return currentState;
    case 'DELETE_MEMBER':
      let index = action.payload;
      let members = currentState.list;
      members.splice(index, 1);
      currentState.list = members;
      return currentState;
    default:
      return currentState;
  }
};

export default membersReducers;
