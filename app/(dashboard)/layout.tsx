import MobileNavbar from "@/components/dashboard/mobile-navbar";
import { getCurrent } from "../actions";
import { redirect } from "next/navigation";
import DesktopNavbar from "@/components/dashboard/desktop-navbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const user = await getCurrent();

	if (!user) redirect("/");
	if (user.phoneVerification === false) redirect("/onboarding");

	return (
		<div className=''>
			<main className='relative z-0'>
				<DesktopNavbar data={user} />
				{children}
			</main>
			<div className='fixed z-10 bottom-0 left-1/2 -translate-x-1/2'>
				<MobileNavbar />
			</div>
		</div>
	);
};

export default DashboardLayout;
