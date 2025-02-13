"use client";
import {
	ProfileDataFilters,
	ProfileFillerData,
	ProfilePersonalFilters,
} from "@/constants/dashboard-index";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants";

const ProfileFiller = () => {
	const [personalActiveFilter, setPersonalActiveFilter] =
		useState<ProfilePersonalFilter>("Your mantras");
	const [dataActiveFilter, setDataActiveFilter] = useState<ProfileDataFilters>(
		"Appointment history"
	);

	return (
		<div className='mt-20 '>
			{/* filter 1 */}
			<div className='h-full'>
				<div className='flex lg:gap-16 gap-4 px overflow-x-scroll sticky top-[84px] bg-black z-40 pt-2 pb-6'>
					{ProfilePersonalFilters.map((filter) => (
						<div
							key={filter}
							className='relative'
						>
							<button
								onClick={() => setPersonalActiveFilter(filter)}
								className={cn(
									"block",
									personalActiveFilter === filter && "cursor-default"
								)}
							>
								<p
									className={cn(
										"b-text whitespace-nowrap py-4 px-6",
										"transition-colors duration-200 ease-in ",
										personalActiveFilter === filter
											? "text-white "
											: "text-white/70 hover:text-white/50"
									)}
								>
									{filter}
								</p>
							</button>
							{personalActiveFilter === filter && (
								<motion.div
									layoutId='personal-bubble'
									className={cn(
										"absolute inset-0 z-0 border rounded-full border-white"
									)}
									transition={{
										duration: 0.3,
										easing: (t: number) =>
											t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
									}}
								/>
							)}
						</div>
					))}
				</div>
				{/* content 1 */}
				<div className=' mt-6'>
					<div className='px space-y-10'>
						{ProfileFillerData.map((data, index) => (
							<div
								key={index}
								className='border border-white/20 md:p-14 p-8 rounded-[24px]'
							>
								<div className='flex  flex-col md:flex-row justify-start items-start gap-10'>
									<div className='relative aspect-square md:w-60 w-full'>
										<Image
											src={data.img}
											alt=''
											fill
											className='object-cover object-center rounded-[12px]'
										/>
									</div>
									<div className=''>
										<p className='subheading text-white font-branch'>
											{data.desc}
										</p>
										<p className='mt-6 text-white/50 b-text max-w-[400px]'>
											{data.longDesc}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className=''></div>
				</div>
			</div>

			{/* filter 2 */}
			<div className='mt-40 flex lg:gap-16 gap-12 px overflow-x-scroll border-b border-b-white/20 sticky top-[84px] bg-black z-40'>
				{ProfileDataFilters.map((filter) => (
					<div
						key={filter}
						className='relative'
					>
						<button
							onClick={() => setDataActiveFilter(filter)}
							className={cn(
								"block",
								dataActiveFilter === filter && "cursor-default"
							)}
						>
							<p
								className={cn(
									"b-text whitespace-nowrap py-4",
									"transition-colors duration-200 ease-in ",
									dataActiveFilter === filter
										? "text-white"
										: "text-white/70 hover:text-white/50"
								)}
							>
								{filter}
							</p>
						</button>
						{dataActiveFilter === filter && (
							<motion.div
								layoutId='data-bubble'
								className={cn("absolute inset-0 z-0 border-b border-b-white")}
								transition={{
									duration: 0.3,
									easing: (t: number) =>
										t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
								}}
							/>
						)}
					</div>
				))}
			</div>

			{/* content 2 */}
			<div className='px space-y-10'>
				{ProfileFillerData.map((data, index) => (
					<div
						key={index}
						className='border border-white/20 md:p-14 p-8 rounded-[24px]'
					>
						<div className='flex  flex-col md:flex-row justify-start items-start gap-10'>
							<div className='relative aspect-square md:w-60 w-full'>
								<Image
									src={data.img}
									alt=''
									fill
									className='object-cover object-center rounded-[12px]'
								/>
							</div>
							<div className=''>
								<p className='subheading text-white font-branch'>{data.desc}</p>
								<p className='mt-6 text-white/50 b-text max-w-[400px]'>
									{data.longDesc}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProfileFiller;
