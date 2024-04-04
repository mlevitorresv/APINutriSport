import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD
const db_collection = process.env.DB_COLLECTION
const db_cluster = process.env.DB_CLUSTER
const db_name = process.env.DB_NAME


export const mongoConnect = async ()=> {

    try {
        await mongoose.connect(`mongodb+srv://${db_user}:${db_password}@${db_collection}.${db_cluster}.mongodb.net/${db_name}`)
        console.log('Success Connection')
    } catch (e) {
        console.log('DB error:', e)
        throw e
    }
}