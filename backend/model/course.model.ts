import { ObjectId } from "mongodb";

interface course {
  _id?: ObjectId;
  courseID?: string;
  title?: string;
  description?: string;
}

export default course;
