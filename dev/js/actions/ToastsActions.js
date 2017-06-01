
export function addToast(text, action, autohide) {

  return {
    type: 'ADD_TOAST',
    payload: {"text":text, "action":action, autohide}
  }
}
export function removeToast() {
  return {
    type: 'REMOVE_TOAST',
    payload: true,
  }
}
