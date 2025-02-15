"use client";
import { useCleanAuth } from "@/mutations/auth-feature/use-clean-auth";
import React from "react";

const DashFooter = () => {
	const { mutate } = useCleanAuth();

	const cleanAuth = () => {
		mutate();
	};
	return (
		<div className='border-t border-t-white/20 mx mt-[40px]'>
			<div className='flex'>
				<div className='b-text text-white'>Modern Therapist</div>

				<button
					onClick={() => {
						cleanAuth();
					}}
					className='block'
				>
					<p className='text-white b-text'>Clean Auth</p>
				</button>
			</div>
		</div>
	);
};

export default DashFooter;
