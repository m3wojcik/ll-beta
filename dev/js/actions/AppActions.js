export function setAppHeader(header) {
  return {
    type: 'SET_APP_HEADER',
    payload: header,
  }
}
export function setActiveTabIndex(index) {
  return {
    type: 'SET_ACTIVE_TAB_INDEX',
    payload: index,
  }
}
export function setTabs(index) {
  return {
    type: 'SET_TABS',
    payload: index,
  }
}
export function setTabsContent(content) {
  return {
    type: 'SET_TABS_CONTENT',
    payload: content,
  }
}
export function setTabsContainer(content) {
  return {
    type: 'SET_TABS_CONTAINER',
    payload: content,
  }
}
export function pageIsLoading() {
  return {
    type: 'PAGE_IS_LOADING',
    payload: true,
  }
}
export function pageIsLoaded() {
  return {
    type: 'PAGE_IS_LOADED',
    payload: false,
  }
}
