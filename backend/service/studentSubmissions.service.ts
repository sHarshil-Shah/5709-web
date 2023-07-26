import {Db, MongoClient, ObjectId} from "mongodb";
import assignment from "../model/profAssignment.model";
import envVariables from '../importenv';
const multer = require('multer');
const path = require('path');

const mongoURI = envVariables.mongoURI;
const submissionCollection = envVariables.studentSubmissionsCollectionName;
const dbName = envVariables.dbName;

class StudentSubmission {

    async uploadSubmissons(assignment: assignment) {
        try {
            // Connect to MongoDB
            const client = await MongoClient.connect(mongoURI, {
                connectTimeoutMS: 5000,
                socketTimeoutMS: 30000
            });

            const db: Db = client.db(dbName);

            // Check user credentials in the MongoDB collection
            console.log(assignment);

            const new_assignment = await db.collection(submissionCollection).insertOne(assignment);

            console.log(assignment);
            await client.close();
            return new_assignment;
        } catch (error) {
            console.log(error);
        }
    } 
}

export default StudentSubmission;
