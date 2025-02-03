import Profile from "@/components/profile";
import { getCurrent } from "../api/actions";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/");

	return (
		<div className='bg-black flex flex-col justify-center items-center h-screen gap-10'>
			<p className='text-white/40 text-center text-2xl'>Dashboard page</p>
			<p className='text-white text-center text-4xl'>
				Only visible to logged in users
			</p>

			<Profile />
		</div>
	);
};

export default DashboardPage;
