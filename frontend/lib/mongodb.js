import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) throw new Error("No MongoDB URI provided");

let client = new MongoClient(uri);
let clientPromise = client.connect();

export default clientPromise;
