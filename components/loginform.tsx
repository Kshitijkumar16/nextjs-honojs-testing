"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/app/api/mutations/use-login";

export const formSchema = z.object({
	name: z.string(),
	email: z.string(),
	password: z.string(),
});

const LoginForm = () => {
	const [processing, setProcessing] = useState(false);

	const { mutate } = useLogin();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});
	const handleSubmit = async (values: z.infer<typeof formSchema>) => {
		setProcessing(true);
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
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default LoginForm;
