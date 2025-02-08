import { getCurrent } from "@/app/actions";
import SignUpForm from "@/components/forms/sign-up-form";
import { redirect } from "next/navigation";
import React from "react";

const SignUpPage = async () => {
	const user = await getCurrent();

	if (user) {
		if (user.phoneVerification === true) {
			redirect("/dashboard");
		}
		if (user.emailVerification === false) {
			redirect("/onboarding");
		}
	}

	return (
		<div>
			<SignUpForm />
		</div>
	);
};

export default SignUpPage;
