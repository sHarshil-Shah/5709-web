import { ObjectId } from "mongodb";

interface Course {
  _id?: ObjectId;
  courseID?: string;
  title?: string;
  description?: string;
}

export default Course;
