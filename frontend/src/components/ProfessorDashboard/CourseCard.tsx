import React from "react";
import Card from "react-bootstrap/Card";
import { course } from "../model/course.model";

interface CourseCardProps {
  course: course;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Course Code: {course.courseID}
          </Card.Subtitle>
          <Card.Text>{course.description}</Card.Text>
          <Card.Link href="/content" style={{color: "blue"}}>Content page</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CourseCard;
