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
import { ChartArea, History } from "lucide-react";

const ProfileHistory = () => {
	const [dataActiveFilter, setDataActiveFilter] =
		useState<ProfileDataFilters>("Appointments");

	return (
		<div className='dc-container'>
			<div className='dc-header'>
				<div className='dc-icon-div'>
					<History className='dc-icon' />
					<p className='dc-title'>History</p>
				</div>
				<div className='h-[40px]'></div>
			</div>

			{/* filter */}
			<div className='mt-6'>
				<div className='flex gap-4'>
					{ProfileDataFilters.map((filter) => (
						<div
							key={filter}
							className={cn(
								"relative w-full flex justify-center border rounded-full",
								dataActiveFilter === filter ? "border-white/90" : "border-white/10"
							)}
						>
							<button
								onClick={() => setDataActiveFilter(filter)}
								className={cn(
									"block w-full",
									dataActiveFilter === filter && "cursor-default"
								)}
							>
								<p
									className={cn(
										"b-text text-center whitespace-nowrap py-3 px-5",
										"transition-colors duration-200 ease-in relative z-10",
										dataActiveFilter === filter
											? "text-white"
											: "text-white/50 hover:text-white/50"
									)}
								>
									{filter}
								</p>
							</button>
							{/* {dataActiveFilter === filter && (
								<motion.div
									layoutId='data-bubble'
									className={cn("absolute inset-0 z-0 bg-black rounded-full")}
									transition={{
										duration: 0.3,
										easing: (t: number) =>
											t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
									}}
								/>
							)} */}
						</div>
					))}
				</div>
			</div>

			{/* content 2 */}
			<div className='h-[400px] mt-6 rounded-[12px]'></div>
		</div>
	);
};

export default ProfileHistory;
