export default function reducer(state={
    appData:{
      fetching: false,
      fetched:true,
      error: null,
      user: {},
      notifications: [],
      locales:[]
    },
    toolbar: {
      header: null,
      hasTabs: false,
      searchBtn: false,
      searching: false,
      searchValue: ""
    },
    tabs:{
      fetched:false,
      activeTabIndex: 0,
      tabs: [],
      tabsContent: [],
      tabsContainer: null
    },
    page:{
      loaded: false,
    }
  }, action) {

    switch (action.type) {
      case "FETCH_APP_DATA": {
        return {...state, appData: {fetching: true, fetched:false}}
      }
      case "FETCH_APP_DATA_REJECTED": {
        return {
          ...state,
          appData: {fetching: false, fetched:false, error: action.payload}}
      }
      case "FETCH_APP_DATA_FULFILLED": {
        return {
          ...state,
          appData : {
            fetching: false,
            fetched: true,
            user: action.payload.user,
            notifications: action.payload.notifications,
            locales: action.payload.locales
          },
        }
      }
      case "SET_APP_SETTINGS": {

        return {
          ...state,
          toolbar: {...state.toolbar,
            header: action.payload.header,
            hasTabs: action.payload.hasTabs,
            searchBtn: action.payload.searchBtn,
            searching: false,
            searchValue: ''
          },
        }
      }
      case "SET_APP_HEADER": {
        return {
          ...state,
          toolbar: {...state.toolbar, header: action.payload},
        }
      }
      case "SET_HAS_TABS": {
        return {
          ...state,
          toolbar: {...state.toolbar, hasTabs: action.payload},
        }
      }
      case "SET_SEARCH_BTN": {
        return {
          ...state,
          toolbar: {...state.toolbar, searchBtn: action.payload},
        }
      }
      case "SET_SEARCHING": {
        return {
          ...state,
          toolbar: {...state.toolbar, searching: action.payload},
        }
      }
      case "SET_SEARCH_VALUE": {
        return {
          ...state,
          toolbar: {...state.toolbar, searchValue: action.payload},
        }
      }
      case "SET_ACTIVE_TAB_INDEX": {
        return {
          ...state,
          tabs: {...state.tabs, activeTabIndex: action.payload},
        }
      }
      case "SET_TABS_FETCH": {
        return {
          ...state,
          tabs: {...state.tabs, fetched: action.payload},
        }
      }
      case "SET_TABS": {
        return {
          ...state,
          tabs: {...state.tabs, tabs: action.payload, hasTabs: true},
        }
      }
      case "SET_TABS_CONTENT": {
        return {
          ...state,
          tabs: {...state.tabs, tabsContent: action.payload},
        }
      }
      case "SET_TABS_CONTAINER": {
        return {
          ...state,
          tabs: {...state.tabs, tabsContainer: action.payload},
        }
      }
      case "SET_PAGE_LOADED": {
        return {
          ...state,
          page: {...state.page, loaded: action.payload},
        }
      }
    }
    return state
}
