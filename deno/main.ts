import { Application } from "./deps.ts";
import apiRouter from "./routes/api/index.ts";
import appRouter from "./routes/app/index.ts";

// https://www.robinwieruch.de/deno-oak-rest-api/
// https://medium.com/nybles/a-complete-guide-to-deno-and-oak-with-authentication-using-bcrypt-and-djwt-with-mongodb-as-cbe4b604de9f§
const port = 8000;
const app = new Application();

app.addEventListener("error", (event) => {
  console.log(event.error);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(apiRouter.posts.allowedMethods());
app.use(apiRouter.posts.routes());

app.use(appRouter.views.allowedMethods());
app.use(appRouter.views.routes());

app.addEventListener("listen", () => {
  console.log(`Listening on: localhost:${port}`);
});

await app.listen({ port: port });
