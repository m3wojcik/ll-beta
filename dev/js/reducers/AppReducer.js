export default function reducer(state={
    appData:{
      fetching: false,
      fetched:true,
      error: null,
      user:{
        firstName: null,
        lastName: null
      },
      notifications:{
        unreadMessages: 0
      }
    },
    toolbar: {
      header: null,
      hasTabs: false,
      hasBackButton: false
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
      case "FETCH_APP_DATA_REJECTED": {
        return {
          ...state,
          appData: {fetching: false, error: action.payload}}
      }
      case "FETCH_APP_DATA_FULFILLED": {
        return {
          ...state,
          appData : {
            fetching: false,
            fetched: true,
            user: {
              firstName: action.payload.user.firstName,
              lastName: action.payload.user.lastName
            },
            notifications:{
              unreadMessages: action.payload.notifications.unreadMessages
            }
          },
        }
      }
      case "SET_APP_SETTINGS": {
        return {
          ...state,
          toolbar: {...state.toolbar,
            header: action.payload.header,
            hasTabs: action.payload.hasTabs,
            hasBackButton: action.payload.hasBackButton
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
