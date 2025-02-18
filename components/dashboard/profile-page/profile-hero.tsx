"use client";

import Image from "next/image";
import { icons, images } from "@/constants";
import { ChartArea, ChevronDown, User } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const ProfileHero = () => {
	const [showMobile, setShowMobile] = useState<boolean>(false);

	return (
		<div className='h-full overflow-y-scroll lg:pb-9 pb-6'>
			{/* name & photo */}
			<div className='flex flex-col justify-center items-center'>
				<div className='mt-[64px] flex justify-between items-start'>
					<Image
						src={images.kshitij}
						alt=''
						className='object-cover object-center rounded-full h-[200px] w-[200px] border-2 border-white'
					/>
				</div>
				<div>
					<div className='flex items-center mt-[24px]'>
						<p className='whitespace-nowrap text-white font-branch text-[20px] tracking-wider'>
							Kshitijkumar Pantawane
						</p>
						<Image
							src={icons.blueTick}
							alt=''
							className=''
						/>
					</div>
					<div className='flex justify-center'>
						<p className='text-white/40 b-text'>kshitijkumar1610@gmail.com</p>
					</div>
				</div>

				<div className='mt-[44px] flex justify-center'>
					<p className='b-text xl:max-w-[322px] text-center text-white/50 leading-relaxed'>
						A 23 year old, male, levelling up as a software developer, living in
						Nagpur. I work with Dr. Example to become a more empathetic & better
						version of myself.
					</p>
				</div>
				<button className='dc-button mt-[40px]'>
					<p className='b-text text-white'>Edit profile</p>
				</button>
			</div>

			<div className='mt-[64px]'>
				{/* mob */}
				<button
					onClick={() => {
						setShowMobile((prev) => (prev = !prev));
					}}
					className={cn(
						"lg:hidden",
						"flex w-full justify-between items-center",
						"border border-white/20 h-[52px] px-4 rounded-[12px]"
					)}
				>
					<div className='flex gap-3'>
						<ChartArea className='dc-icon' />
						<p className='dc-title'>Stats & overview</p>
					</div>
					<div className='flex justify-center items-center'>
						<ChevronDown
							className={cn(
								"dc-icon text-white",
								"transition-all duration-300 ease-in-out",
								showMobile && "rotate-180"
							)}
						/>
					</div>
				</button>

				{/* lg */}
				<div
					className={cn(
						"hidden lg:flex",
						"w-full justify-between items-center rounded-[12px]"
					)}
				>
					<div className='flex gap-3'>
						<ChartArea className='dc-icon' />
						<p className='dc-title'>Stats & overview</p>
					</div>
				</div>

				<div className='hidden lg:flex flex-col'>
					<div className='flex justify-between gap-4 mt-[16px]'>
						<div className='flex-1 sub-container aspect-[5/3]'></div>
						<div className='flex-1 sub-container aspect-[5/3]'></div>
					</div>
					<div className='flex justify-between gap-4 mt-[16px]'>
						<div className='flex-1 sub-container aspect-[5/3]'></div>
						<div className='flex-1 sub-container aspect-[5/3]'></div>
					</div>
					<div className='flex justify-between gap-4 mt-[16px]'>
						<div className='flex-1 sub-container aspect-[5/3]'></div>
					</div>
				</div>

				{/* mobile */}
				<AnimatePresence>
					{showMobile && (
						<motion.div
							initial={{ height: 0 }}
							animate={{ height: "auto" }}
							exit={{ height: 0 }}
							className='lg:hidden flex flex-col'
						>
							<div className='flex justify-between gap-4 mt-[16px]'>
								<div className='flex-1 sub-container aspect-[5/3]'></div>
								<div className='flex-1 sub-container aspect-[5/3]'></div>
							</div>
							<div className='flex justify-between gap-4 mt-[16px]'>
								<div className='flex-1 sub-container aspect-[5/3]'></div>
								<div className='flex-1 sub-container aspect-[5/3]'></div>
							</div>
							<div className='flex justify-between gap-4 mt-[16px]'>
								<div className='flex-1 sub-container aspect-[5/3]'></div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ProfileHero;
