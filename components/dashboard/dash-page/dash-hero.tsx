"use client";
import { images } from "@/constants";
import Image from "next/image";
import { Models } from "node-appwrite";
import React from "react";

interface DashHeroPros {
	data: Models.User<Models.Preferences>;
}

const DashHero = ({ data }: DashHeroPros) => {
	const tokens = data.email;

	return (
		<div className=''>
			<div></div>
		</div>
	);
};

export default DashHero;
