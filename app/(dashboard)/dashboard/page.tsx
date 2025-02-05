import { getCurrent } from "@/app/actions";
import Profile from "@/components/profile";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/");
	if (user.phoneVerification === false) redirect("/onboarding");

	return (
		<div className='h-screen flex flex-col justify-center items-center'>
			<Profile />
		</div>
	);
};

export default DashboardPage;
