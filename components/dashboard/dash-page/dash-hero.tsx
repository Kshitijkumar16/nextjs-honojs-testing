import { images } from "@/constants";
import Image from "next/image";
import React from "react";

const DashHero = () => {
	return (
		<div className='px'>
			<div className='relative aspect-square rounded-[24px] border border-white p-5 overflow-hidden'>
				<div className='absolute z-0 top-0 left-0 h-full w-full'>
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
