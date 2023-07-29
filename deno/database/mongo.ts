import { MongoClient, ObjectId } from "../deps.ts";
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
console.log("------");
/*
const posts = await postsCollection.find().toArray()
console.log("all posts: ");
console.log(posts);
console.log("------");

const id = new ObjectId("64c4d7602c552b2397a1f4dc");
const posts2 = await postsCollection.findOne({ _id: id })
console.log("one post: ");
console.log(posts2);
console.log("------");

const count = await postsCollection.countDocuments();
console.log("count: " + count);
console.log("------");
*/
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