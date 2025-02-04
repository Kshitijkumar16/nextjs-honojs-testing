import LoginForm from "@/components/forms/login-form";
import React from "react";
import { redirect } from "next/navigation";
import { getCurrent } from "@/app/actions";

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
