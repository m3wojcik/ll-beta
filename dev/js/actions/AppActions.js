import { CALL_API } from '../middleware/api'

export function fetchAppData() {
  return {
    [CALL_API]: {
      endpoint: '/appData',
      types: ["FETCH_APP_DATA", "FETCH_APP_DATA_FULFILLED", "FETCH_APP_DATA_REJECTED"],
      authenticated: true,
      method: 'get'
    }
  }
}
export function changeLanguage(params) {
  return {
    [CALL_API]: {
      endpoint: '/changeLanguage',
      types: ["CHANGE_LANGUAGE", "CHANGE_LANGUAGE_FULFILLED", "CHANGE_LANGUAGE_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}
export function fetchSettings(params) {
  return {
    [CALL_API]: {
      endpoint: '/notifications',
      types: ["FETCH_SETTINGS", "FETCH_SETTINGS_FULFILLED", "FETCH_SETTINGS_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}
export function saveNotifications(params) {
  return {
    [CALL_API]: {
      endpoint: '/notifications',
      types: ["SAVE_NOTIFICATIONS", "SAVE_NOTIFICATIONS_FULFILLED", "SAVE_NOTIFICATIONS_REJECTED"],
      authenticated: true,
      method: 'post',
      params: {...params}
    }
  }
}
export function fetchMenuNofitications(params) {
  return {
    [CALL_API]: {
      endpoint: '/newCount',
      types: ["FETCH_MENU_NOTIFICATIONS", "FETCH_MENU_NOTIFICATIONS_FULFILLED", "FETCH_MENU_NOTIFICATIONS_REJECTED"],
      authenticated: true,
      method: 'get',
      params: {...params}
    }
  }
}

export function toggleLanguageDialog(settings) {
  return {
    type: 'TOGGLE_LANGUAGE_DIALOG',
    payload: settings,
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
export function setSettings(params) {
  return {
    type: 'SET_SETTINGS',
    payload: params,
  }
}
// import {instance} from './config'


// export function fetchSettings() {
//   return function(dispatch) {
//     dispatch({type: "FETCH_SETTINGS"});
//     instance({
//       method: 'get',
//       url:'?q=notifications'
//     }).then((response) => {
//         dispatch({type: "FETCH_SETTINGS_FULFILLED", payload: response.data});
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_SETTINGS_REJECTED", payload: err})
//       })
//   }
// }