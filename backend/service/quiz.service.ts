/*
 * File: quiz.service.ts
 * Author: Raj Soni
 * Copyright - 2023 ClassMate
 */

import { Db, MongoClient, ObjectId } from "mongodb";
import { Quiz } from "../model/quiz.model";
import envVariables from '../importenv';

const mongoURI = envVariables.mongoURI;
const quizCollectionName = envVariables.quizCollectionName;
const dbName = envVariables.dbName;


class QuizService {
  async getOneQuiz(quiz: Quiz) {
    try {
      const client = await MongoClient.connect(mongoURI, {
        connectTimeoutMS: 5000,
        socketTimeoutMS: 30000
      });
      const db: Db = client.db(dbName);
      const returned_quiz = await db.collection(quizCollectionName).findOne(quiz);
      client.close();

      if (returned_quiz) {
        return returned_quiz;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createNewQuiz(quiz: Quiz) {
    if (await this.getOneQuiz({ "title": quiz.title }) != null) {
      return null;
    }
    try {
      const client = await MongoClient.connect(mongoURI, {
        connectTimeoutMS: 5000,
        socketTimeoutMS: 30000
      });
      const db: Db = client.db(dbName);
      const new_quiz = await db.collection(quizCollectionName).insertOne(quiz);
      client.close();

      return new_quiz;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


  async getAllQuizzes() {
    try {
      const client = await MongoClient.connect(mongoURI, {
        connectTimeoutMS: 5000,
        socketTimeoutMS: 30000
      });
      const db: Db = client.db(dbName);
      const returned_quizzes = await db.collection(quizCollectionName).find().toArray();

      client.close();

      if (returned_quizzes) {
        return returned_quizzes;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteQuiz(quiz_id: string) {
    try {
      const objectId = new ObjectId(quiz_id);

      const client = await MongoClient.connect(mongoURI, {
        connectTimeoutMS: 5000,
        socketTimeoutMS: 30000
      });
      const db: Db = client.db(dbName);

      const deleteResponse = await db.collection(quizCollectionName).deleteOne({ _id: objectId });
      client.close();

      console.log(deleteResponse);
      return deleteResponse;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async editQuiz(quiz_id: string, updatedQuiz: Quiz) {
    try {
      const objectId = new ObjectId(quiz_id);

      const client = await MongoClient.connect(mongoURI, {
        connectTimeoutMS: 5000,
        socketTimeoutMS: 30000
      });
      const db: Db = client.db(dbName);
      const existingQuiz = await db.collection(quizCollectionName).findOne({ _id: objectId });
      if (!existingQuiz) {
        client.close();
        return null;
      }

      const updatedFields = { ...existingQuiz, ...updatedQuiz };

      const updateResponse = await db.collection(quizCollectionName).updateOne(
        { _id: objectId },
        { $set: updatedFields }
      );

      client.close();

      if (updateResponse.modifiedCount > 0) {
        return updatedFields;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default QuizService;
