import React from "react";
import { redirect } from "next/navigation";
import { getCurrent } from "@/app/actions";
import LoginForm from "@/components/forms/login-form";

const BasePage = async () => {
	const user = await getCurrent();

	if (user) {
		if (user?.phoneVerification === true) redirect("/dashboard");
		if (user?.phoneVerification === false) redirect("/onboarding");
	}

	return (
		<div>
			<LoginForm />
		</div>
	);
};

export default BasePage;
