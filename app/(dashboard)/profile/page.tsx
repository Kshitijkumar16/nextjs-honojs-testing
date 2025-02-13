import { getCurrent } from "@/app/actions";
import ProfileFiller from "@/components/dashboard/profile-page/profile-filler";
import ProfileHero from "@/components/dashboard/profile-page/profile-hero";
import { images } from "@/constants";
import Image from "next/image";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/");
	if (user.phoneVerification === false) redirect("/onboarding");

	return (
		<div className='min-h-screen'>
			<ProfileHero />
			<ProfileFiller />
		</div>
	);
};

export default ProfilePage;
