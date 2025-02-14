import { ChartArea } from "lucide-react";
import React from "react";
import ChartComponent from "./chart";

const ProfileStats = () => {
	return (
		<div className=''>
			<div className='dc-container'>
				<div className='dc-header'>
					<div className='dc-icon-div'>
						<ChartArea className='dc-icon' />
						<p className='dc-title'>Stats</p>
					</div>
					<div className='h-[40px]'></div>
				</div>

				<div className='dc-content-div grid lg:grid-cols-3 grid-cols-2 gap-4'>
					<div className='space-y-4'>
						<div className='sub-container col-span-1 w-full h-[calc(50%-8px)]'>
							<p className='text-white/50 b-text'>Last visit</p>
						</div>
						<div className='sub-container flex gap-2 col-span-1 w-full h-[calc(50%-8px)]'>
							<p className='text-white/50 b-text'>Your tokens</p>
						</div>
					</div>
					<div className='sub-container col-span-1 w-full h-[186px]'>
						<p className='b-text text-white/50'>Course progress</p>
					</div>

					<div className='sub-container flex flex-col justify-between sm:col-span-1 col-span-2 w-full'>
						<p className='b-text text-white/50'>Quick links</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileStats;
