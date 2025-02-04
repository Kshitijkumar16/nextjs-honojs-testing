import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { createAdminClient } from "@/lib/appwrite";
import { ID } from "node-appwrite";
import { deleteCookie, setCookie } from "hono/cookie";
import { sessionMiddleware } from "@/lib/session-middleware";
import { AUTH_COOKIE } from "@/constants";
import { formSchema } from "@/schemas";

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
	.post("/signup", zValidator("json", formSchema), async (c) => {
		try {
			const { email, password, name } = c.req.valid("json");
			console.log("Received signup request for:", { email, name });

			const { account } = await createAdminClient();
			console.log("Admin client created successfully");

			const user = await account.create(ID.unique(), email, password, name);
			console.log("User created successfully:", user.$id);

			// Create email session directly
			const session = await account.createEmailPasswordSession(email, password);
			console.log("Session created successfully");

			setCookie(c, AUTH_COOKIE, session.secret, {
				path: "/",
				secure: true,
				httpOnly: true,
				maxAge: 60 * 60 * 24 * 30,
				sameSite: "strict",
			});

			return c.json({ data: user });
		} catch (error: any) {
			console.error("Signup error details:", {
				message: error.message,
				code: error.code,
				type: error.type,
				stack: error.stack,
			});

			return c.json(
				{
					error: error.message || "Failed to create account",
					code: error.code,
					type: error.type,
				},
				500
			);
		}
	});

export default app;
