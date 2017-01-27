export default function reducer(state={
  toasts: [],
  autohide: true
  }, action) {
    switch (action.type) {
      case "ADD_TOAST": {
        const toasts = state.toasts;
        toasts.push({"text":action.payload.text, "action":action.payload.action})
        return {
          ...state,
          toasts: toasts,
          autohide:action.payload.autohide
        }
      }
      case "REMOVE_TOAST": {
        const [, ...toasts] = state.toasts;
        return {
          ...state,
          toasts: toasts
        }
      }
    }
    return state
}
