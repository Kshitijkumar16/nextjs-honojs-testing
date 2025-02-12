"use client";

// global imports
import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import { isValidPhoneNumber } from "libphonenumber-js/max";
import { toast } from "@/hooks/use-toast";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// local imports
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "../ui/input-otp";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "../ui/command";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "@/components/ui/button";
import {
	ArrowLeft,
	ArrowRight,
	Check,
	ChevronsUpDown,
	Instagram,
	Linkedin,
	LinkedinIcon,
	Twitter,
	X,
	Youtube,
	YoutubeIcon,
} from "lucide-react";

import Timer from "../ui/timer";
import FlipButton from "../ui/flip-button";
import Marquee from "../ui/text-marquee";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import "react-international-phone/style.css";
import { cn } from "@/lib/utils";
import { carousalArray, GenderList, images } from "@/constants";
import { onboardingFormSchema } from "@/validators/auth-schemas";
import { useSendOTP } from "@/mutations/onboarding-feature/use-sendotp";
import { useVerifyOTP } from "@/mutations/onboarding-feature/use-verifyotp";

const OnboardingForm = () => {
	const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
	const [showResendTimer, setShowResendTimer] = useState<boolean>(false);
	const [otpFilled, setOTPFilled] = useState<boolean>(false);
	const [processing, setProcessing] = useState(false);

	const { mutate: callAPIsendOTP } = useSendOTP();
	const { mutate: callAPIverifyOTP } = useVerifyOTP();

	const onboardingForm = useForm<z.infer<typeof onboardingFormSchema>>({
		resolver: zodResolver(onboardingFormSchema),
		defaultValues: {
			age: 1,
		},
	});

	const handleSendOTP = async (phoneNumber: string, password: string) => {
		if (phoneNumber === "" || !phoneNumber || phoneNumber.length <= 3) {
			toast({
				title: "Phone number empty.",
				description: "Please enter a phone number",
				variant: "destructive",
			});
			return;
		}

		if (!isValidPhoneNumber(phoneNumber)) {
			toast({
				title: "Invalid Phone Number",
				description:
					"Please enter a valid phone number for the selected country",
				variant: "destructive",
			});
			return;
		}

		setIsOtpSent(true);

		callAPIsendOTP(
			{ json: { phoneNumber, password } },
			{
				onSuccess: (res) => {
					console.log("Res: " + res);
					const userId = res.json;
					console.log("onSuccess => UserId: " + userId);
					onboardingForm.setValue("userId", userId);
					toast({
						title: "OTP sent!",
						description: "Copy the OTP from your text messages.",
						variant: "success",
					});
				},
				onError: () => {
					toast({
						title: "Something went wrong.",
						description: "Please try again / check your internet.",
						variant: "destructive",
					});
					setIsOtpSent(false);
				},
			}
		);
	};

	const handleResendComplete = () => {
		setShowResendTimer(false);
		setIsOtpSent(false);
	};

	const handleFormErrors = () => {
		let ref;
		const ph = onboardingForm.getValues("phoneNumber");

		const errors = onboardingForm.formState.errors;
		// console.log("error exists" + JSON.stringify(errors));

		if (ph === "" || !ph || ph.length <= 3 || !isValidPhoneNumber(ph)) {
			ref = "phoneNumber";

			toast({
				title: "Invalid Phone Number",
				description:
					"Please enter a valid phone number for the selected country",
				variant: "destructive",
			});
			return;
		}

		if (errors && Object.keys(errors).length > 0) {
			console.log(Object.keys(errors).length);
			console.log(errors);
			ref = Object.keys(errors)[0];

			console.log("element: " + ref);

			gsap.registerPlugin(ScrollToPlugin);
			gsap.to(window, {
				duration: 0.5,
				scrollTo: {
					y: `#${ref}`,
					offsetY: 100,
				},
				ease: "sine.inOut",
			});
		}
	};

	const handleSubmit = async (values: z.infer<typeof onboardingFormSchema>) => {
		setProcessing(true);

		if (values.secret.length !== 6) {
			toast({
				title: "Invalid OTP",
				description: "Please enter a valid OTP to continue.",
				variant: "destructive",
			});
			return;
		}

		console.log("In form userId: " + onboardingForm.getValues("userId"));

		console.log("step before");

		callAPIverifyOTP(
			{ json: values },
			{
				onSuccess: () => {
					toast({
						title: "Step completed!",
						description: "Redirecting you to the Dashboard...",
						variant: "success",
					});
				},
				onError: () => {
					toast({
						title: "Something went wrong.",
						description: "Please enter a valid OTP to continue.",
						variant: "destructive",
					});
				},
			}
		);

		console.log("step after");
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
			<div className='w-[100%] xl:pr max-xl:px py'>
				<div className='h-full w-full'>
					{/* top line */}
					<div className='flex justify-between items-center w-full xl:gap-6 gap-4 container  '>
						<div className=' flex gap-4 rounded-full'>
							<div className='bg-green-700 rounded-full flex justify-center items-center aspect-square h-6 w-6 overflow-hidden'>
								<Check className='text-white size-[16]' />
							</div>
							<p className='max-xmd:hidden h-6 -translate-y-[1px] leading-none flex justify-center items-center font-mona text-[14px] text-white font-light tracking-wide whitespace-nowrap'>
								Create an account
							</p>
						</div>
						<div className='w-full h-[1px] bg-white/40' />
						<div className=' flex gap-4 rounded-full'>
							<div className='border border-white/60 rounded-full w-6 h-6 flex justify-center items-center overflow-hidden'>
								<p className='font-mona text-[12px] text-white font-light'>2</p>
							</div>
							<p className='h-6 -translate-y-[1px] leading-none flex justify-center items-center font-mona text-[14px] text-white font-light tracking-wide whitespace-nowrap'>
								Customise your account
							</p>
						</div>
						<div className='w-full h-[1px] bg-white/40' />
						<div className=' flex gap-4 rounded-full'>
							<div className='border border-white/60 rounded-full w-6 h-6 flex justify-center items-center overflow-hidden'>
								<p className='font-mona text-[12px] text-white font-light'>3</p>
							</div>
							<p className='max-xmd:hidden h-6 -translate-y-[1px] leading-none flex justify-center items-center font-mona text-[14px] text-white font-light tracking-wide whitespace-nowrap'>
								Begin your journey!
							</p>
						</div>
					</div>

					{/* form */}
					<Form {...onboardingForm}>
						<form>
							{/* standard info */}
							<div className='w-full mt-[40px] container '>
								<p className='container-title text-white font-branch lg:mb-8 mb-6'>
									Standard info
								</p>
								<div className='flex justify-between md:flex-row flex-col lg:gap-8 gap-6'>
									{/* first name */}
									<FormField
										control={onboardingForm.control}
										name='firstName'
										render={({ field }) => (
											<FormControl
												id='firstName'
												className='w-full'
											>
												<FormItem>
													<Label className='label text-white/50'>
														<p>First name *</p>
													</Label>
													<Input
														onChange={field.onChange}
														placeholder='Danerys'
														className={cn("form-input pl-6 pr-3 mt-2.5")}
													/>
													<FormMessage className='font-mona font-light text-[16px] pt-1 text-red-500' />
												</FormItem>
											</FormControl>
										)}
									/>

									{/* last name */}
									<FormField
										control={onboardingForm.control}
										name='lastName'
										render={({ field }) => (
											<FormControl
												id='lastName'
												className='w-full'
											>
												<FormItem className='w-full'>
													<Label className='label text-white/50'>
														<p>Last name *</p>
													</Label>
													<Input
														onChange={field.onChange}
														placeholder='Targaryn'
														className={cn("form-input pl-6 pr-3 mt-2.5")}
													/>
													<FormMessage className='font-mona font-light text-[16px] pt-1 text-red-500' />
												</FormItem>
											</FormControl>
										)}
									/>
								</div>

								<div className='flex justify-between xl:gap-8 gap-5 md:mt-8 mt-6'>
									{/* age */}
									<FormField
										control={onboardingForm.control}
										name='age'
										render={({ field }) => (
											<FormControl
												id='age'
												className='md:w-[400px] w-full'
											>
												<FormItem>
													<Label className='label text-white/50'>
														<p>Age *</p>
													</Label>
													<Input
														placeholder='21'
														type='number'
														min={0}
														onChange={field.onChange}
														className={cn("form-input pl-6 pr-3 mt-2.5")}
													/>
													<FormMessage className='font-mona font-light text-[16px] pt-1 text-red-500' />
												</FormItem>
											</FormControl>
										)}
									/>

									{/* gender */}
									<FormField
										control={onboardingForm.control}
										name='gender'
										render={({ field }) => (
											<FormControl
												id='gender'
												className='w-full'
											>
												<FormItem>
													<div className='flex flex-col'>
														<Label className='label text-white/50'>
															<p>Gender *</p>
														</Label>

														<Popover>
															<PopoverTrigger asChild>
																<FormControl className='w-full'>
																	<Button
																		type='button'
																		role='combobox'
																		className={cn(
																			"w-full h-[60px] md:text-[24px] text-[20px] text-white justify-between font-mona font-light bg-zinc-900 rounded-full px-5",
																			"mt-2",
																			"border border-transparent hover:border-white/20",
																			!field.value && "text-white/25"
																		)}
																	>
																		{field.value
																			? GenderList.find(
																					(gender) =>
																						gender.value === field.value
																			  )?.title
																			: "Select a gender..."}
																		<ChevronsUpDown className='ml-2 h-4 w-4 text-white shrink-0 opacity-25' />
																	</Button>
																</FormControl>
															</PopoverTrigger>

															<PopoverContent className='w-full'>
																<Command className='w-full'>
																	<CommandInput
																		className='text-white/40 font-mona tracking-wide'
																		placeholder='Search gender...'
																	/>
																	<CommandList>
																		<CommandEmpty className='font-mona tracking-wide font-light py-5 text-center text-[16px]'>
																			No gender found.
																		</CommandEmpty>
																		<CommandGroup>
																			{GenderList.map((gender) => (
																				<CommandItem
																					value={gender.value}
																					key={gender.value}
																					className='text-white/50 font-mona tracking-wide font-light md:text-[24px] text-[16px]'
																					onSelect={() => {
																						onboardingForm.setValue(
																							"gender",
																							gender.value
																						);
																					}}
																				>
																					{gender.title}
																					<Check
																						className={cn(
																							"ml-auto text-white",
																							gender.value === field.value
																								? "opacity-100"
																								: "opacity-0"
																						)}
																					/>
																				</CommandItem>
																			))}
																		</CommandGroup>
																	</CommandList>
																</Command>
															</PopoverContent>
														</Popover>
													</div>
													<FormMessage className='font-mona font-light text-[16px] pt-1 text-red-500' />
												</FormItem>
											</FormControl>
										)}
									/>
								</div>
							</div>

							{/* your goals */}
							<div className='w-full mt-[40px] container'>
								<p className='container-title text-white font-branch lg:mb-8 mb-6'>
									Your goals
								</p>
								<div className='flex justify-between lg:gap-8 gap-6'>
									<div className='w-full'>
										<Label className=' label text-white/50'>
											<p>Demo question</p>
										</Label>
										<Input
											placeholder='Demo answer'
											className={cn("form-input pl-6 pr-3 mt-2.5")}
										/>
									</div>

									<div className='w-full'>
										<Label className='label text-white/50'>
											<p>Demo question</p>
										</Label>
										<Input
											placeholder='Demo answer'
											className={cn("form-input pl-6 pr-3 mt-2.5")}
										/>
									</div>
								</div>

								<div className='md:mt-8 mt-6'>
									<div className='w-full'>
										<Label className='label text-white/50'>
											<p>What you want to achieve?</p>
										</Label>
										<Textarea
											className='mt-2.5 bg-zinc-900 form-input rounded-[24px] min-h-[200px] py-6 px-6 leading-normal'
											placeholder='I want to...'
										/>
									</div>
								</div>
							</div>

							{/* therapy history */}
							<div className='w-full mt-[40px] container'>
								<p className='container-title text-white font-branch lg:mb-8 mb-6'>
									Therapy history
								</p>
								<div className='flex justify-between lg:gap-8 gap-6'>
									<div className='w-full'>
										<Label className='label text-white/50'>
											<p>Demo question</p>
										</Label>
										<Input
											placeholder='Demo answer'
											className={cn("form-input pl-6 pr-3 mt-2.5")}
										/>
									</div>

									<div className='w-full'>
										<Label className='label text-white/50'>
											<p>Demo question</p>
										</Label>
										<Input
											placeholder='Demo answer'
											className={cn("form-input pl-6 pr-3 mt-2.5")}
										/>
									</div>
								</div>

								<div className='md:mt-8 mt-6'>
									<div className='w-full'>
										<Label className='label text-white/50'>
											<p>Demo question</p>
										</Label>
										<Input
											placeholder='Demo answer'
											className={cn("form-input pl-6 pr-3 mt-2.5")}
										/>
										<FormMessage className='font-mona font-light text-[16px] pt-1 text-red-500' />
									</div>
								</div>
							</div>

							{/* simple verification */}
							<div className='w-full mt-[40px] container'>
								<p className='container-title text-white font-branch lg:mb-8 mb-6'>
									Simple verification
								</p>
								<div className='pt-1 flex justify-between md:flex-row flex-col gap-6'>
									<FormField
										control={onboardingForm.control}
										name='phoneNumber'
										render={({ field }) => (
											<FormControl id='phoneNumber'>
												<FormItem>
													<Label className='label text-white/50 '>
														<p>Phone number</p>
													</Label>
													<p className='h-[1px]'></p>
													<div className='flex justify-center flex-1 bg-zinc-900 rounded-full'>
														<div
															className={cn(
																"",
																isOtpSent && "opacity-50 cursor-not-allowed"
															)}
														>
															<PhoneInput
																disabled={isOtpSent}
																value={field.value}
																onChange={(phone) => field.onChange(phone)}
																defaultCountry='in'
																inputStyle={{
																	color: "white",
																	backgroundColor: "transparent",
																	height: "60px",
																	padding: "0px 20px 0px 20px",
																	margin: "0px",
																	fontSize: "24px",
																	border: "none",
																	borderRadius: "999px",
																	width: "100%",
																	overflowX: "scroll",
																}}
																countrySelectorStyleProps={{
																	buttonStyle: {
																		backgroundColor: "transparent",
																		border: "none",
																		height: "60px",
																		padding: "0px 0px 0px 32px",
																		borderRadius: "999px",
																		aspectRatio: "square",
																		color: "white",
																	},
																	dropdownStyleProps: {
																		listItemStyle: {
																			backgroundColor: "black",
																			color: "white",
																		},
																		listItemCountryNameStyle: {
																			backgroundColor: "black",
																			color: "white",
																			fontSize: "20px",
																		},
																		listItemDialCodeStyle: {
																			color: "rgba(255,255,255,0.5)",
																		},
																	},
																}}
																placeholder='Phone number'
																className={cn(
																	"font-branch rounded-full tracking-widest",
																	"border border-transparent hover:border-white/20",
																	"h-[60px]"
																)}
															/>
														</div>
													</div>
												</FormItem>
											</FormControl>
										)}
									/>

									<FormField
										control={onboardingForm.control}
										name='password'
										render={({ field }) => (
											<FormControl
												id='password'
												className='flex-1'
											>
												<FormItem className='w-full'>
													<Label className='label text-white/50'>
														<p>Password</p>
													</Label>
													<p className='h-[1px]'></p>
													<Input
														onChange={field.onChange}
														placeholder='Your password'
														className={cn("form-input pl-6 pr-3 mt-2.5")}
													/>
													<FormMessage className='font-mona font-light text-[16px] pt-1 text-red-500' />
												</FormItem>
											</FormControl>
										)}
									/>
								</div>

								<div>
									{!isOtpSent ? (
										<Button
											type='button'
											onClick={() => {
												handleSendOTP(
													onboardingForm.getValues("phoneNumber"),
													onboardingForm.getValues("password")
												);
												setShowResendTimer(true);
											}}
											disabled={isOtpSent}
											className='cursor-pointer bg-transparent mt-8 w-full p-0'
										>
											<FlipButton
												title='Send OTP'
												divClasses=' bg-white px rounded-full h-[60px] w-full'
												textClasses=' md:text-[24px] text-[20px] h-[60px] font-branch text-black '
											/>
										</Button>
									) : showResendTimer ? (
										<div className='pt-5 flex justify-center items-center w-full'>
											<Timer
												seconds={120}
												onComplete={handleResendComplete}
											/>
										</div>
									) : (
										<Button
											type='button'
											onClick={() => {
												handleSendOTP(
													onboardingForm.getValues("phoneNumber"),
													onboardingForm.getValues("password")
												);
												setShowResendTimer(true);
											}}
											disabled={isOtpSent}
											className='cursor-pointer bg-transparent mt-8 w-full p-0'
										>
											<FlipButton
												title='Resend OTP'
												divClasses='border border-white px rounded-full h-[60px] w-full'
												textClasses='md:text-[24px] text-[20px] h-[60px] font-branch text-white '
											/>
										</Button>
									)}
								</div>
								<div
									className={cn(
										"w-full",
										isOtpSent ? "md:mt-8 mt-10" : "md:mt-12 mt-10"
									)}
								>
									<FormField
										control={onboardingForm.control}
										name='secret'
										render={({ field }) => (
											<FormControl>
												<FormItem className='pt-2'>
													<Label className='label text-white/50'>
														<p>One-time password</p>
													</Label>
													<div className='w-full pt-2'>
														<div className='w-full'>
															<InputOTP
																maxLength={6}
																value={field.value}
																onChange={field.onChange}
																onComplete={() => setOTPFilled(true)}
																pattern={REGEXP_ONLY_DIGITS}
																className='w-full md:gap-8 sm:gap-4 gap-2'
															>
																<InputOTPGroup className='input-otp-gaps'>
																	<InputOTPSlot
																		index={0}
																		className='otp-slot'
																	/>
																	<InputOTPSlot
																		index={1}
																		className='otp-slot'
																	/>
																	<InputOTPSlot
																		index={2}
																		className='otp-slot'
																	/>
																</InputOTPGroup>
																<InputOTPSeparator className='text-white' />
																<InputOTPGroup className='input-otp-gaps'>
																	<InputOTPSlot
																		index={3}
																		className='otp-slot'
																	/>
																	<InputOTPSlot
																		index={4}
																		className='otp-slot'
																	/>
																	<InputOTPSlot
																		index={5}
																		className='otp-slot'
																	/>
																</InputOTPGroup>
															</InputOTP>
														</div>
														<FormMessage className='text-[16px] tracking-wide font-mona mt-4 text-red-500 font-light' />
													</div>
												</FormItem>
											</FormControl>
										)}
									/>
								</div>
							</div>

							{/* submit button */}
							<div className='mt-[40px]'>
								<Button
									type='submit'
									onClick={(e) => {
										e.preventDefault();
										handleFormErrors();
										onboardingForm.handleSubmit(handleSubmit)();
									}}
									disabled={otpFilled === false || processing === true}
									className='cursor-pointer w-full p-0 2xl:h-[308px] h-[200px]'
								>
									<p className='bg-green-700/80 hover:bg-green-700 transition-colors duration-200 ease-in text-white text-center font-branch subheading w-full 2xl:h-[308px] h-[200px] rounded-[24px] leading-none flex items-center justify-center whitespace-normal active:bg-white'>
										Verify
										<span className='max-md:hidden'>&nbsp;OTP&nbsp;</span> &
										save <span className='max-md:hidden'>&nbsp;details</span>
									</p>
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default OnboardingForm;
