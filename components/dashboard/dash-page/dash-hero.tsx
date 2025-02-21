"use client";
import { images } from "@/constants";
import Image from "next/image";
import { Models } from "node-appwrite";
import React from "react";

interface DashHeroPros {
	data: Models.User<Models.Preferences>;
}

const DashHero = ({ data }: DashHeroPros) => {
	const tokens = data.email;

	return (
		<div className=''>
			<div className='w-full relative aspect-square '>
				<div className='absolute rounded-[12px] overflow-hidden z-0 top-0 left-0 h-full w-full'>
					<Image
						src={images.dashHero}
						alt=''
						className='object-cover object-center'
					/>
				</div>
				<div
					style={{
						background:
							"linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,1) 100%)",
					}}
					className='absolute z-10 h-full w-full top-0 left-0'
				/>

				{/* content */}
				<div className='z-20 relative h-full w-full flex flex-col items-end justify-start'>
					<div className=''>
						<button></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashHero;
