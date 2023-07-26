import { ObjectId } from "mongodb";

export interface course {
  _id?: ObjectId;
  courseID?: string;
  title?: string;
  description?: string;
}

