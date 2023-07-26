import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import apiRouter from "./routes/api/index.ts";
import appRouter from "./routes/app/index.ts";

// https://www.robinwieruch.de/deno-oak-rest-api/
const port = 8000;
const app = new Application();

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// Hello World!
/*router.get("/hello", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
});*/

//app.use(router.routes());
//app.use(router.allowedMethods());

app.use(apiRouter.posts.allowedMethods())
app.use(apiRouter.posts.routes())

app.use(appRouter.views.allowedMethods())
app.use(appRouter.views.routes())

app.addEventListener('listen', () => {
  console.log(`Listening on: localhost:${port}`);
});

await app.listen({ port: port });