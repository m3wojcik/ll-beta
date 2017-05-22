export default function reducer(state={
  errors:[]
  }, action) {
    switch (action.type) {
      case "ADD_ERROR": {
        const newErrors = state.errors.slice();
        newErrors.push(action.payload);
        return {...state, errors: newErrors}
      }
      case "REMOVE_ERROR": {
        const [, ...errors] = state.errors;
        return {
          ...state,
          errors: errors
        }
      }
    }
    return state
}
