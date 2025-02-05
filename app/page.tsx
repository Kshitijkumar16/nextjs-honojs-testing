import Greeting from "@/components/landing-screen/greeting";
import React from "react";
import { getCurrent } from "./actions";

const LandingPage = async () => {
	let targetLink: TargetType = "/login";

	const user = await getCurrent();

	if (user) {
		if (user.phoneVerification === true) {
			targetLink = "/dashboard";
		} else {
			targetLink = "/onboarding";
		}
	}

	return (
		<div className=''>
			<Greeting target={targetLink} />
		</div>
	);
};

export default LandingPage;
