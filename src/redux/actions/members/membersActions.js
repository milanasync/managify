const addMemberAction = (payload = null) => {
  return {
    type: 'ADD_MEMBER',
    payload,
  };
};

const editMemberAction = payload => {
  return {
    type: 'EDIT_MEMBER',
    payload,
  };
};

const deleteMemberAction = payload => {
  return {
    type: 'DELETE_MEMBER',
    payload,
  };
};

export default {addMemberAction, editMemberAction, deleteMemberAction};
