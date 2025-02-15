import { useMutation } from "@tanstack/react-query";
import { InferResponseType } from "hono";

import { client } from "@/lib/rpc";

export const useCleanAuth = () => {
	const mutation = useMutation({
		mutationFn: async () => {
			const response = await client.api.auth.cleanauth["$post"]();
			return await response.json();
		},
	});

	return mutation;
};
