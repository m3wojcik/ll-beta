export default function reducer(state={
  classDetails: null,
  fetching: false,
  fetched: false,
  error: null,
  lessonObjects:[],
  // lessonObjects:{
  //   classId: null,
  //   objects: [],
  //   fetching: false,
  //   fetched: false,
  // },
  classTests:[],
  classFiles: []
  // classFiles:{
  //   files: [],
  //   path: [],
  //   fetching: false,
  //   fetched: false,
  // }
}, action) {

    switch (action.type) {
      case "FETCH_CLASS_DETAILS": {
        return {...state, fetching: true, fetched: false, classDetails: null}
      }
      case "FETCH_CLASS_DETAILS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_CLASS_DETAILS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          classDetails: action.payload,
        }
      }

      case "FETCH_CLASS_LESSON_OBJECTS": {
        let newLessonObjects = state.lessonObjects.slice();
        newLessonObjects[action.payload] = {fetching: true, fetched:false}
        return {...state, lessonObjects: newLessonObjects}
      }
      case "FETCH_CLASS_LESSON_OBJECTS_REJECTED": {
        return {...state, lessonObjects: {fetching: false}, error: action.payload}
      }
      case "FETCH_CLASS_LESSON_OBJECTS_FULFILLED": {
        let newLessonObjects = state.lessonObjects.slice();
        newLessonObjects[action.payload.classId] = {
          objects: action.payload.lessonObjects,
          fetching: false,
          fetched: true
        }
        return {
          ...state,
          lessonObjects: newLessonObjects
        }
      }

      case "FETCH_CLASS_TESTS": {
        let newClassTests = state.classTests.slice();
        newClassTests[action.payload] = {fetching: true, fetched:false}
        return {...state, classTests: newClassTests}
      }
      case "FETCH_CLASS_TESTS_REJECTED": {
        return {...state, classTests: {fetching: false}, error: action.payload}
      }
      case "FETCH_CLASS_TESTS_FULFILLED": {
        let newClassTests = state.classTests.slice();
        newClassTests[action.payload.classId] = {
          tests: action.payload.tests,
          fetching: false,
          fetched: true
        }
        return {
          ...state,
          classTests: newClassTests
        }
      }

      case "FETCH_CLASS_FILES": {
        let newClassFiles = state.classFiles.slice();
        newClassFiles[action.payload] = {fetching: true, fetched:false}
        return {...state, classFiles: newClassFiles}
      }
      case "FETCH_CLASS_FILES_REJECTED": {
        return {...state, classFiles: {fetching: false}, error: action.payload}
      }
      case "FETCH_CLASS_FILES_FULFILLED": {
        let newClassFiles = state.classFiles.slice();
        newClassFiles[action.payload.classId] = {
          files: action.payload.files,
          path: action.payload.path,
          fetching: false,
          fetched: true
        }
        return {
          ...state,
          classFiles: newClassFiles
        }
      }
    }
    return state
}
