"use client";
import { images } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import FlipButton from "../ui/flip-button";
import DesktopBackground from "./desktop-background";
import InstructionAnimation from "./instruction-animation";
import { useState } from "react";
import { Loader } from "lucide-react";

const Greeting = () => {
	const [processing, setProcessing] = useState(false);

	return (
		<div className='relative h-screen w-screen flex justify-center items-center overflow-clip'>
			{/* content */}
			<div className='xl:max-h-[480px] max-h-[520px] h-full z-10 justify-between flex flex-col items-center px pointer-events-none'>
				<div className='flex flex-col justify-center items-center'>
					<p className='xl:mt-6 heading font-branch text-white text-center'>
						Modern
						<br className='lg:hidden' /> Therapist
					</p>
				</div>

				<div className='flex justify-center'>
					<div className='flex flex-col'>
						<InstructionAnimation />
					</div>
				</div>

				<div className='pointer-events-auto flex flex-col justify-center items-center lg:mt-4'>
					<div className=''>
						<Link
							href={"/login"}
							onClick={() => setProcessing(true)}
						>
							<FlipButton
								title={processing ? "Redirecting..." : "Yes! Let's begin"}
								divClasses='bg-white rounded-full shadow-whiteGlow'
								textClasses='subheading font-branch text-black lg:px-14 px-10 py-3'
							/>
						</Link>
					</div>
					<p className='b-text mt-6 text-white'>your new bestie :)</p>
				</div>
			</div>

			{/* absolute background - mobile */}
			<div className='absolute md:hidden inset-0 h-full w-full z-0  opacity-50'>
				<div className='h-1/2 flex w-full'>
					<div className='h-full flex-1'>
						<div className='relative w-[25dvw] aspect-[1.2/2] translate-y-[15svh] -translate-x-[30%]'>
							<Image
								src={images.mg2}
								alt=''
								fill
								className='object-cover object-center'
							/>
						</div>
					</div>
					<div className='h-full flex-1 flex flex-col justify-between items-start'>
						<div className='relative aspect-[1.3/2] h-[22svh] -translate-y-[4svh]'>
							<Image
								src={images.mg1}
								alt=''
								fill
								className='object-cover object-center'
							/>
						</div>
						<div className='relative aspect-[1.8/2] h-[38%] translate-x-[55%] -translate-y-[4%]'>
							<Image
								src={images.mg3}
								alt=''
								fill
								className='object-cover object-center opacity-90'
							/>
						</div>
					</div>
				</div>
				<div className='h-1/2 flex w-full'>
					<div className='flex-1 flex flex-col justify-between items-start'>
						<div className='relative aspect-[1.8/2] h-[40%] -translate-x-[14%] translate-y-[30%]'>
							<Image
								src={images.mg4}
								alt=''
								fill
								className='object-cover object-center'
							/>
						</div>
						<div className='relative aspect-[1.3/2] h-[44%] translate-x-[100%] translate-y-[60%]'>
							<Image
								src={images.mg6}
								alt=''
								fill
								className='object-cover object-center'
							/>
						</div>
					</div>
					<div className='flex-1 flex items-center'>
						<div className='relative aspect-[1.6/2] h-[40%] translate-x-[75%] translate-y-[4%]'>
							<Image
								src={images.mg5}
								alt=''
								fill
								className='object-cover object-center'
							/>
						</div>
					</div>
				</div>
			</div>

			{/* absolute background - desktop */}

			<DesktopBackground />
		</div>
	);
};

export default Greeting;
