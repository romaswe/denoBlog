import { MongoClient } from "../deps.ts";
import { PostSchema } from "../interfaces/databaseInterface.ts";

const client = new MongoClient();
const username = Deno.env.get("DATABASE_USER");
const password = Deno.env.get("DATABASE_PASSWORD")
const connectionURL = `mongodb://${username}:${password}@localhost:27017/?authMechanism=SCRAM-SHA-1`;

try {
    await client.connect(
        connectionURL,
    );
    console.log("Connected to database:");
    console.log(connectionURL);

} catch (error) {
    console.log("Fail to connect:");
    console.log(error);
}
const db = client.database("denoBlog");

export const postsCollection = db.collection<PostSchema>("posts");
console.log(postsCollection);
/*
const myPost: PostObject = {
    title: "title",
    shortDescription: "shortDescription",
    post: "min post"

}
const insertId = await postsCollection.insertOne({
    date: new Date(Date.now()),
    post: myPost
});
console.log(insertId);
*/