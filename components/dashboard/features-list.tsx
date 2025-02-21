import { images } from "@/constants";
import { Features } from "@/constants/dashboard-index";
import Image from "next/image";
import React from "react";

const FeaturesList = () => {
	return (
		<div className='mx mt-60 '>
			<p className='font-branch text-white heading'>Features you can have</p>

			<div className='grid grid-cols-3 mt-20 gap-x-[40px] gap-y-[40px]'>
				{Features.map((feature, index) => (
					<div
						key={`img-${index}`}
						className='relative dc-container col-span-1 dc-px'
					>
						<div className='mt-10 relative w-full aspect-square'>
							{feature.img && (
								<Image
									src={feature.img}
									fill
									alt=''
									className='object-contain object-center rounded-[12px]'
								/>
							)}
						</div>

						<p className='mt-14 h-[88px] text-white text-[20px] font-mona tracking-wide font-light'>
							{feature.heading}
						</p>

						<p className='h-[92px] b-text text-white/40'>{feature.desc}</p>

						<div className='mt-8 relative z-10 flex flex-wrap gap-3'>
							{feature.attributes.map((item, index) => (
								<div
									key={item + index}
									className='dc-button bg-black'
								>
									<p className='dc-button-text'>{item}</p>
								</div>
							))}
						</div>

						<div className='absolute z-0 pointer-events-none bottom-0 right-0 dc-px '>
							<p className='text-[120px] text-white/[0.03] font-black'>
								0{index + 1}
							</p>
						</div>

						<div className='h-[40px]' />
					</div>
				))}
			</div>
		</div>
	);
};

export default FeaturesList;
