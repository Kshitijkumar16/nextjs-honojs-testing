"use client";

import Image from "next/image";
import { icons, images } from "@/constants";
import { User } from "lucide-react";

const ProfileHero = () => {
	return (
		<div className='dc-container'>
			<div className='dc-header'>
				<div className='dc-icon-div'>
					<User className='dc-icon' />
					<p className='dc-title'>Profile info</p>
				</div>
				<div>
					<button className='dc-button'>
						<p className='dc-button-text'>Edit profile</p>
					</button>
				</div>
			</div>

			{/* name & photo */}
			<div className='dc-content-div '>
				<div className='mt-9 flex sm:flex-row flex-col sm:items-center gap-5'>
					<div className='flex justify-between items-start'>
						<Image
							src={images.kshitij}
							alt=''
							className='object-cover object-center rounded-full h-[60px] w-[60px]'
						/>
					</div>

					<div className=''>
						<div className='flex items-center gap-1'>
							<p className='whitespace-nowrap text-white font-branch text-[20px] tracking-wider'>
								Kshitijkumar Pantawane
							</p>
							<Image
								src={icons.blueTick}
								alt=''
								className=''
							/>
						</div>
						<div className='mt-1'>
							<p className='text-white/50 b-text'>kshitijkumar1610@gmail.com</p>
						</div>
					</div>
				</div>

				<div className='mt-10 flex justify-between'>
					<p className='b-text xl:max-w-[520px] text-white/50 leading-relaxed'>
						A 23 year old, male, leveling up as a software developer, living
						in Nagpur. I work with Dr. Example to become a more empathatic &
						better version of myself.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileHero;
