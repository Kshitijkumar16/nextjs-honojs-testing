import { getCurrent } from "@/app/actions";
import ProfileHistory from "@/components/dashboard/profile-page/purchase-history";
import ProfileHero from "@/components/dashboard/profile-page/profile-hero";
import ProfileStats from "@/components/dashboard/profile-page/appointments-history";
import { redirect } from "next/navigation";
import ProfileJourney from "@/components/dashboard/profile-page/profile-journey";
import { cn } from "@/lib/utils";
import AppointmentsHistory from "@/components/dashboard/profile-page/appointments-history";

const ProfilePage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/");
	if (user.phoneVerification === false) redirect("/onboarding");

	return (
		<div className='px flex xl:flex-row flex-col items-start justify-start xl:space-x-[32px] max-xl:space-y-[32px]'>
			{/* sidebar */}
			<div
				className={cn(
					"xl:min-w-[400px] lg:min-w-[380px] rounded-[24px] border border-white/20",
					"xl:sticky xl:top-[98px] xl:max-w-[400px] xl:max-h-[calc(100svh-120px)] xl:overflow-y-scroll hide-scrollbar",
					"xl:px-9 md:px-6 px-5"
				)}
			>
				<ProfileHero />
			</div>

			{/* content */}
			<div className='2xl:max-w-[calc(100vw-(400px+84px+84px))] lg:max-w-[calc(100vw-(380px+72px+72px))] space-y-[32px] xl:pb-[24px]'>
				<ProfileJourney />

				<div className='flex xl:flex-row flex-col xl:space-x-[32px] max-xl:space-y-[32px]'>
					<AppointmentsHistory />
					<ProfileHistory />
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
