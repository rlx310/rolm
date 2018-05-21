import React from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import Navbar from '../../components/Navbar.js'
import SideNav from '../../components/SideNav.js'
import Lesson from './Lesson'
import lessons from '../../model/lessons.json'


class Lessons extends React.Component {
  constructor(props) {
    super(props)
    console.log(lessons)
    let currentLesson
    const currentProject = lessons.find((project) => project.id === props.currentProject)
    if (currentProject) {
      currentLesson = lessons.find(
        (project) => project.id === props.currentProject
      ).lessons.find( 
        (lesson) => lesson.id === props.currentLesson
      ).youtubeID
    }
    else {
      currentLesson = ''
    }
    

    this.state = {
      lessonID: currentLesson
    }
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
        <Lesson youtubeID={this.state.lessonID} /> 
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
