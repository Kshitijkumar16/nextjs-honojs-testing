import { getCurrent } from "@/app/actions";
import { redirect } from "next/navigation";
import React from "react";

const AddPage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/");
	if (user.phoneVerification === false) redirect("/onboarding");

	return <div className='min-h-screen'>AddPage</div>;
};

export default AddPage;
