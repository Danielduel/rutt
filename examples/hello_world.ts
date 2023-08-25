import { router } from "https://deno.land/x/rutt/mod.ts";

await Deno.serve(
  router({
    "/": (_req) => new Response("Hello world!", { status: 200 }),
  }),
).finished;
