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
		<div className='min-h-[calc(100svh-120px)] flex lg:flex-row flex-col lg:space-x-[32px] max-lg:space-y-[32px] justify-between pl'>
			<div
				className={cn(
					"w-full rounded-[24px] border border-white/20",
					"xl:px-9 md:px-6 px-5 py"
				)}
			>
				<DashHero data={user} />
			</div>
			<div className='w-full pr'>
				<DashContent />
			</div>
		</div>
	);
};

export default DashboardPage;
