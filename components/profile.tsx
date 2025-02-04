"use client";
import React from "react";
import { Button } from "./ui/button";
import { useLogout } from "@/app/mutations/use-logout";

const Profile = () => {
	const { mutate } = useLogout();

	const handleLogOut = () => {
		mutate();
	};

	return (
		<div className=''>
			<Button
				onClick={() => handleLogOut()}
				className='border-white text-white font-bold text-[24px] px-4 py-2'
			>
				Logout
			</Button>
		</div>
	);
};

export default Profile;
