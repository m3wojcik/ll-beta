export default function reducer(state={
  elibraryList: {
    books: [],
    fetching: false,
    fetched: false,
    error: null
  },
  elibraryBooking: {
    books: [],
    fetching: false,
    fetched: false,
    error: null
  },
  reservedObject:{
      id: null,
      dateFrom: null,
      dateTo: null,
      bookingPeriod: null,
      success: false,
      posting: false,
      posted: true
  },

  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_ELIBRARY_LIST": {
        return {...state, elibraryList: {fetching: true, fetched: false}}
      }
      case "FETCH_ELIBRARY_LIST_REJECTED": {
        return {...state, elibraryList: {fetching: false, error: action.payload}}
      }
      case "FETCH_ELIBRARY_LIST_FULFILLED": {
        return {
          ...state,
          elibraryList: {
            fetching: false,
            fetched: true,
            books: action.payload.items,
          }
        }
      }
      case "FETCH_ELIBRARY_BOOKING": {
        return {...state, elibraryBooking: {fetching: true, fetched: false}}
      }
      case "FETCH_ELIBRARY_BOOKING_REJECTED": {
        return {...state, elibraryBooking: {fetching: false, error: action.payload}}
      }
      case "FETCH_ELIBRARY_BOOKING_FULFILLED": {
        return {
          ...state,
          elibraryBooking: {
            fetching: false,
            fetched: true,
            books: action.payload.items,
          }
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
      case "SET_RESERVE_ELIBRARY_OBJECT": {
        return {...state,
            reservedObject: {
            id: action.payload.id,
            bookingPeriod: action.payload.bookingPeriod
          }
        }
      }
      case "SET_RESERVE_ELIBRARY_OBJECT_ID": {
        return {...state,
            reservedObject: {
            ...state.reservedObject,
            id: action.payload
          }
        }
      }
      case "SET_RESERVE_ELIBRARY_OBJECT_DATES": {
        return {...state,
            reservedObject: {
            ...state.reservedObject,
            dateFrom: action.payload.dateFrom,
            dateTo: action.payload.dateTo
            }
        }
      }
      case "POST_RESERVE_ELIBRARY_OBJECT": {
        return {...state, reservedObject:{...state.reservedObject, posting: true, posted: false, success:false}}
      }
      case "POST_RESERVE_ELIBRARY_OBJECT_REJECTED": {
        return {...state, reservedObject:{posting: false, success:false}, error: action.payload}
      }
      case "POST_RESERVE_ELIBRARY_OBJECT_FULFILLED": {
          const newElibraryList = [...state.elibraryList];
          const reservedObject = state.reservedObject;
          newElibraryList.forEach(function(item){
            if(item.id == reservedObject.id){
              item.status = "reserved";
              item.dateFrom = reservedObject.dateFrom;
              item.dateTo = reservedObject.dateTo;
            }
          })
        return {...state,
            reservedObject:{
                ...state.reservedObject,
                success: true,
                posting: false,
                posted: true
            }
        }
      }
      case "POST_CANCEL_RESERVATION_ELIBRARY_OBJECT": {
        const newElibraryList = [...state.elibraryList];
        let newReservedObject;
        newElibraryList.forEach(function(item){
          if(item.id == action.payload){
            newReservedObject = item
          }
        })
        return {...state,
          reservedObject:{
            id: newReservedObject.id,
            dateFrom: newReservedObject.dateFrom,
            dateTo: newReservedObject.dateTo,
            bookingPeriod: newReservedObject.bookingPeriod,
            posting: true,
            posted: false,
            success:false
            }
          }
      }
      case "POST_CANCEL_RESERVATION_ELIBRARY_OBJECT_REJECTED": {
        return {...state, reservedObject:{posting: false, success:false}, error: action.payload}
      }
      case "POST_CANCEL_RESERVATION_ELIBRARY_OBJECT_FULFILLED": {
        let isSuccess = false;
        const newElibraryList = [...state.elibraryList];
        const reservedObject = state.reservedObject;
        if(action.payload == "200"){
            isSuccess = true;
            newElibraryList.forEach(function(item){
              if(item.id == reservedObject.id){
                item.status = "available";
                item.dateFrom = null;
                item.dateTo = null;
              }
            })
        }
        return {...state,
          elibraryList: newElibraryList,
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
