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
import { images } from "@/constants";

const ProfileJourney = () => {
	const [personalActiveFilter, setPersonalActiveFilter] =
		useState<ProfilePersonalFilter>("Your mantras");

	return (
		<div className='dc-container pb-8'>
			<div className='dc-header dc-px'>
				<div className='dc-icon-div'>
					<Heart className='dc-icon' />
					<p className='dc-title'>The journey</p>
				</div>
				<div className='h-[40px]'></div>
			</div>

			<div className='flex dc-px mt-6 gap-8'>
				<div className='w-full aspect-[16/9] '></div>
				<div className='w-full aspect-[16/9] '></div>
			</div>

			<div className='dc-header dc-px mt-10'>
				<div className='dc-icon-div'>
					<p className='dc-title'>Your memories</p>
				</div>
				<div className='h-[40px]'>
					<button className='dc-button'>
						<p className='dc-button-text'>See all</p>
					</button>
				</div>
			</div>

			<div className='flex max-sm:flex-wrap lg:gap-8 gap-5 dc-px mt-6'>
				<div className='sub-container relative w-full max-sm:max-w-[160px] h-[160px]'></div>
				<div className='sub-container relative w-full max-sm:max-w-[160px] h-[160px]'></div>
				<div className='sub-container relative w-full max-sm:max-w-[160px] h-[160px]'></div>
				<div className='sub-container relative w-full max-sm:max-w-[160px] h-[160px]'></div>
			</div>
		</div>
	);
};

export default ProfileJourney;
