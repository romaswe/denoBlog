import { Handlebars, Router, helpers } from "../../deps.ts";
const router = new Router();
const handle = new Handlebars();

const postAPI = "http://127.0.0.1:8000/api/posts"

// https://deno.land/x/handlebars@v0.10.0
router.get("/", async (ctx) => {
  const jsonResponse = await fetch(postAPI);
  const jsonData = await jsonResponse.json();

  const renderObject = {
    jsonData: jsonData,
    pageName: "Homepage"
  }

  ctx.response.body = await handle.renderView("home", renderObject);
});

router.post("/newpost", async (ctx) => {
  const { value } = ctx.request.body();
  const searchParams = await value;

  for (const p of searchParams) {
    console.log(p);
  }
  const body = `
    {
      "post": {
        "title": "${searchParams.getAll("title")}",
        "shortDescription": "${searchParams.getAll("shortDesc")}",
        "post": "${searchParams.getAll("post")}"
      }
    }`;

  const resp = await fetch(postAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  console.log(resp);

  ctx.response.redirect("/")
});

router.post("/deletepost", async (ctx) => {
  const { value } = ctx.request.body();
  const searchParams = await value;

  for (const p of searchParams) {
    console.log(p);
  }
  const resp = await fetch(`${postAPI}/${searchParams.getAll("postId")}`, {
    method: "DELETE"
  });
  console.log(resp);

  ctx.response.redirect("/")
});

export default router;
