// global imports
import { getCurrent } from "@/app/actions";
import { redirect } from "next/navigation";

// local imports
import DashHero from "@/components/dashboard/dash-page/dash-hero";
import DashContent from "@/components/dashboard/dash-page/dash-content";
import { cn } from "@/lib/utils";
import FeaturesList from "@/components/dashboard/features-list";

const DashboardPage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/");
	if (user.phoneVerification === false) redirect("/onboarding");

	return (
		<div className=''>
			<DashHero data={user} />
			<FeaturesList />
		</div>
	);
};

export default DashboardPage;
