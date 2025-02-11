import { sessionMiddleware } from "@/lib/session-middleware";
import { Hono } from "hono";

const app = new Hono().post("/", sessionMiddleware, async (c) => {});

export default app;
