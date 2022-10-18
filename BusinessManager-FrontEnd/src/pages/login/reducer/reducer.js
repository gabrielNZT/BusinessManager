const INITIAL_STATE = {
  user: {
    username: '',
    access_token: '',
    hasTemporaryPassword: ''
  },
  company: {
    name: ''
  },
  allPermission: [
    {role: 'Administrador'},
    {role: 'Gerente'},
    {role: 'Operador'}
  ]
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
      return {
        ...state, user: {
          ...state.user,
          hasTemporaryPassword: !INITIAL_STATE.user.hasTemporaryPassword
        }
      }
    case 'FETCH_USER_DATA':
      return {
        ...state, user: {
          ...action.user,
          hasTemporaryPassword: action.user.hasTemporaryPassword
        }
      }
    case 'FETCH_COMPANY_NAME':
      return {
        ...state, company: {
          ...action.company,
          name: action.company.name
        }
      }
    case 'FETCH_COMPANY_NAME_CONFIG_PAGE':
      return {
        ...state, user: {
          ...state.user,
          hasTemporaryPassword: !state.user.hasTemporaryPassword
        }, company: {
          ...action.company,
          name: action.company.name
        }
      }
    case 'LOGOUT':
      return { INITIAL_STATE }
    default:
      return state;
  }
}

export default auth;