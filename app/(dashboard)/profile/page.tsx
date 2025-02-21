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
		<div className='px '>
			{/* sidebar */}

			<ProfileHero />

			{/* content */}
			<div className=''>
				<div className='flex xl:flex-row flex-col xl:space-x-[32px] max-xl:space-y-[32px]'>
					<AppointmentsHistory />
					<ProfileHistory />
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
