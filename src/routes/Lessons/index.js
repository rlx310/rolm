import React from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import Navbar from '../../components/Navbar.js'
import SideNav from '../../components/SideNav.js'
import Lesson from './Lesson'

class Lessons extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const { match, currentProject, currentLesson } = this.props
    const prevLesson = `${match.url}/${currentProject}/${currentLesson - 1}`
    const currLesson = `${match.url}/${currentProject}/${currentLesson}`
    const nextLesson = `${match.url}/${currentProject}/${currentLesson + 1}`
    return (  
      <div>
        <SideNav />
        <Navbar />
        <p>Lessons</p>
        <Link to={`${this.props.match.url}/${this.props.currentProject}/${this.props.currentLesson}`}>Link</Link>
        <Route path={`${this.props.match.url}/:lesson`} component={Lesson} />
        <p>{console.log(this.props)}</p>
      </div>
    )
  }
}

export default connect(
  ({ user }) => ({ //mapStateToProps
    currentProject: user.currentProject,
    currentLesson: user.currentLesson
  })
)(Lessons)
