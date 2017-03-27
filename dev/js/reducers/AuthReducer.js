import { AUTH_USER,
         AUTH_ERROR,
         UNAUTH_USER,
         PROTECTED_TEST} from './../actions/config'

export default function reducer(state={
     error: '',
     message: '',
     content: '',
     authenticated: false
  }, action) {
    switch (action.type) {
      case AUTH_USER:
        return { ...state, error: '', message: '', authenticated: true };
      case UNAUTH_USER:
        return { ...state, authenticated: false };
      case AUTH_ERROR:
        return { ...state, error: action.payload };
      case PROTECTED_TEST:
        return { ...state, content: action.payload };
    }
    return state
}
