import { Handlebars, Router } from "../../deps.ts";

const router = new Router();
const handle = new Handlebars();

// https://deno.land/x/handlebars@v0.10.0
router.get("/", async (context) => {
  context.response.body = await handle.renderView("home", { name: "homepage" });
});

export default router;
