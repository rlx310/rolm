import React from 'react'
import { connect } from 'react-redux'
import lessons from '../../model/lessons.json'

const Lesson = ({ youtubeID }) => (
  <div className="embed-responsive">
    <iframe src={`https://www.youtube.com/embed/${youtubeID}?rel=0&modestbranding=1`}>
    </iframe>
  </div>

)

export default Lesson