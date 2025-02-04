import LoginForm from "@/components/loginform";
import React from "react";
import { getCurrent } from "./actions";
import { redirect } from "next/navigation";

const BasePage = async () => {
	const user = await getCurrent();

	if (user) redirect("/dashboard");

	return (
		<div>
			<LoginForm />
		</div>
	);
};

export default BasePage;
