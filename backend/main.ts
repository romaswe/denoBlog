import { Application, Router } from "https://deno.land/x/oak/mod.ts";
// https://www.robinwieruch.de/deno-oak-rest-api/
const port = 8000;
const app = new Application();
const router = new Router();

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// Hello World!
router.get("/hello", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
});


router.get('/', (ctx) => {
  ctx.response.body = 'Received a GET HTTP method';
});

router.post('/', (ctx) => {
  ctx.response.body = 'Received a POST HTTP method';
});

router.put('/', (ctx) => {
  ctx.response.body = 'Received a PUT HTTP method';
});

router.delete('/', (ctx) => {
  ctx.response.body = 'Received a DELETE HTTP method';
});


app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', () => {
  console.log(`Listening on: localhost:${port}`);
});

await app.listen({ port: port });