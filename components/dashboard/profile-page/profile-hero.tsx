"use client";
import React from "react";
import { Button } from "../../ui/button";
import { useLogout } from "@/mutations/login-feature/use-logout";
import Image from "next/image";
import { images } from "@/constants";

const ProfileHero = () => {


	return (
		<div className='flex flex-col justify-center items-center mt-8'>
			<div>
				<Image
					src={images.kshitij}
					alt=''
					className='object-cover object-center rounded-full h-[100px] w-[100px]'
				/>
			</div>

			<div className='flex flex-col justify-center items-center'>
				<p className='text-white font-branch subheading tracking-wider mt-8'>
					Kshitijkumar
				</p>
				<div className='flex justify-center items-center gap-2 mt-2'>
					<p className='text-white/40 b-text'>Path of growth</p>
					<p className='text-white/40 text-[4px]'>⚪</p>
					<p className='text-white/40 b-text'>12 sessions strong</p>
				</div>
			</div>

			<div className='mt-12'>
				<Button>
					<p className='text-white b-text px-5 py-3 border border-white/40 rounded-full'>
						Edit profile
					</p>
				</Button>
			</div>

			
		</div>
	);
};

export default ProfileHero;
