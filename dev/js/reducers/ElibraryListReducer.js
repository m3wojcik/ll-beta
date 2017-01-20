export default function reducer(state={
  elibraryList: [],
  reservedObject:{
      id: null,
      dateFrom: null,
      success: false,
      successMsg: "Item reserved",
      failMsg: "Reservation faild",
      posting: false,
      posted: true
  },
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
      case "CHANGE_ELIBRARY_OBJECT_STATUS": {
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
      case "SET_ELIBRARY_LIST": {
        return {...state, elibraryList: action.payload}
      }
      case "SET_RESERVE_ELIBRARY_OBJECT_ID": {
        return {...state,
            reservedObject: {
            ...state.reservedObject,
            id: action.payload
        }
        }
      }
      case "SET_RESERVE_ELIBRARY_OBJECT_DATE_FROM": {
        return {...state,
            reservedObject: {
            ...state.reservedObject,
            dateFrom: action.payload
        }
        }
      }
      case "POST_RESERVE_ELIBRARY_OBJECT": {
        return {...state, reservedObject:{...state.reservedObject, posting: true, posted: false}}
      }
      case "POST_RESERVE_ELIBRARY_OBJECT_REJECTED": {
        return {...state, reservedObject:{posting: false}, error: action.payload}
      }
      case "POST_RESERVE_ELIBRARY_OBJECT_FULFILLED": {
          let isSuccess = false;
        if(action.payload == "200"){
            isSuccess = true;
        }
        return {...state,
            reservedObject:{
                ...state.reservedObject,
                success: isSuccess,
                posting: false,
                posted: true
            }
        }
      }
    }
    return state
}
