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
import {
	ArrowUp,
	Calendar,
	ChartArea,
	ChevronDown,
	CircleArrowUp,
	CircleChevronUp,
	History,
} from "lucide-react";

const PurchaseHistory = () => {
	const formatDate = (
		date: string
	): { newDate: string; newDay: string; newYear: string } => {
		const [day, month, year] = date.split("-");
		const formattedDate = new Date(`20${year}-${month}-${day}`);

		const dateOptions: Intl.DateTimeFormatOptions = {
			month: "short",
			day: "2-digit",
		};

		const dayOptions: Intl.DateTimeFormatOptions = {
			weekday: "short",
		};

		const yearOptions: Intl.DateTimeFormatOptions = {
			year: "numeric",
		};

		const newDate = formattedDate.toLocaleDateString("en-US", dateOptions);
		const newDay = formattedDate.toLocaleDateString("en-US", dayOptions);
		const newYear = formattedDate.toLocaleDateString("en-US", yearOptions);

		return { newDate, newDay, newYear };
	};

	return (
		<div className='dc-container w-full max-sm:max-w-[calc(100vw-(20px+20px))] pb-6'>
			<div className='dc-header dc-px'>
				<div className='dc-icon-div'>
					<History className='dc-icon' />
					<p className='dc-title'>Purchase history</p>
				</div>
				<div className='h-[40px]'></div>
			</div>

			{/* sort */}
			<div className='dc-px flex overflow-x-scroll hide-scrollbar mt-3 gap-3'>
				<div className='filter-div'>
					<CircleChevronUp className='filter-icon' />
					<p className='filter-text'>Date</p>
					<ChevronDown className='filter-icon' />
				</div>
				<div className='filter-div'>
					<Calendar className='filter-icon' />
					<p className='filter-text whitespace-nowrap'>All time</p>
					<ChevronDown className='filter-icon' />
				</div>
			</div>

			{/* content 2 */}
			<div className='dc-px w-full'>
				<div className='rounded-[12px] relative overflow-x-scroll hide-scrollbar'>
					<div className='mt-6 flex px-4 w-full max-sm:w-[520px] pb-3 border-b border-b-white/10'>
						<div className='flex lg:gap-8 gap-6 justify-between w-full items-start'>
							<p className='w-[20px] table-index-text'>#</p>
							<p className='w-[100px] table-index-text'>date</p>
							<p className='w-[72px] table-index-text'>tokens</p>
							<p className='w-[80px] table-index-text'>amount</p>
							<p className='w-[40px] table-index-text'>savings</p>
						</div>
					</div>
					<div className='w-full'>
						{ProfileFillerData.map((data, index) => (
							<div
								key={data.img.blurDataURL}
								className='py-[20px] first:border-t-transparent border-t border-t-white/10 px-4 flex justify-between items-start w-full max-sm:w-[520px] h-[62px]'
							>
								<div className='flex lg:gap-8 gap-6 justify-between w-full items-start'>
									<p className='data-text opacity-30 w-[20px]'>
										0{ProfileFillerData.length - index}
									</p>
									<p className='w-[100px] data-text whitespace-nowrap'>
										{formatDate(data.date).newDate}, &nbsp;
										{formatDate(data.date).newYear}
									</p>
									<p className='w-[72px] data-text whitespace-nowrap'>
										{index + 2}{" "}
										<span className='ml-2 p-1 text-center border border-white/20 text-[10px] rounded-full'>
											Mt
										</span>
									</p>
									<p className='w-[80px] data-text'>2499/-</p>
									<div className=' flex items-center gap-2'>
										<p className='font-mona text-green-500 text-[16px]'>10%</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* pagination */}
				<div className='w-full mt-2'>
					<button
						className='dc-button w-full'
						onClick={() => {}}
					>
						<p className='dc-button-text'>Load more</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PurchaseHistory;
