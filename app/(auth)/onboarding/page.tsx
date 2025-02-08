import { getCurrent } from "@/app/actions";
import { redirect } from "next/navigation";

import OnboardingForm from "@/components/forms/onboarding-form";

const OnboardingPage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/login");
	if (user.phoneVerification === true) redirect("/dashboard");

	return (
		<div>
			<OnboardingForm />
		</div>
	);
};

export default OnboardingPage;
