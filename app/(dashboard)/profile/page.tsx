import { getCurrent } from "@/app/actions";
import ProfileHistory from "@/components/dashboard/profile-page/profile-history";
import ProfileHero from "@/components/dashboard/profile-page/profile-hero";
import ProfileStats from "@/components/dashboard/profile-page/profile-stats";
import { redirect } from "next/navigation";
import ProfileJourney from "@/components/dashboard/profile-page/profile-journey";

const ProfilePage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/");
	if (user.phoneVerification === false) redirect("/onboarding");

	return (
		<div className='min-h-screen px pt-[8px] pb-[40px] space-y-[40px]'>
			{/* top */}
			<div className='flex xl:flex-row flex-col gap-[40px]'>
				<div className='sm:min-w-[520px] h-full max-mob:w-[100%]'>
					<ProfileHero />
				</div>
				<div className='w-full'>
					<ProfileStats />
				</div>
			</div>

			{/* bottom */}
			<div className='flex xl:flex-row flex-col gap-[40px]'>
				<div className='w-full'>
					<ProfileJourney />
				</div>
				<div className='max-w-[560px] w-full'>
					<ProfileHistory />
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
