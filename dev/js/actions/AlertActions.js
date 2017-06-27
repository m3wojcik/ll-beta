
export function addAlert(params) {

  return {
    type: 'ADD_ALERT',
    payload: params
  }
}
export function removeAlert() {
  return {
    type: 'REMOVE_ALERT',
    payload: true,
  }
}
