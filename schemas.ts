import { z } from "zod";

export const formSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string(),
});
