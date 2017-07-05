export default function reducer(state={
  userData: {},
  fetching: false,
  fetched: false,
  error: null,
  saveUserData:{
    fetching: false,
    fetched: false,
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
        return {...state, saveUserData: {fetching: true, fetched:false}}
      }
      case "SAVE_USER_DATA_REJECTED": {
        return {...state, saveUserData: {fetching: false, error: action.payload}}
      }
      case "SAVE_USER_DATA_FULFILLED": {
        return {
          ...state,
          saveUserData: {
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
    }
    return state
}
