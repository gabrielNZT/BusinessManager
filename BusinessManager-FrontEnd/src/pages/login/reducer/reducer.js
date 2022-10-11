const INITIAL_STATE = {
  user: {
    username: '',
    access_token: '',
    hasTemporaryPassword: ''
  }
};

function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state, user: {
          ...action.user,
          username: action.user?.name,
          access_token: action.user?.access_token
        }
      }
    case 'HAS_TEMPORARY_PASSWORD':
      return { ...state, hasTemporaryPassword: !INITIAL_STATE.hasTemporaryPassword }
    case 'FETCH_USER_DATA':
      return {
        ...state, user: {
          ...action.user,
          hasTemporaryPassword: action.user.hasTemporaryPassword
        }
      }
    default:
      return state;
  }
}

export default auth;