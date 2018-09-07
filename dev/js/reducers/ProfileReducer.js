export default function reducer(state={
  userData: {},
  fetching: false,
  fetched: false,
  error: null,
  saveUserData:{
    saving: false,
    saved: false,
    error: null,
  },
  changePassword: {
    fetching: false,
    fetched: false,
    error: null,
  },
  studentHistory:{
    history: null,
    fetching: false,
    fetched: false,
    error: null,
  },
  avatar:{
    avatar: null,
    canvas: null,
    canva: null,
    fetching: false,
    fetched: false,
    saving: false,
    saved: false,
    error: null,
  },
  avatars: {
    avatars:[],
    fetching: false,
    fetched: false,
    error: null,
  }
  }, action) {

    switch (action.type) {
      case "FETCH_USER_DATA": {
        return {...state, fetching: true, fetched:false}
      }
      case "FETCH_USER_DATA_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USER_DATA_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          userData: action.payload.userProfile
        }
      }
      case "SAVE_USER_DATA": {
        return {...state, saveUserData: {saving: true, saved:false}}
      }
      case "SAVE_USER_DATA_REJECTED": {
        return {...state, saveUserData: {saving: false, error: action.payload}}
      }
      case "SAVE_USER_DATA_FULFILLED": {
        return {
          ...state,
          saveUserData: {
            saving: false,
            saved: true
          }
        }
      }
      case "SAVE_PASSWORD": {
        return {...state, changePassword: {fetching: true, fetched:false}}
      }
      case "SAVE_PASSWORD_REJECTED": {
        return {...state, changePassword: {fetching: false, error: action.payload}}
      }
      case "SAVE_PASSWORD_FULFILLED": {
        return {
          ...state,
          changePassword: {
            fetching: false,
            fetched: true
          }
        }
      }
      case "FETCH_AVATARS": {
        return {...state, avatars: {fetching: true, fetched:false}}
      }
      case "FETCH_AVATARS_REJECTED": {
        return {...state, avatars: {fetching: false, error: action.payload}}
      }
      case "FETCH_AVATARS_FULFILLED": {
        return {
          ...state,
          avatars: {
            avatars: action.payload,
            fetching: false,
            fetched: true
          }
        }
      }

      case "FETCH_AVATAR": {
        return {...state, avatar: {fetching: true, fetched:false}}
      }
      case "FETCH_AVATAR_REJECTED": {
        return {...state, avatar: {fetching: false, error: action.payload}}
      }
      case "FETCH_AVATAR_FULFILLED": {
        return {
          ...state,
          avatar: {
            ...state.avatar,
            avatar: action.payload.avatar,
            fetching: false,
            fetched: true
          }
        }
      }
      case "SAVE_AVATAR": {
        return {...state, avatar: {...state.avatar, saving: true, saved:false}}
      }
      case "SAVE_AVATAR_REJECTED": {
        return {...state, avatar: {...state.avatar, saving: false, error: action.payload}}
      }
      case "SAVE_AVATAR_FULFILLED": {
        return {
          ...state,
          avatar: {
            ...state.avatar,
            avatar: action.params.data,
            saving: false,
            saved: true
          }
        }
      }
      case "SET_CANVA_REF": {
        return {...state, avatar: {...state.avatar, canva: action.payload}}
      }
      case "FETCH_STUDENT_HISTORY": {
        return {...state, studentHistory: {fetching: true, fetched:false}}
      }
      case "FETCH_STUDENT_HISTORY_REJECTED": {
        return {...state, studentHistory: {fetching: false, error: action.payload}}
      }
      case "FETCH_STUDENT_HISTORY_FULFILLED": {
        return {
          ...state,
          studentHistory: {
            history: action.payload.history,
            fetching: false,
            fetched: true
          }
        }
      }
    }
    return state
}
