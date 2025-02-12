"use client";

// global imports
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

// local imports
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Checkbox } from "../ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Button } from "@/components/ui/button";

import FlipButton from "../ui/flip-button";
import Marquee from "../ui/text-marquee";

import { cn } from "@/lib/utils";
import { carousalArray, icons, images, SIGNUPPAGE_URL } from "@/constants";

import { loginFormSchema } from "@/validators/auth-schemas";
import { useLogin } from "@/mutations/auth-feature/use-login";

const LoginForm = () => {
	const [processing, setProcessing] = useState(false);

	const loginForm = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
			keepSignedIn: false,
		},
	});

	const { mutate: callLoginAPI } = useLogin();

	const handleSubmit = async (values: z.infer<typeof loginFormSchema>) => {
		setProcessing(true);
		console.log(values);
		callLoginAPI({ json: values });
		setProcessing(false);
	};

	return (
		<div className='flex lg:gap-[40px]'>
			{/* left side */}
			<div className='max-w-[640px] max-xl:hidden w-[37%] py xl:pl max-xl:px h-[100svh] sticky top-0'>
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
							<div className=''>
								<Marquee
									speed={0.08}
									movement='-=100px'
									startTrigger={0}
									endTrigger={1500}
								>
									<p className='text-white/50 whitespace-nowrap text-[calc(8px+4dvw)] font-branch'>
										&nbsp;Modern Therapist
									</p>
								</Marquee>
							</div>
						</div>

						<div className='pt-4 flex justify-between items-center'>
							<p className='text-[20px] font-mona font-light text-white/50'>
								Word on the street(s)
							</p>
							<div className='flex gap-4'>
								<div className='group aspect-square border border-white/30 hover:border-white p-1 rounded-full'>
									<ArrowLeft className='text-white/50 stroke-1 group-hover:text-white size-[22]' />
								</div>
								<div className='group aspect-square border border-white/30 hover:border-white p-1 rounded-full'>
									<ArrowRight className='text-white/50 stroke-1 group-hover:text-white size-[22]' />
								</div>
							</div>
						</div>
						{/* testimonials */}
						<Carousel
							plugins={[Autoplay({ delay: 3000 })]}
							className='w-full pt-12'
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
													className=' aspect-square h-[80px] w-[80px] object-cover object-top border border-white/40 rounded-[12px]'
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

			{/* form side */}
			<div className='w-[100%] xl:pr max-xl:px py '>
				<div className='h-full w-full md:border md:border-white/20 rounded-[24px] flex flex-col justify-center items-center py-10'>
					<div className='min-w-[320px]'>
						<div className='flex justify-center items-center flex-col'>
							<p className='text-white subheading font-branch'>Log in</p>
							<div className='flex'>
								<p className='b-text text-white/40 mt-2'>
									Don't have an account?&nbsp;
								</p>
								<Link href={SIGNUPPAGE_URL}>
									<p className='b-text underline decoration-white/20 text-white/40 mt-2 underline-offset-4'>
										Create a new one
									</p>
								</Link>
							</div>
						</div>

						<div className='flex md:flex-row flex-col gap-6 mt-16'>
							<div
								className='border border-white/20 flex items-center md:px-14
								 py-3.5 rounded-full gap-4 justify-center'
							>
								<Image
									src={icons.google}
									alt=''
									className='h-[20px] w-[20px] '
								/>
								<p className='text-white b-text'>Google</p>
							</div>
							<div
								className='border border-white/20 flex items-center md:px-14
								 py-3.5 rounded-full gap-4 justify-center'
							>
								<Image
									src={icons.github}
									alt=''
									className='h-[20px] w-[20px] '
								/>
								<p className='text-white b-text'>Github</p>
							</div>
						</div>

						<div className='my-10 flex items-center gap-6'>
							<div className='h-[1px] bg-white/20 w-full' />
							<div className=''>
								<p className='text-white b-text'>Or</p>
							</div>
							<div className='h-[1px] bg-white/20 w-full' />
						</div>
						<Form {...loginForm}>
							<form>
								<div className=''>
									<FormField
										control={loginForm.control}
										name='email'
										render={({ field }) => (
											<FormControl
												id='firstName'
												className='w-full'
											>
												<FormItem>
													<Label className='label text-white/50'>
														<p>Email</p>
													</Label>
													<div className='h-[1px]'></div>
													<Input
														onChange={field.onChange}
														placeholder='jonsnow@nightswatch.com'
														type='email'
														className={cn("form-input pl-6 pr-3 mt-2.5")}
													/>
													<FormMessage className='font-mona font-light text-[16px] pt-1 text-red-500' />
												</FormItem>
											</FormControl>
										)}
									/>

									<FormField
										control={loginForm.control}
										name='password'
										render={({ field }) => (
											<FormControl
												id='firstName'
												className='w-full mt-6'
											>
												<FormItem>
													<Label className='label text-white/50'>
														<p>Password</p>
													</Label>
													<div className='h-[1px]'></div>
													<Input
														onChange={field.onChange}
														placeholder='Enter your password'
														type={"text"}
														className={cn("form-input pl-6 pr-3")}
													/>
													<FormMessage className='font-mona font-light text-[16px] pt-1 text-red-500' />
												</FormItem>
											</FormControl>
										)}
									/>

									<div className='md:mt-16 mt-12'>
										<Button
											type='submit'
											onClick={(e) => {
												e.preventDefault();
												loginForm.handleSubmit(handleSubmit)();
											}}
											disabled={processing === true}
											className='cursor-pointer h-[60px] block w-full p-0'
										>
											<FlipButton
												title='Login'
												textClasses='font-branch leading-none h-[60px] text-[24px] text-black'
												divClasses='bg-white rounded-full w-full h-[60px] flex justify-center items-center p-0'
											/>
										</Button>
									</div>
								</div>

								<div className='flex justify-center mt-6'>
									<FormField
										control={loginForm.control}
										name='keepSignedIn'
										render={({ field }) => (
											<FormControl className=''>
												<FormItem>
													<div className='flex justify-center items-center gap-4'>
														<Checkbox
															checked={field.value}
															onCheckedChange={field.onChange}
															className='border rounded-[4px] border-white'
														/>
														<p className='b-text text-white'>
															Keep me signed-in
														</p>
													</div>
												</FormItem>
											</FormControl>
										)}
									/>
								</div>
							</form>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
