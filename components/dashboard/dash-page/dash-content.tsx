"use client";
import { DashboardTabs } from "@/constants/dashboard-index";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Amphora, Heart, StretchVertical } from "lucide-react";

declare type DashActiveTab = "mantra" | "appointments" | "learnings";

const DashContent = () => {
	const [activeTab, setActiveTab] = useState<DashActiveTab>("mantra");

	return (
		<div className='relative z-0 overflow-hidden flex flex-col justify-between h-full space-y-[32px]'>
			<div className='sub-container h-full'>
				<div className='flex justify-between items-center'>
					<div></div>

					<div className='dc-button'>
						<p className='dc-button-text'>12 Feb, 13:00:02</p>
					</div>
				</div>
			</div>

			<div className='sub-container h-[300px]'></div>
			{/* filter */}
			{/* <div className='flex gap-[12px] overflow-x-scroll hide-scrollbar px mb-[40px]'>
				{DashboardTabs.map((tab) => (
					<div
						key={tab.value}
						className=''
					>
						<button onClick={() => setActiveTab(tab.value)}>
							<motion.p
								animate={{
									borderColor:
										activeTab === tab.value
											? "rgba(255,255,255,1)"
											: "rgba(255,255,255,0.2)",
								}}
								transition={{ duration: 0.3, ease: "easeInOut" }}
								className={cn(
									"text-white font-branch text-[24px] border py-3 px-6 rounded-full"
								)}
							>
								{tab.title}
							</motion.p>
						</button>
					</div>
				))}
			</div> */}

			{/* content */}
			{/* <AnimatePresence>
				{activeTab === "mantra" && (
					<div className='flex flex-col justify-center items-center'>
						<p className='px dash-hero-heading text-white text-center'>
							Little progress is still progress
						</p>
						<p className='b-text text-center text-white max-w-[314px] mt-[28px] pb-[160px]'>
							Little progress is still progress. No matter how small, you are on
							the right path as long as you are moving.
						</p>
					</div>
				)}
			</AnimatePresence> */}
		</div>
	);
};

export default DashContent;
