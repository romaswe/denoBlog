import { Handlebars } from 'https://deno.land/x/handlebars/mod.ts'
import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";

const router = new Router();
const handle = new Handlebars();

router.get('/', async (context) => {
    context.response.body = await handle.renderView('home', { name: "homepage" })
})


export default router;