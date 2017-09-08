export default function reducer(state={
  elibraryList: {
    books: [],
    fetching: false,
    fetched: false,
    error: null
  },
  elibraryReservations: {
    books: [],
    fetching: false,
    fetched: false,
    error: null
  },
  elibraryBookings: {
    books: [],
    fetching: false,
    fetched: false,
    error: null
  },
  reservation:{
    id: null,
    reservedObject: null,
    dateFrom: null,
    dateTo: null,
    saving: false,
    saved: false,
    canceling: false,
    canceled: false,
    error: null
  },
  view:{
    drawerVisible: false,
    dialogVisible: false,
    dialogTitle: "",
    dialogData: null
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

      case "FETCH_ELIBRARY_RESERVATIONS": {
        return {...state, elibraryReservations: {fetching: true, fetched: false}}
      }
      case "FETCH_ELIBRARY_RESERVATIONS_REJECTED": {
        return {...state, elibraryReservations: {fetching: false, error: action.payload}}
      }
      case "FETCH_ELIBRARY_RESERVATIONS_FULFILLED": {
        return {
          ...state,
          elibraryReservations: {
            fetching: false,
            fetched: true,
            books: action.payload.reservation,
          }
        }
      }

      case "FETCH_ELIBRARY_BOOKING": {
        return {...state, elibraryBookings: {fetching: true, fetched: false}}
      }
      case "FETCH_ELIBRARY_BOOKING_REJECTED": {
        return {...state, elibraryBookings: {fetching: false, error: action.payload}}
      }
      case "FETCH_ELIBRARY_BOOKING_FULFILLED": {
        return {
          ...state,
          elibraryBookings: {
            fetching: false,
            fetched: true,
            books: action.payload.items,
          }
        }
      }

      case "SAVE_RESERVATION": {
        return {...state, reservation: {saving: true, saved: false}}
      }
      case "SAVE_RESERVATION_REJECTED": {
        return {...state, 
          reservation: {
            saving: false, 
            error: action.payload
          },
          view:{
            ...state.view,
            drawerVisible: false
          }
        }
      }
      case "SAVE_RESERVATION_FULFILLED": {
        return {
          ...state,
          reservation: {
            saving: false,
            saved: true
          },
          elibraryReservations: {
            ...state.elibraryReservations,
            books: action.payload.reservation
          },
          view:{
            ...state.view,
            drawerVisible: false
          }
        }
      }

      case "CANCEL_RESERVATION": {
        return {...state, reservation: {canceling: true, canceled: false}}
      }
      case "CANCEL_RESERVATION_REJECTED": {
        return {...state, reservation: {...state.reservation, canceling: false, error: action.payload}}
      }
      case "CANCEL_RESERVATION_FULFILLED": {
        return {
          ...state,
          reservation:{
            ...state.reservation,
            canceling: false,
            canceled: true
          },
          elibraryReservations: {
            ...state.elibraryReservations,
            books: action.payload.reservation
          }
        }
      }

      case "SET_ELIBRARY_VIEW": {
        return {...state, view: {...state.view, ...action.payload}}
      }

      case "TOGGLE_ELIBRARY_DRAWER": {
        return {...state, view: {...state.view, drawerVisible: action.payload}}
      }
      case "TOGGLE_ELIBRARY_DIALOG": {
        return {...state, view: {...state.view, dialogVisible: action.payload}}
      }
      case "SET_RESERVED_OBJECT": {
        return {...state, reservation: {...state.reservation, reservedObject: action.payload}}
      }
      case "SET_RESERVED_DATE_FROM": {
        return {...state, reservation: {...state.reservation, dateFrom: action.payload}}
      }
    }
    return state
}
