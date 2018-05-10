import model from '../model/rootModel'

const _localLoginRequest = () => ({
  type: 'LOCAL_LOGIN',
})
const _localLoginResponse = (response) => ({
  type: 'LOCAL_LOGIN',
  response
})

export const localLogin = (username, password) => dispatch => {
  dispatch(_localLoginRequest())
  model.getStudents((students) => {
    const user = students.find((user) => user.username === username)
    if (user && user.password === password) {
      dispatch(_localLoginResponse({
        signedIn: true,
        loginFailed: false,
        name: user.name,
        currentProject: user.currentProject,
        currentLesson: user.currentLesson
      }))
      return
    }
    dispatch(_localLoginResponse({
      signedIn: false,
      loginFailed: true
    }))
  })
}


const _localLogoutRequest = () => ({
  type: 'LOCAL_LOGOUT'
})

export const localLogout = () => dispatch => {
  dispatch(_localLogoutRequest())
}


const _nextLessonRequest = () => ({
  type: 'NEXT_LESSON'
})
const _nextLessonResponse = (response) => ({
  type: 'NEXT_LESSON',
  response
})

export const nextLesson = () => (dispatch, getState) => {
  dispatch(_nextLessonRequest())
  model.getLesson()
}
