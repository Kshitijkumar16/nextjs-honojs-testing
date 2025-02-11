import { getCurrent } from "@/app/actions";
import DashContent from "@/components/dashboard/dash-page/dash-content";
import DashHero from "@/components/dashboard/dash-page/dash-hero";
import DashTopLine from "@/components/dashboard/desktop-navbar";
import Profile from "@/components/dashboard/profile-page/profile-hero";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/");
	if (user.phoneVerification === false) redirect("/onboarding");

	return (
		<div className='min-h-screen'>
			<DashHero />
			<DashContent />
		</div>
	);
};

export default DashboardPage;
