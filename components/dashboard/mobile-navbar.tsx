"use client";
import { icons, images } from "@/constants";
import {
	CREATEPAGE_URL,
	DASHBOARDPAGE_URL,
	PROFILEPAGE_URL,
} from "@/constants/dashboard-index";
import { cn } from "@/lib/utils";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNavbar = () => {
	const pathName = usePathname();

	return (
		<nav className='md:hidden relative flex justify-center w-screen pointer-events-none pb-[24px]'>
			<div
				style={{
					background:
						"linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,1) 100%)",
				}}
				className='absolute left-0 bottom-0 z-40 w-full h-[24svh] max-h-[240px]'
			/>
			<div className='relative z-50 pointer-events-auto flex justify-between items-center max-w-[400px] w-[90%] border border-white/20 rounded-full px-7 py-3.5 bg-black'>
				<div className='flex-1 flex justify-start'>
					<div className='h-[40px] w-[40px] flex justify-center items-center'>
						<Link href={DASHBOARDPAGE_URL}>
							<Image
								src={
									pathName === DASHBOARDPAGE_URL ? icons.homeFilled : icons.home
								}
								alt=''
								className={cn(
									pathName !== DASHBOARDPAGE_URL
										? "h-[36px] w-[36px]"
										: "h-[32px] w-[32px]"
								)}
							/>
						</Link>
					</div>
				</div>
				<div className='flex-1 flex justify-center items-center'>
					<div className='h-[40px] w-[40px] flex items-center justify-center'>
						<Link href={CREATEPAGE_URL}>
							<Image
								src={pathName !== CREATEPAGE_URL ? icons.add : icons.addFilled}
								alt=''
								className={cn(
									pathName !== CREATEPAGE_URL
										? "h-[28px] w-[28px]"
										: "h-[32px] w-[32px]"
								)}
							/>
						</Link>
					</div>
				</div>
				<div className='flex-1 flex justify-end'>
					<div className='flex justify-center items-center h-[40px] w-[40px]'>
						<Link href={PROFILEPAGE_URL}>
							<Image
								src={images.kshitij}
								alt=''
								className={cn(
									"rounded-full object-cover object-center border-2",
									pathName === PROFILEPAGE_URL
										? "border-white h-[28px] w-[28px]"
										: "border-transparent h-[28px] w-[28px]"
								)}
							/>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default MobileNavbar;
