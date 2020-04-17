const INITIAL_STATE = {
  list: [],
  selectedEvent: {},
};

const eventReducers = (state = INITIAL_STATE, action) => {
  let currentState = state;
  switch (action.type) {
    case 'ADD_EVENT':
      currentState.list.push(action.payload);
      return currentState;
    case 'EDIT_EVENT':
      let list = currentState.list;
      list[action.payload.id - 1] = action.payload;
      currentState.list = list;
      return currentState;
    case 'DELETE_EVENT':
      let index = action.payload;
      let events = currentState.list;
      events.splice(index, 1);
      currentState.list = events;
      return currentState;
    case 'SELECT_EVENT':
      currentState.selectedEvent = action.payload;
      return currentState;
    case 'INVITE_TO_EVENT':
      list = currentState.list;
      list[action.payload.event]['members'].push(action.payload.member);
      currentState.list = list;
      return currentState;
    case 'ADD_MEMBER_GIFT':
      list = currentState.list;
      list[action.payload.event]['members_gift'].push(action.payload.data);
      currentState.list = list;
      return currentState;
    case 'ADD_MEMBER_RETURN_GIFT':
      list = currentState.list;
      list[action.payload.event]['members_return_gift'].push(action.payload.data);
      currentState.list = list;
      return currentState;
    default:
      return currentState;
  }
};

export default eventReducers;
