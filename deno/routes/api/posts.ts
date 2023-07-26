import { Router, helpers } from "https://deno.land/x/oak@v12.6.0/mod.ts";
const router = new Router();

const pathPrefix = "/api/posts"

router.get(pathPrefix, (ctx) => {
    ctx.response.body = 'Received a GET HTTP method';
});

router.post(pathPrefix, async (ctx) => {
    const { value } = ctx.request.body({ type: 'json' });
    const { _text } = await value;
    ctx.response.body = 'Received a POST HTTP method';
});

router.post(pathPrefix + '/:postId', async (ctx) => {
    const { value } = ctx.request.body({ type: 'json' });
    const { _text } = await value;
    ctx.response.body = 'Received a POST HTTP method';
});

router.put(pathPrefix + '/:postId', (ctx) => {
    const { postId } = helpers.getQuery(ctx, { mergeParams: true });
    ctx.response.body = `PUT HTTP method on posts/${postId} resource`;
});

router.delete(pathPrefix + '/:postId', (ctx) => {
    const { postId } = helpers.getQuery(ctx, { mergeParams: true });
    ctx.response.body = `DELETE HTTP method on posts/${postId} resource`;
});

export default router;