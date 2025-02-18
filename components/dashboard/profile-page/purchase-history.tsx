"use client";
import { History } from "lucide-react";

const PurchaseHistory = () => {
	return (
		<div className='dc-container w-full'>
			<div className='dc-header'>
				<div className='dc-icon-div'>
					<History className='dc-icon' />
					<p className='dc-title'>Purchase history</p>
				</div>
				<div className='h-[40px]'></div>
			</div>

			{/* content 2 */}
			<div className='h-[400px] mt-6 rounded-[12px]'></div>
		</div>
	);
};

export default PurchaseHistory;
