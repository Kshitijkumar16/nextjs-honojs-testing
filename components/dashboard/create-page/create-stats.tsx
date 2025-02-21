import { icons, images } from "@/constants";
import Image from "next/image";
import React from "react";

const CreateStats = () => {
	return (
		<div className='mt-4 flex flex-col sm:space-y-16 space-y-10'>
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
