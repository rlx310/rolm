const initState = {
  fetching: false,
  signedIn: false,
  loginFailed: false,
  name: "",
  email: "",
  avatar: "",
  coins: 0,
  currentProject: "",
  currentLesson: "",
  priveledges: "",
  recents: {}
}
const userReducer = (state=initState, action) => {
  switch (action.type) {
    case 'LOCAL_LOGIN':
      if (action.response) {
        return {
          ...state,
          ...action.response,
          fetching: false,
        }
      } else {
        return {
          ...state,
          fetching: true
        }
      }

    case 'LOCAL_LOGOUT':
      return initState
    
    default:
      return state
  }
}
export default userReducer