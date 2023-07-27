import { MongoClient } from "../deps.ts";
import { PostSchema } from "../interfaces/databaseInterface.ts"

// https://deno.land/x/mongo@v0.31.2
const client = new MongoClient();
client.connect("mongodb://localhost:27017");

const db = client.database("denoBlog");

const posts = db.collection<PostSchema>("posts");
console.log(posts);

