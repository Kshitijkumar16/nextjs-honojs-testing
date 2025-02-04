import { Hono } from "hono";
import { handle } from "hono/vercel";

import variable from "@/app/server/route";

const app = new Hono().basePath("/api");

const routes = app.route("/auth", variable);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
