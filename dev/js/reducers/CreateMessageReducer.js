export default function reducer(state={
  addressBook: [],
  receivers: [],
  filtredReceivers: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_ADDRESS_BOOK_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ADDRESS_BOOK_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          addressBook: action.payload,
          filtredReceivers: action.payload
        }
      }
      case "UPDATE_RECEIVERS": {
        return {...state, receivers: action.payload}
      }
      case "UPDATE_FILTRED_RECEIVERS": {
        return {...state, filtredReceivers: action.payload}
      }
    }
    return state
}
