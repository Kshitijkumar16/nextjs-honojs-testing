import { images } from "@/constants";
import { ProfileFeatures } from "@/constants/dashboard-index";
import Image from "next/image";
import React from "react";

const ProfileFeaturesComponent = () => {
	return (
		<div className=''>
			<p className='text-white text-center font-branch heading'>
				Features you can have here
			</p>

			<div className='mt-24 grid gap-x-[32px] gap-y-[32px] grid-cols-3'>
				{ProfileFeatures.map((feature, index) => (
					<div
						key={index}
						className='py-10 col-span-1 dc-container dc-px'
					>
						<div className='relative  w-full aspect-square'>
							<Image
								src={feature.img}
								alt=''
								fill
								className='object-cover object-center rounded-[12px]'
							/>
						</div>
						<p className='mt-10 text-[20px] tracking-wide text-white font-mona font-light'>
							{feature.heading}
						</p>
						<p className='max-w-[600px] mt-6 b-text text-white/40'>
							{feature.desc}
						</p>

						<div className='flex flex-wrap mt-10 gap-2'>
							{feature.attributes.map((title, index) => (
								<div
									key={index}
									className='dc-button'
								>
									<p className='dc-button-text whitespace-nowrap'>{title}</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProfileFeaturesComponent;
