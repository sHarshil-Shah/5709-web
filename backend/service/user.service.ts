import { Db, MongoClient } from "mongodb";
import user from "../model/user.model";

import { ObjectId } from 'mongodb';

const mongoURI = 'mongodb+srv://grp7:P%40ss12@web-grp-7.a0rihj2.mongodb.net/?retryWrites=true&w=majority';

const dbName = 'classmate';
const usersCollectionName = 'users';



class UserService {
  async getUser(user: user) {
    try {
      // Connect to MongoDB
      const client = await MongoClient.connect(mongoURI, {
        connectTimeoutMS: 5000,
        socketTimeoutMS: 30000
      });
      const db: Db = client.db(dbName);
      console.log(user);
      const returned_user = await db.collection(usersCollectionName).findOne(user);

      console.log(user);
      client.close();

      if (user) {
        return returned_user;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async createUser(user: user) {
    if (await this.getUser({ "user_email": user.user_email }) != null) {
      return;
    }
    try {
      // Connect to MongoDB
      const client = await MongoClient.connect(mongoURI, {
        connectTimeoutMS: 5000,
        socketTimeoutMS: 30000
      });
      const db: Db = client.db(dbName);

      // Check user credentials in the MongoDB collection
      console.log(user);
      const new_user = await db.collection(usersCollectionName).insertOne(user);

      console.log(user);
      client.close();
      return new_user;
    } catch (error) {
      console.log(error);
    }
  }


  async listUsersWithusertypeFilter() {
    try {
      // Connect to MongoDB
      const client = await MongoClient.connect(mongoURI, {
        connectTimeoutMS: 5000,
        socketTimeoutMS: 30000
      });
      const db: Db = client.db(dbName);

      // Check user credentials in the MongoDB collection
      const users = await db.collection(usersCollectionName).find({ user_type: { $in: ["stud", "prof"] } }).toArray();
      client.close();

      console.log(users);
      return users;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(user_id: string) {
    try {
      const objectId = new ObjectId(user_id);

      // Connect to MongoDB
      const client = await MongoClient.connect(mongoURI, {
        connectTimeoutMS: 5000,
        socketTimeoutMS: 30000
      });
      const db: Db = client.db(dbName);

      // Check user credentials in the MongoDB collection
      const deleteResponse = await db.collection(usersCollectionName).deleteOne( { _id: objectId });
      client.close();

      console.log(deleteResponse);
      return deleteResponse;
    } catch (error) {
      console.log(error);
    }
  }

}

export default UserService;
