import { helpers, ObjectId, Router } from "../../deps.ts";
import { postsCollection } from "../../database/mongo.ts";
import { PostContainer } from "../../interfaces/postInterface.ts";
const router = new Router();

const pathPrefix = "/api/posts";

router.get(pathPrefix, async (ctx) => {
  const posts = await postsCollection.find().toArray();
  console.log(`Returning ${posts.length} posts`);
  const body = {
    data: posts,
  };
  ctx.response.body = body;
});

router.get(pathPrefix + "/:postId", async (ctx) => {
  const { postId } = helpers.getQuery(ctx, { mergeParams: true });
  const posts = await postsCollection.findOne({ _id: new ObjectId(postId) });
  console.log(`Returning post:`);
  console.log(posts);

  const body = {
    data: posts,
  };
  ctx.response.body = body;
});

router.post(pathPrefix, async (ctx) => {
  try {
    const { value } = ctx.request.body({ type: "json" });
    const post: PostContainer = await value;
    console.log(post);

    if (post._id) {
      throw new Error("Post already have a ID, did you want to patch?");
    } else if (!post.date) {
      console.log(`No date on body, adding ${new Date(Date.now())} as date`);
      post.date = new Date(Date.now());

    }

    // TODO: Add validator to check json-body
    const insertId = await postsCollection.insertOne({ post });
    console.log(insertId);

    ctx.response.body = `Post added: ${JSON.stringify(post)}`;
  } catch (error) {
    console.log(`Error: ${error}`);
    ctx.response.status = 500;
    ctx.response.body = `${error}`;
  }
});

router.put(pathPrefix + "/:postId", (ctx) => {
  const { postId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = `PUT HTTP method on posts/${postId} resource`;
});

router.delete(pathPrefix + "/:postId", async (ctx) => {
  const { postId } = helpers.getQuery(ctx, { mergeParams: true });
  const deleteCount = await postsCollection.deleteOne({
    _id: new ObjectId(postId),
  });
  console.log(`Deleted ${deleteCount} posts`);
  ctx.response.body = `Number of deleted posts: ${deleteCount}`;
});

export default router;
