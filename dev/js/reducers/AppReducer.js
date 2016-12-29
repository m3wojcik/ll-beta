export default function reducer(state={
    toolbar: {
      header: null,
      hasTabs: false,
      hasBackButton: false
    },
    tabs:{
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
      case "SET_APP_SETTINGS": {
        return {
          ...state,
          toolbar: {...state.toolbar, header: action.payload.header, hasTabs: action.payload.hasTabs, hasBackButton: action.payload.hasBackButton},
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
      case "SET_ACTIVE_TAB_INDEX": {
        return {
          ...state,
          tabs: {...state.tabs, activeTabIndex: action.payload},
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
