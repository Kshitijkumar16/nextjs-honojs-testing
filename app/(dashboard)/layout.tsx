import MobileNavbar from "@/components/dashboard/mobile-navbar";
import { getCurrent } from "../actions";
import { redirect } from "next/navigation";
import DesktopNavbar from "@/components/dashboard/desktop-navbar";
import DashFooter from "@/components/dashboard/dash-footer";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const user = await getCurrent();

	if (!user) redirect("/");
	if (user.phoneVerification === false) redirect("/onboarding");

	return (
		<div className=''>
			<main>
				<div className='relative z-0'>
					<div className='fixed z-50 w-full top-0 left-0'>
						<DesktopNavbar data={user} />
					</div>
					<div className='h-[98px] pointer-events-none'></div>
					{children}
				</div>
				<div className='fixed z-10 -bottom-[2px] left-1/2 -translate-x-1/2'>
					<MobileNavbar />
				</div>
				<div className='md:hidden h-[112px]' />
			</main>
		</div>
	);
};

export default DashboardLayout;
