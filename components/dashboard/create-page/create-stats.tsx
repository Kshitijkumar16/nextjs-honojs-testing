import { icons, images } from "@/constants";
import Image from "next/image";
import React from "react";

const CreateStats = () => {
	return (
		<div className=' flex flex-col sm:space-y-16 space-y-10'>
			<div className='flex max-sm:flex-wrap px gap-6 max-sm:gap-5'>
				<div className='sub-container w-full flex flex-col justify-between max-sm:max-w-[178px] max-sm:h-[140px] h-[160px]'>
					<p className='b-text text-white/40'>Learnings</p>
					<p className='heading text-white font-branch'>09</p>
				</div>
				<div className='sub-container w-full flex flex-col justify-between max-sm:max-w-[178px] max-sm:h-[140px] h-[160px]'>
					<p className='b-text text-white/40'>Mantra's</p>
					<p className='heading text-white font-branch'>04</p>
				</div>
				<div className='sub-container w-full flex flex-col justify-between max-sm:max-w-[178px] max-sm:h-[140px] h-[160px]'>
					<p className='b-text text-white/40'>Memories</p>
					<p className='heading text-white font-branch'>20</p>
				</div>
				<div className='sub-container w-full flex flex-col justify-between max-sm:max-w-[178px] max-sm:h-[140px] h-[160px]'>
					<p className='b-text text-white/40'>Sessions</p>
					<p className='heading text-white font-branch'>43</p>
				</div>
			</div>

			<div className='sm:h-[60svh] h-[30svh] flex justify-between gap-10 lg:flex-row flex-col mx'>
				<div className='p-10 dc-container flex justify-between w-full'>
					<p className='b-text text-white'>Add a new learning</p>
					<Image
						src={icons.add}
						alt=''
						className='size-[32px]'
					/>
				</div>

				<div className='p-10 dc-container w-full flex justify-between'>
					<p className='b-text text-white'>Create a new memory</p>
					<Image
						src={icons.add}
						alt=''
						className='size-[32px]'
					/>
				</div>
			</div>
		</div>
	);
};

export default CreateStats;
