const addEventAction = (payload = null) => {
  return {
    type: 'ADD_EVENT',
    payload,
  };
};

const editEventAction = payload => {
  return {
    type: 'EDIT_EVENT',
    payload,
  };
};

const deleteEventAction = payload => {
  return {
    type: 'DELETE_EVENT',
    payload,
  };
};

const selectEventAction = payload => {
  return {
    type: 'SELECT_EVENT',
    payload,
  };
};

const inviteMemberAction = payload => {
  return {
    type: 'INVITE_TO_EVENT',
    payload,
  };
};

const addMemberGiftAction = payload => {
  return {
    type: 'ADD_MEMBER_GIFT',
    payload,
  };
};

const addMemberReturnGiftAction = payload => {
  return {
    type: 'ADD_MEMBER_RETURN_GIFT',
    payload,
  };
};

export default {
  addEventAction,
  editEventAction,
  deleteEventAction,
  selectEventAction,
  inviteMemberAction,
  addMemberGiftAction,
  addMemberReturnGiftAction
};
