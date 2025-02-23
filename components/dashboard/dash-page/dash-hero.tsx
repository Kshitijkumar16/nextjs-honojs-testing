"use client";
import Marquee from "@/components/ui/text-marquee";
import { images } from "@/constants";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Models } from "node-appwrite";
import React from "react";

interface DashHeroPros {
	data: Models.User<Models.Preferences>;
}

const DashHero = ({ data }: DashHeroPros) => {
	return (
		<div className='relative min-h-[90svh] sm:pt-[20px] pt-[12px]'>
			<div className='px mt-8'>
				<div className='flex justify-center max-sm:mt-12'>
					<div className='rounded-[12px] overflow-hidden relative z-10'>
						<Image
							src={images.dashboardGroup}
							alt=''
							className='h-[280px] w-[200px] object-cover object-center  '
						/>
						<div
							style={{
								background:
									"linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.9) 100%)",
							}}
							className='absolute inset-0 h-full w-full'
						/>
					</div>
				</div>

				<div className='flex flex-col items-center sm:mt-16 mt-12'>
					<div className='flex items-center gap-3'>
						<div className='bg-yellow-500 h-2.5 w-2.5 rounded-full animate-pulse' />
						<p className='text-white/30 b-text'>Upcoming appointment</p>
					</div>
					<p className='mt-2 sm:text-[44px] text-[36px] text-center text-white font-branch'>
						6th Feb, Wednesday
						<br />
						4.30 pm
					</p>
				</div>

				<div className='flex justify-center mt-6'>
					<button className='dc-button group'>
						<p className='dc-button-text'>See appointment details</p>
					</button>
				</div>
			</div>

			{/*  */}
			<div className='flex items-end justify-between px max-sm:mt-20 mt-4'>
				<p className='text-white/30 b-text'>
					Your current mantra <ChevronDown className='inline stroke-1' />{" "}
				</p>
				<div className='hidden sm:flex flex-col justify-end items-end'>
					<p className='b-text max-w-[320px] text-right text-white/30'>
						Last week's learning.
					</p>
					<p className='b-text max-w-[320px] text-right text-white/30'>
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						itaque."
					</p>
				</div>
			</div>
			<div className='overflow-hidden mt-3'>
				<Marquee
					speed={0.02}
					startTrigger={0}
					endTrigger={1000}
				>
					<p className='heading text-white/20 font-branch whitespace-nowrap'>
						Little progress is still progress &nbsp; Little progress is still
						Little progress is still progress &nbsp;
					</p>
				</Marquee>
			</div>
		</div>
	);
};

export default DashHero;
