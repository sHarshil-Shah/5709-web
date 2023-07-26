import React from 'react'
import CourseList from './CourseList'
import Analytics from './Analytics'

function ProfessorDashboard() {
  return (
    <div className="d-flex mt-5 landing-container">
        <CourseList />
        <Analytics />
    </div>
  )
}

export default ProfessorDashboard