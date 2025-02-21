// global imports
import { getCurrent } from "@/app/actions";
import { redirect } from "next/navigation";

// local imports
import DashHero from "@/components/dashboard/dash-page/dash-hero";
import DashContent from "@/components/dashboard/dash-page/dash-content";
import { cn } from "@/lib/utils";

const DashboardPage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/");
	if (user.phoneVerification === false) redirect("/onboarding");

	return (
		<div className=''>
			<DashHero data={user} />
		</div>
	);
};

export default DashboardPage;
