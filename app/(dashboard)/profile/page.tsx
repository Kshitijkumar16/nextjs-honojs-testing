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
		<div className='min-h-screen px flex lg:flex-row flex-col justify-between lg:space-x-[40px]'>
			{/* sidebar */}
			<div
				className={cn(
					"w-full rounded-[24px] border border-white/20",
					"lg:sticky lg:top-[98px] lg:max-w-[400px] lg:max-h-[calc(100svh-128px)] lg:overflow-y-scroll",
					"lg:px-9 md:px-6 px-5"
				)}
			>
				<ProfileHero />
			</div>

			{/* content */}
			<div className='w-full space-y-[40px] lg:pb-[32px]'>
				<ProfileJourney />

				<div className='flex lg:flex-row flex-col lg:space-x-[40px] max-lg:space-y-[40px]'>
					<AppointmentsHistory />
					<ProfileHistory />
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
