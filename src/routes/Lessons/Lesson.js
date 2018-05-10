import React from 'react'
import { connect } from 'react-redux'

class Lesson extends React.Component {
  render() {
    return (
      <div>
       <iframe src="https://www.youtube.com/embed">
       </iframe>
      </div>
    )
  }
}

export default connect(
  ({ user }) => ({ //mapStateToProps
    currentProject: user.currentProject,
    currentLesson: user.currentLesson
  })
)(Lesson)