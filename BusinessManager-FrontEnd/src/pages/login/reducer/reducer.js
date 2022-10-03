const INITIAL_STATE = {
  username: '',
  access_token: '',
  hasTemporaryPassword: false
};

function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, username: action.user.name, access_token: action.user.access_token }
    case 'HAS_TEMPORARY_PASSWORD':
      return { ...state, hasTemporaryPassword: !INITIAL_STATE.hasTemporaryPassword}
    default:
      return state;
  }
}

export default auth;