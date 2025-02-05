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
import { formSchema, verifyOTPSchema } from "@/validators/login-schemas";
import FlipButton from "../ui/flip-button";
import { useVerifyOTP } from "@/mutations/onboarding-feature/use-verifyotp";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "../ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";

const DemoLogin = () => {
	const [processing, setProcessing] = useState(false);

	// const { mutate } = useVerifyOTP();

	// const verificationForm = useForm<z.infer<typeof verifyOTPSchema>>({
	// 	resolver: zodResolver(verifyOTPSchema),
	// 	defaultValues: {
	// 		userId: "",
	// 		secret: "",
	// 		keepSignedIn: false,
	// 	},
	// });

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const { mutate } = useSignup();

	// const handleSubmit = async (values: z.infer<typeof verifyOTPSchema>) => {
	// 	setProcessing(true);
	// 	console.log(values);
	// 	mutate({ json: values });
	// 	setProcessing(false);
	// };

	const handleSubmit = async (values: z.infer<typeof formSchema>) => {
		setProcessing(true);
		console.log(values);
		mutate({ json: values });
		setProcessing(false);
	};

	return (
		<div className='flex flex-col justify-center items-center h-screen w-full bg-black'>
			<p className='text-white font-bold text-4xl'>Next.js + Hono.js</p>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className=''
				>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<Input
									className='border-white/40 bg-white/[0.03] mt-10 text-white h-[60px] rounded-full px-10 min-w-[300px] text-[24px]'
									placeholder='Jon Snow'
									{...field}
								/>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<Input
									className='border-white/40 bg-white/[0.03] mt-10 text-white h-[60px] rounded-full px-10 min-w-[300px] text-[24px]'
									placeholder='lordsnow@commander.com'
									{...field}
								/>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<Input
									className='border-white/40 bg-white/[0.03] mt-10 text-white h-[60px] rounded-full px-10 min-w-[300px] text-[24px]'
									placeholder='Name1234#'
									{...field}
								/>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type='submit'
						disabled={processing}
						className='mt-10 bg-white text-black font-bold'
					>
						<FlipButton
							title='Submit'
							divClasses=''
							textClasses=''
						/>
					</Button>
				</form>
			</Form>

			{/* <Form {...verificationForm}>
				<form>
					<FormField
						control={verificationForm.control}
						name='userId'
						render={({ field }) => (
							<FormItem>
								<Input
									className='border-white/40 bg-white/[0.03] mt-10 text-white h-[60px] rounded-full px-10 min-w-[300px] text-[24px]'
									placeholder='asifhoiq21iu'
									{...field}
								/>
								<FormMessage />
							</FormItem>
						)}
					/>
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
													verificationForm.handleSubmit(handleSubmit)();
												}}
												className='cursor-pointer bg-transparent'
											>
												<FlipButton
													title='Verify & Continue'
													divClasses={cn(
														"bg-white rounded-full",
														"shadow-whiteGlow"
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
			</Form> */}
		</div>
	);
};

export default DemoLogin;
