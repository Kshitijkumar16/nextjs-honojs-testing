import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useCurrentUser = () => {
	const query = useQuery({
		queryKey: ["currentuser"],
		queryFn: async () => {
			const response = await client.api.auth.currentuser.$get();

			if (!response.ok) {
				return null;
			}

			const { data } = await response.json();

			return data;
		},
	});

	return query;
};
