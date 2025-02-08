"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { images } from "@/constants";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import {
	ArrowLeft,
	ArrowRight,
	Instagram,
	Linkedin,
	LinkedinIcon,
	Twitter,
	X,
	Youtube,
	YoutubeIcon,
} from "lucide-react";
import Marquee from "../ui/text-marquee";

const SignUpForm = () => {
	const carousalArray = [images.mg1, images.mg8, images.mg5];

	return (
		<div className='flex justify-between min-h-screen lg:gap-14'>
			<div className='max-w-[640px] lg:flex hidden w-[40%] py lg:pl max-lg:px'>
				<div className='relative h-full w-full'>
					<div className='absolute z-0 h-full w-full top-0 left-0 border border-white/20 rounded-[24px] overflow-hidden'>
						<Image
							src={images.mg3}
							alt=''
							fill
							className='object-cover object-top'
						/>
						<div className='absolute h-full w-full inset-0 bg-gradient-to-b from-black/30 via-black/80 to-black' />
					</div>
					<div className='relative z-10 flex flex-col justify-between h-full overflow-hidden pb-10 px-8'>
						<div className='h-full flex flex-col justify-start items-start'>
							<div className='overflow-hidden'>
								<Marquee
									speed={0.08}
									startTrigger={1}
									endTrigger={2}
								>
									<p className='text-white/50 whitespace-nowrap text-[calc(8px+6dvw)] font-branch'>
										&nbsp;Modern Therapist
									</p>
								</Marquee>
							</div>
						</div>

						<div className='pt-4 border-t border-t-white/30 flex justify-between items-center'>
							<p className='text-[24px] font-mona font-light text-white/50'>
								Word on the street(s)
							</p>
							<div className='flex gap-4'>
								<div className='group aspect-square border border-white/30 hover:border-white p-1 rounded-full'>
									<ArrowLeft className='text-white/50 stroke-1 group-hover:text-white' />
								</div>
								<div className='group aspect-square border border-white/30 hover:border-white p-1 rounded-full'>
									<ArrowRight className='text-white/50 stroke-1 group-hover:text-white' />
								</div>
							</div>
						</div>
						{/* testimonials */}
						<Carousel
							plugins={[Autoplay({ delay: 3000 })]}
							className='w-full pt-14'
						>
							<CarouselContent>
								{carousalArray.map((img) => (
									<CarouselItem
										key={img.blurDataURL}
										className='w-full'
									>
										<div className='flex flex-col w-full '>
											<div className='flex justify-between items-start '>
												<Image
													src={img}
													alt=''
													className=' aspect-square h-[100px] w-[100px] object-cover object-top border border-white/50 rounded-[12px]'
												/>
											</div>
											<div className='mt-4'>
												<p className='text-white b-text'>Neha Mehra</p>
												<p className='text-white/40 b-text'>
													MSc student, IIT Roorkee
												</p>
											</div>

											<div className='mt-6'>
												<p className='b-text max-w-[500px] text-white'>
													"Dr. has always helped me keep my life and
													extra-curriculars sorted so i can fully focus my
													energies on studies and career."
												</p>
											</div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</div>
				</div>
			</div>
			<div className='lg:w-[60%] w-[100%] lg:pr max-lg:px py overflo'>
				<div className='h-full w-full'></div>
			</div>
		</div>
	);
};

export default SignUpForm;
