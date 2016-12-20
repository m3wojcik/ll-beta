export default function reducer(state={
    toolbar: {
      header: null,
    },
    tabs:{
      activeTabIndex: 0,
      tabs: [],
      tabsContent: [],
      tabsContainer: null
    },
    page:{
      isLoading: false,
      isLoaded: false,
    }
  }, action) {

    switch (action.type) {
      case "SET_APP_HEADER": {
        return {
          ...state,
          toolbar: {...state.toolbar, header: action.payload},
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
          tabs: {...state.tabs, tabs: action.payload},
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
      case "PAGE_IS_LOADING": {
        return {
          ...state,
          tabs: {...state.page, isLoading: true, isLoaded: false},
        }
      }
      case "PAGE_IS_LOADED": {
        return {
          ...state,
          tabs: {...state.page, isLoading: false, isLoaded: true},
        }
      }
    }
    return state
}
