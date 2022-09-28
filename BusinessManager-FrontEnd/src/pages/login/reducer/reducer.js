const INITIAL_STATE = {
  username: ''
};
  
  function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'LOGIN': 
      return {...state, username: action.user.name, access_token: action.user.access_token}
      default:
        return state;
    }
  }
  
  export default auth;