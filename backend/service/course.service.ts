import { Db, MongoClient, ObjectId } from "mongodb";
import envVariables from '../importenv';
import course from "../model/course.model"; // Assuming you have a model for the course

const mongoURI = envVariables.mongoURI;
const coursesCollectionName = "courses"; // Collection name for courses (you can change this if needed)
const dbName = envVariables.dbName;

class CourseService {
    async getCourses(): Promise<course[]> {
        try {
            // Connect to MongoDB
            const client = await MongoClient.connect(mongoURI, {
                connectTimeoutMS: 5000,
                socketTimeoutMS: 30000
            });
            const db: Db = client.db(dbName);

            // Fetch all courses from the MongoDB collection
            const courses = await db.collection<course>(coursesCollectionName).find().toArray();

            await client.close();

            console.log(courses);
            return courses;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export default CourseService;
