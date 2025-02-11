"use client";
import { DashboardTabs } from "@/constants/dashboard-index";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

declare type DashActiveTab = "mantra" | "appointments" | "learnings";

const DashContent = () => {
	const [activeTab, setActiveTab] = useState<DashActiveTab>("mantra");

	return (
		<div className='mt-[40px] relative z-0 overflow-hidden'>
			{/* filter */}
			<div className='flex gap-[12px] overflow-x-scroll scrollbar-hide px mb-[40px]'>
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
			</div>

			{/* content */}
			<AnimatePresence>
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
			</AnimatePresence>
		</div>
	);
};

export default DashContent;
