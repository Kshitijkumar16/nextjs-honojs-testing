"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useSignup } from "@/mutations/login-feature/use-signup";
import {
	formSchema,
	sendOTPSchema,
	verifyOTPSchema,
} from "@/validators/login-schemas";
import { useSendOTP } from "@/mutations/login-feature/use-sendotp";
import { useVerifyOTP } from "@/mutations/login-feature/use-verifyotp";

import { isValidPhoneNumber } from "libphonenumber-js/max";

import { toast } from "@/hooks/use-toast";

import { PhoneInput } from "react-international-phone";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "../ui/input-otp";
import FlipButton from "../ui/flip-button";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Image from "next/image";
import { images } from "@/constants";
import Timer from "../ui/timer";

const LoginForm = () => {
	const { mutate: callAPIsendOTP } = useSendOTP();
	const { mutate: callAPIverifyOTP } = useVerifyOTP();

	const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
	const [showResendTimer, setShowResendTimer] = useState<boolean>(false);
	const [processing, setProcessing] = useState(false);

	const phoneForm = useForm<z.infer<typeof sendOTPSchema>>({
		resolver: zodResolver(sendOTPSchema),
		defaultValues: {
			phoneNumber: "",
		},
	});

	const verificationForm = useForm<z.infer<typeof verifyOTPSchema>>({
		resolver: zodResolver(verifyOTPSchema),
		defaultValues: {
			userId: "",
			secret: "",
			keepSignedIn: false,
		},
	});

	const handleSendOTP = async (values: z.infer<typeof sendOTPSchema>) => {
		if (!values.phoneNumber) {
			toast({
				title: "Error",
				description: "Please enter a phone number",
				variant: "destructive",
			});
			return;
		}

		if (!isValidPhoneNumber(values.phoneNumber)) {
			toast({
				title: "Invalid Phone Number",
				description:
					"Please enter a valid phone number for the selected country",
				variant: "destructive",
			});
			return;
		}

		setIsOtpSent(true);

		callAPIsendOTP({ json: values });
	};

	const handleResendComplete = () => {
		setShowResendTimer(false);
	};

	const handleVerify = async (values: z.infer<typeof verifyOTPSchema>) => {
		if (values.secret.length !== 6) {
			toast({
				title: "Invalid OTP",
				description: "Please enter a valid OTP to continue.",
				variant: "destructive",
			});
			return;
		}

		callAPIverifyOTP({ json: values });
	};

	return (
		<div className='flex w-full justify-between h-screen overflow-clip'>
			<div className='max-w-[640px] lg:flex hidden w-[40%] relative'>
				<div className='relative h-full w-full opacity-40'>
					<Image
						src={images.login}
						alt=''
						fill
						className='object-cover object-top'
					/>
				</div>
				<div className='absolute h-full w-full inset-0 flex justify-center items-center px'>
					<p className='heading text-white font-branch text-center'>
						Modern Therapist
					</p>
				</div>
			</div>
			<div className='lg:w-[60%] w-[100%] px flex flex-col justify-between'>
				<div className='flex md:flex-row flex-col-reverse justify-between md:py max-md:pt'>
					<p className='md:mt-0 mt-1 b-text text-center font-mona md:text-white text-white/40'>
						Awesome! You are taking a step!
					</p>
					<p className='font-branch max-md:w-full text-center text-[24px] tracking-wide text-white'>
						Modern Therapist
					</p>
				</div>

				<div>
					<Form {...phoneForm}>
						<form onSubmit={phoneForm.handleSubmit(handleSendOTP)}>
							<FormField
								control={phoneForm.control}
								name='phoneNumber'
								render={({ field }) => (
									<FormControl>
										<FormItem>
											<div className='flex flex-col items-center justify-center'>
												<PhoneInput
													value={field.value}
													onChange={(phone) => field.onChange(phone)}
													defaultCountry='in'
													inputStyle={{
														color: "white",
														backgroundColor: "transparent",
														height: "60px",
														fontSize: "24px",
														borderRadius: "999px",
														border: "none",
														maxWidth: "188px",
														overflowX: "scroll",
													}}
													countrySelectorStyleProps={{
														buttonStyle: {
															backgroundColor: "transparent",
															border: "none",
															height: "60px",
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
													className='flex justify-center items-center gap-1 font-branch bg-white/[0.08] rounded-full md:pr-6 pr-4 md:pl-10 pl-6'
												/>
												<div className='mt-8 h-12 flex items-center justify-center'>
													{!isOtpSent ? (
														<Button
															type='button'
															onClick={() => {
																phoneForm.handleSubmit(handleSendOTP)();
																setShowResendTimer(true);
															}}
															disabled={isOtpSent}
															className='cursor-pointer bg-transparent'
														>
															<FlipButton
																title='Send OTP'
																divClasses='bg-transparent'
																textClasses='subheading font-branch text-white'
															/>
														</Button>
													) : showResendTimer ? (
														<Timer
															seconds={120}
															onComplete={handleResendComplete}
														/>
													) : (
														<Button
															type='button'
															onClick={() => {
																phoneForm.handleSubmit(handleSendOTP)();
																setShowResendTimer(true);
															}}
															className='cursor-pointer bg-transparent'
														>
															<FlipButton
																title='Resend OTP'
																divClasses='bg-transparent'
																textClasses='subheading font-branch text-white'
															/>
														</Button>
													)}
												</div>
											</div>
										</FormItem>
									</FormControl>
								)}
							/>
						</form>
					</Form>
				</div>

				<div>
					<Form {...verificationForm}>
						<form>
							<FormField
								control={verificationForm.control}
								name='secret'
								render={({ field }) => (
									<FormControl>
										<FormItem className=''>
											<div className='flex flex-col justify-center items-center'>
												<div>
													<InputOTP
														maxLength={6}
														value={field.value}
														onChange={field.onChange}
														// onComplete={() => form.handleSubmit(onSubmit)()}
														pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
													>
														<InputOTPGroup className='gap-1'>
															<InputOTPSlot
																index={0}
																className='text-white border-none bg-white/10 h-[60px] w-[40px] font-branch text-[24px]'
															/>
															<InputOTPSlot
																index={1}
																className='text-white border-none bg-white/10 h-[60px] w-[40px] font-branch text-[24px]'
															/>
															<InputOTPSlot
																index={2}
																className='text-white border-none bg-white/10 h-[60px] w-[40px] font-branch text-[24px]'
															/>
														</InputOTPGroup>
														<InputOTPSeparator className='text-white' />
														<InputOTPGroup className='gap-1'>
															<InputOTPSlot
																index={3}
																className='text-white border-none bg-white/10 h-[60px] w-[40px] font-branch text-[24px]'
															/>
															<InputOTPSlot
																index={4}
																className='text-white border-none bg-white/10 h-[60px] w-[40px] font-branch text-[24px]'
															/>
															<InputOTPSlot
																index={5}
																className='text-white border-none bg-white/10 h-[60px] w-[40px] font-branch text-[24px]'
															/>
														</InputOTPGroup>
													</InputOTP>
												</div>
												<FormMessage className='text-[16px] tracking-wide font-mona mt-4 text-red-500 font-light' />

												<div className='flex flex-col items-center justify-center mt-24'>
													<Button
														type='submit'
														onClick={() => {
															verificationForm.handleSubmit(handleVerify)();
														}}
														disabled={isOtpSent === false}
														className='cursor-pointer bg-transparent'
													>
														<FlipButton
															title='Verify & Continue'
															divClasses={cn(
																"bg-white rounded-full",
																isOtpSent && "shadow-whiteGlow"
															)}
															textClasses='subheading font-branch text-black lg:px-14 px-10 py-3'
														/>
													</Button>
												</div>
											</div>
										</FormItem>
									</FormControl>
								)}
							/>

							<FormField
								control={verificationForm.control}
								name='keepSignedIn'
								render={({ field }) => (
									<FormControl className='mt-10'>
										<FormItem>
											<div className='flex justify-center items-center gap-4'>
												<Checkbox
													checked={field.value}
													onCheckedChange={field.onChange}
													className='border-white'
												/>
												<p className='b-text text-white'>Keep me signed-in</p>
											</div>
										</FormItem>
									</FormControl>
								)}
							/>
						</form>
					</Form>
				</div>
				<div>
					<div className='flex justify-center pb-10'>
						<p className='text-white/40 b-text text-[16px] max-w-[260px] text-center'>
							By continuing, you agree to our{" "}
							<span className='text-white'>Terms</span> and{" "}
							<span className='text-white'>Privacy Policy</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
