import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";
import crypto from "crypto";

const collectionName = 'users'

export default class UserDataAccess{
    async getUsers(){
        const result = await Mongo.db
        .collectionName(collectionName)
        .find({})
        .toArray()

        return result;
    }

    async deleteUser(){

    }

    async updateUser(){

    }
}