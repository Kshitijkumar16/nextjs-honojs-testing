import LoginForm from "@/components/loginform";
import React from "react";
import { getCurrent } from "./api/actions";
import { redirect } from "next/navigation";

const BasePage = async () => {
	const user = await getCurrent();

	if (user) redirect("/");

	return (
		<div>
			<LoginForm />
		</div>
	);
};

export default BasePage;
