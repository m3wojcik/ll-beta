export default function reducer(state={
  alerts: []
  }, action) {
    switch (action.type) {
      case "ADD_ALERT": {
        const newAlerts = state.alerts.slice();
        newAlerts.push({"id": action.payload.id, "text":action.payload.text, "type":action.payload.type})
        return {
          ...state,
          alerts: newAlerts
        }
      }
      case "@@router/LOCATION_CHANGE": {
        return {
          ...state,
          alerts: []
        }
      }
      case "REMOVE_ALERT": {
        const [, ...alerts] = state.alerts;
        return {
          ...state,
          alerts: alerts
        }
      }
    }
    return state
}
