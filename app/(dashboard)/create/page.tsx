import { getCurrent } from "@/app/actions";
import CreateStats from "@/components/dashboard/create-page/create-stats";
import { redirect } from "next/navigation";
import React from "react";

const CreatePage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/");
	if (user.phoneVerification === false) redirect("/onboarding");

	return (
		<div className='min-h-screen'>
			<CreateStats />
		</div>
	);
};

export default CreatePage;
