export default function reducer(state={
  toasts: [],
  autohide: true,
  autohideTimeout: 3000
  }, action) {
    switch (action.type) {
      case "ADD_TOAST": {
        let autohideTimeout = 3000
        if(action.payload.action){
          autohideTimeout = 4000
        }
        const newToasts = state.toasts.slice();
        newToasts.push({"text":action.payload.text, "action":action.payload.action})
        return {
          ...state,
          toasts: newToasts,
          autohideTimeout: autohideTimeout
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
