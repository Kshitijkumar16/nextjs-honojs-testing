"use client";
import {
	ProfileDataFilters,
	ProfileFillerData,
	ProfilePersonalFilters,
} from "@/constants/dashboard-index";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ProfileJourney = () => {
	const [personalActiveFilter, setPersonalActiveFilter] =
		useState<ProfilePersonalFilter>("Your mantras");

	return (
		<div className=''>
			{/* <div className='flex items-center gap-3'>
				<Heart className='dc-icon' />
				<p className='whitespace-nowrap text-white font-branch text-[20px] tracking-wider'>
					The journey
				</p>
			</div>

			<div className='flex overflow-hidden overflow-x-scroll hide-scrollbar mt-6 gap-4'>
				{ProfilePersonalFilters.map((filter) => (
					<div
						key={filter}
						className={cn(
							"relative px-4 flex justify-center border rounded-full",
							personalActiveFilter === filter
								? "border-white/90"
								: "border-white/10"
						)}
					>
						<button
							onClick={() => setPersonalActiveFilter(filter)}
							className={cn(
								"block w-full",
								personalActiveFilter === filter && "cursor-default"
							)}
						>
							<p
								className={cn(
									"b-text text-center whitespace-nowrap py-3 px-5",
									"transition-colors duration-200 ease-in relative z-10",
									personalActiveFilter === filter
										? "text-white"
										: "text-white/50 hover:text-white/50"
								)}
							>
								{filter}
							</p>
						</button>
					</div>
				))}
			</div> */}
			{/* content 1 */}
			<div className='mt-6 h-[400px] dc-container'></div>
		</div>
	);
};

export default ProfileJourney;
