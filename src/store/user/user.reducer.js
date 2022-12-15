const INITIAL_STATE = {
  currentUser: null,
}

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: 'SET_USER',
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state
  }
}
