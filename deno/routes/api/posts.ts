import { helpers, ObjectId, Router } from "../../deps.ts";
import { postsCollection } from "../../database/mongo.ts";
const router = new Router();

const pathPrefix = "/api/posts";

router.get(pathPrefix, async (ctx) => {
  const posts = await postsCollection.find().toArray()
  console.log(`Returning ${posts.length} posts`);
  const body = {
    data: posts
  }
  ctx.response.body = body;
});

router.get(pathPrefix + "/:postId", async (ctx) => {
  const { postId } = helpers.getQuery(ctx, { mergeParams: true });
  const posts = await postsCollection.findOne({ _id: new ObjectId(postId) })
  console.log(`Returning post:`);
  console.log(posts);

  const body = {
    data: posts
  }
  ctx.response.body = body;
});

router.post(pathPrefix, async (ctx) => {
  const { value } = ctx.request.body({ type: "json" });
  const { _text } = await value;
  ctx.response.body = "Received a POST HTTP method";
});

router.put(pathPrefix + "/:postId", (ctx) => {
  const { postId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = `PUT HTTP method on posts/${postId} resource`;
});

router.delete(pathPrefix + "/:postId", (ctx) => {
  const { postId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = `DELETE HTTP method on posts/${postId} resource`;
});

export default router;
