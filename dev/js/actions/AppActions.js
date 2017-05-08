import {instance} from './config'


export function fetchAppData() {
  return function(dispatch) {
    dispatch({type: "FETCH_APP_DATA", payload: true});
    instance.get("?q=getAppData")
      .then((response) => {
    //       console.log("response.data");
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
        dispatch({type: "FETCH_APP_DATA_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_APP_DATA_REJECTED", payload: err})
      })
  }
}
export function setAppSettings(settings) {
  return {
    type: 'SET_APP_SETTINGS',
    payload: settings,
  }
}
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
export function setTabsFetch(fetched) {
  return {
    type: 'SET_TABS_FETCH',
    payload: fetched,
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
export function setPageLoaded(loaded) {
  return {
    type: 'SET_PAGE_LOADED',
    payload: loaded,
  }
}
export function setHasTabs(hasTabs) {
  return {
    type: 'SET_HAS_TABS',
    payload: hasTabs,
  }
}
export function setSearchBtn(searchBtn) {
  return {
    type: 'SET_SEARCH_BTN',
    payload: searchBtn,
  }
}
export function setSearching(searching) {
  return {
    type: 'SET_SEARCHING',
    payload: searching,
  }
}
export function setSearchValue(value) {
  return {
    type: 'SET_SEARCH_VALUE',
    payload: value,
  }
}
