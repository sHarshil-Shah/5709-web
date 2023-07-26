import React, {useEffect, useState} from 'react'
// import CourseList from './ProfessorDashboard/CourseList';
// import Analytics from './ProfessorDashboard/Analytics';
// import {course} from './model/course.model';
// import envVariables from '../importenv';
import StudentAssignmentList from './studentAssignments/studentAssignment';

function StudentDashboard() {

    return (
        <div >
            {/* <CourseList courses={courses}/>
            <Analytics/> */}
            <StudentAssignmentList/>
        </div>
    )
}

export default StudentDashboard;