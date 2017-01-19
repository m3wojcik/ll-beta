export default function reducer(state={
  elibraryList: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_ELIBRARY_LIST_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ELIBRARY_LIST_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          elibraryList: action.payload,
        }
      }
      case "CHANGE_ELIBRARY_ITEM_STATUS": {
        const newElibraryList = [...state.elibraryList];
        newElibraryList.forEach(function(item){
          if(item.id == action.payload.id){
            item.status = action.payload.status
          }
        })
        return {...state, elibraryList: newElibraryList}
      }
      case "SET_ELIBRARY_LIST": {
        return {...state, elibraryList: action.payload}
      }
    }
    return state
}
