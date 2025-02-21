import { getCurrent } from "@/app/actions";
import ProfileHistory from "@/components/dashboard/profile-page/purchase-history";
import ProfileHero from "@/components/dashboard/profile-page/profile-hero";
import { redirect } from "next/navigation";
import AppointmentsHistory from "@/components/dashboard/profile-page/appointments-history";
import ProfileFeaturesComponent from "@/components/dashboard/profile-page/profile-features";

const ProfilePage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/");
	if (user.phoneVerification === false) redirect("/onboarding");

	return (
		<div className='px '>
			<ProfileHero />

			{/* content */}
			<div className=''>
				<div className='flex xl:flex-row flex-col xl:space-x-[32px] max-xl:space-y-[32px]'>
					<AppointmentsHistory />
					<ProfileHistory />
				</div>
			</div>

			{/* other features */}
			{/* <div className='mt-60'>
				<ProfileFeaturesComponent />
			</div> */}

			<div className='h-[80px] bg-black' />
		</div>
	);
};

export default ProfilePage;
