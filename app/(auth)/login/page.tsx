import LoginForm from "@/components/forms/login-form";
import React from "react";
import { redirect } from "next/navigation";
import { getCurrent } from "@/app/actions";
import DemoLogin from "@/components/forms/demo-login";

const BasePage = async () => {
	const user = await getCurrent();

	if (user) {
		if (user?.phoneVerification === true) redirect("/dashboard");
		if (user?.phoneVerification === false) redirect("/onboarding");
	}

	return (
		<div>
			{/* <LoginForm /> */}
			<DemoLogin />
		</div>
	);
};

export default BasePage;
