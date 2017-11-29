export default function reducer(state={
  wall: [],
  survey: null,
  view:{
    drawerVisible: false
  },
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_WALL": {
        return {...state, fetching: true, fetched: false}
      }
      case "FETCH_WALL_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_WALL_FULFILLED": {
        let newSurvey = null
        action.payload.wall.forEach(function(element) {
          if(element.type =="new_survey"){
            if( element.extra_data.completed == false){
              newSurvey = element
            }   
          }  
        })
        return {
          ...state,
          fetching: false,
          fetched: true,
          survey: newSurvey,
          wall: action.payload.wall,
        }
      }

      case "TOGGLE_SURVEY_DRAWER": {
        return {
          ...state,
          view:{
            ...state.view,
            drawerVisible: action.payload
          }}
      }
    }
    return state
}
