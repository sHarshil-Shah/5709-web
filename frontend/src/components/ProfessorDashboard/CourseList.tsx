import React from "react";
import CourseCard from "./CourseCard";

function CourseList() {
  return (
    <div className="course-list">
      <div className="Headers">Courses</div>
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
}

export default CourseList;
