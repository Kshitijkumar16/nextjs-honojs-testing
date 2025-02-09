import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<
	(typeof client.api.auth.sendotp)["$post"]
>;
type RequestType = InferRequestType<(typeof client.api.auth.sendotp)["$post"]>;

export const useSendOTP = () => {
	const mutation = useMutation<ResponseType, Error, RequestType>({
		mutationFn: async ({ json }) => {
			const response = await client.api.auth.sendotp["$post"]({ json });

			if (!response.ok) {
				throw new Error("Send-otp failed");
			}

			const data = await response.json();

			return data;
		},
	});

	return mutation;
};
