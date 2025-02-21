import { getCurrent } from "@/app/actions";
import CreateStats from "@/components/dashboard/create-page/create-stats";
import { ProfileFeatures } from "@/constants/dashboard-index";
import { redirect } from "next/navigation";
import React from "react";

const CreatePage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/");
	if (user.phoneVerification === false) redirect("/onboarding");

	return (
		<div className=''>
			<CreateStats />

			<div className='h-[80px] bg-black' />
		</div>
	);
};

export default CreatePage;
