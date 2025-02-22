import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<(typeof client.api.auth.signup)["$post"]>;
type RequestType = InferRequestType<(typeof client.api.auth.signup)["$post"]>;

export const useSignup = () => {
	const router = useRouter();

	const queryClient = useQueryClient();

	const mutation = useMutation<ResponseType, Error, RequestType>({
		mutationFn: async ({ json }) => {
			const response = await client.api.auth.signup["$post"]({ json });
			const data = await response.json();

			if (!response.ok) {
				throw new Error("Signup failed");
			}

			return data;
		},
		onSuccess: () => {
			router.refresh();
			queryClient.invalidateQueries({ queryKey: ["currentuser"] });
		},
	});

	return mutation;
};
