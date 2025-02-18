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

const AppointmentsHistory = () => {
	return (
		<div className='dc-container w-full'>
			<div className='dc-header'>
				<div className='dc-icon-div'>
					<History className='dc-icon' />
					<p className='dc-title'>Appointments history</p>
				</div>
				<div className='h-[40px]'></div>
			</div>

			{/* content 2 */}
			<div className='h-[400px] mt-6 rounded-[12px]'></div>
		</div>
	);
};

export default AppointmentsHistory;
