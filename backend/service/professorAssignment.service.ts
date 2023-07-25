import {Db, MongoClient, ObjectId} from "mongodb";
import assignment from "../model/profAssignment.model";
import envVariables from '../importenv';

const mongoURI = envVariables.mongoURI;
const profAssignmentsCollectionName = envVariables.professorAssignmentCollectionName;
const dbName = envVariables.dbName;

class ProfAssignmentService {
    async createAssignment(assignment: assignment) {
        // if (await this.getUser({"user_email": user.user_email}) != null) {
        //     return;
        // }
        try {
            // Connect to MongoDB
            const client = await MongoClient.connect(mongoURI, {
                connectTimeoutMS: 5000,
                socketTimeoutMS: 30000
            });

            const db: Db = client.db(dbName);

            // Check user credentials in the MongoDB collection
            console.log(assignment);

            const new_assignment = await db.collection(profAssignmentsCollectionName).insertOne(assignment);

            console.log(assignment);
            await client.close();
            return new_assignment;
        } catch (error) {
            console.log(error);
        }
    } 
}

export default ProfAssignmentService;
