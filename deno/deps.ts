// https://deno.land/manual@v1.35.3/examples/manage_dependencies
export {
  MongoClient,
  ObjectId,
} from "https://deno.land/x/mongo@v0.31.2/mod.ts";
export {
  Application,
  helpers,
  Router,
} from "https://deno.land/x/oak@v12.6.0/mod.ts";
export { Handlebars } from "https://deno.land/x/handlebars@v0.10.0/mod.ts";
import "https://deno.land/std@0.196.0/dotenv/load.ts"; // https://deno.land/std@0.196.0/dotenv/mod.ts
