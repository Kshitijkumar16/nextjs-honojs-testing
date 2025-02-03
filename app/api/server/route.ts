import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { createAdminClient } from "@/lib/appwrite";
import { ID } from "node-appwrite";
import { deleteCookie, setCookie } from "hono/cookie";
import { sessionMiddleware } from "@/lib/session-middleware";
import { AUTH_COOKIE } from "@/constants";
import { formSchema } from "@/components/loginform";

const app = new Hono()
	.get("/currentuser", sessionMiddleware, (c) => {
		const user = c.get("user");
		return c.json({ data: user });
	})
	.post("/logout", sessionMiddleware, async (c) => {
		const account = c.get("account");

		deleteCookie(c, AUTH_COOKIE);
		await account.deleteSession("current");
		return c.json({ success: true });
	})
	.post("/login", zValidator("json", formSchema), async (c) => {
		console.log("login running");

		const { name, email, password } = c.req.valid("json");

		const { account } = await createAdminClient();

		const user = await account.create(ID.unique(), name, email, password);

		console.log("account created");

		const session = await account.createEmailPasswordSession(email, password);

		console.log("session created");

		console.log(session);

		setCookie(c, AUTH_COOKIE, session.secret, {
			path: "/",
			secure: true,
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 30,
			sameSite: "strict",
		});

		console.log("cookie set");

		return c.json({ data: user });
	});

export default app;
