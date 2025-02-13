"use client";

import { icons, images } from "@/constants";
import {
	ADDPAGE_URL,
	DASHBOARDPAGE_URL,
	PROFILEPAGE_URL,
} from "@/constants/dashboard-index";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Models } from "node-appwrite";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useLogout } from "@/mutations/auth-feature/use-logout";
import FlipButton from "../ui/flip-button";

interface DashLineProps {
	data: Models.User<Models.Preferences>;
}

const DesktopNavbar = ({ data }: DashLineProps) => {
	const pathName = usePathname();

	const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

	const dropdownRef = useRef<HTMLDivElement>(null);
	const dropDownTriggerRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// Check if click is outside both the dropdown and the trigger button
			if (
				dropdownRef.current &&
				dropDownTriggerRef.current &&
				!dropdownRef.current.contains(event.target as Node) &&
				!dropDownTriggerRef.current.contains(event.target as Node)
			) {
				setDropDownOpen(false);
			}
		};

		// Add event listener when dropdown is open
		if (dropDownOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		// Cleanup function
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropDownOpen]);

	const [theme, setTheme] = useState<"dark" | "light">("dark");
	const [confirmLogout, setConfirmLogout] = useState<boolean>(false);

	const { mutate } = useLogout();

	const handleLogOut = () => {
		mutate();
	};

	return (
		<div className='px py-[24px] flex justify-between items-center rounded-full bg-black'>
			<div className='flex items-center gap-10'>
				<p className='text-white font-branch text-[20px] tracking-wider'>
					Modern Therapy
				</p>

				<div className='md:flex gap-10 items-center hidden'>
					<Link
						href={"/dashboard"}
						className='block'
					>
						<p
							className={cn(
								"b-text hover:text-white",
								"transition-colors duration-300 ease-in-out",
								pathName === DASHBOARDPAGE_URL ? "text-white" : "text-white/50"
							)}
						>
							Dashboard
						</p>
					</Link>

					<Link
						href={"/add"}
						className='block'
					>
						<p
							className={cn(
								"b-text hover:text-white",
								"transition-colors duration-300 ease-in-out",
								pathName === ADDPAGE_URL ? "text-white" : "text-white/50"
							)}
						>
							Create
						</p>
					</Link>
				</div>
			</div>

			<div className='flex items-center gap-7'>
				<Link
					href={"/profile"}
					className='block group'
				>
					<div className='flex items-center gap-5'>
						<p
							className={cn(
								"b-text group-hover:text-white",
								"transition-colors duration-300 ease-in-out",
								pathName === PROFILEPAGE_URL ? "text-white" : "text-white/50"
							)}
						>
							Profile
						</p>
						<div className='flex justify-center items-center h-[36px] w-[36px] max-md:hidden'>
							<Image
								src={images.kshitij}
								alt=''
								className={cn(
									"rounded-full object-cover object-center border-2",
									pathName === PROFILEPAGE_URL
										? "border-white h-[32px] w-[32px]"
										: "border-transparent h-[32px] w-[32px]"
								)}
							/>
						</div>
					</div>
				</Link>
				{/* drop down logic */}
				<div className='relative'>
					<button
						ref={dropDownTriggerRef}
						onClick={() => {
							setDropDownOpen((prev) => (prev = !prev));
						}}
						className={cn(
							"block px-3 py-3 hover:bg-zinc-800 rounded-[12px]",
							"transition-colors duration-200 ease-in-out "
						)}
					>
						<div className={cn("flex flex-col gap-2.5 ")}>
							<div className='bg-white h-[1px] w-[40px] rounded-full' />
							<motion.div
								animate={{ x: dropDownOpen ? "0px" : "19px" }}
								transition={{ duration: 0.2, ease: "easeInOut" }}
								className='bg-white h-[1px] w-[20px] rounded-full'
							/>
						</div>
					</button>

					<AnimatePresence>
						{dropDownOpen && (
							<motion.div
								initial={{ opacity: 0, scale: 0.6, filter: "blur(32px)" }}
								animate={{
									opacity: 1,
									scale: 1,
									filter: "blur(0px)",
									transition: { duration: 0.2, ease: "easeOut" },
								}}
								exit={{
									opacity: 0,
									scale: 0.6,
									filter: "blur(32px)",
									transition: { duration: 0.2, ease: "easeIn" },
								}}
								ref={dropdownRef}
								className='absolute origin-top-right right-0 top-[60px] w-[280px] bg-zinc-900 rounded-[24px] z-50 p-2 overflow-hidden'
							>
								<div className='pt-8 pb-6 rounded-[16px] bg-zinc-950'>
									<div className='flex flex-col justify-center items-center'>
										<Image
											src={images.kshitij}
											alt=''
											className='h-[60px] w-[60px] rounded-full'
										/>
										<p className='text-white font-branch tracking-wider mt-4 text-[20px]'>
											Kshitijkumar
										</p>
									</div>
								</div>
								<div className='mt-2 py-3 px-5 flex flex-col rounded-[16px] bg-zinc-950'>
									<div>
										<button className='block w-full'>
											<p
												className={cn(
													"text-white b-text text-left py-2 hover:text-white/60 ",
													"transition-colors duration-200 ease-in"
												)}
											>
												Settings
											</p>
										</button>
									</div>
									<div>
										<button className='block w-full'>
											<p
												className={cn(
													"text-white b-text text-left py-2 hover:text-white/60 ",
													"transition-colors duration-200 ease-in"
												)}
											>
												Watch tutorial
											</p>
										</button>
									</div>
									<div>
										<button className='block w-full'>
											<p
												className={cn(
													"text-white b-text text-left py-2 hover:text-white/60 ",
													"transition-colors duration-200 ease-in"
												)}
											>
												Give feedback
											</p>
										</button>
									</div>
									<div>
										<button
											onClick={() => setConfirmLogout((prev) => (prev = !prev))}
											className='block w-full'
										>
											<p className='text-white b-text py-2 hover:text-white/60 text-left '>
												Logout
											</p>
										</button>
										<AnimatePresence>
											{confirmLogout && (
												<motion.div
													initial={{ height: 0 }}
													animate={{
														height: "auto",
														transition: { duration: 0.3, ease: "linear" },
													}}
													exit={{ height: 0 }}
													className='overflow-hidden'
												>
													<div className='pt-2'>
														<button
															onClick={() => {
																setConfirmLogout(false);
															}}
															className={cn(
																"border border-white/20 py-2 w-full rounded-full"
															)}
														>
															<FlipButton
																title='Oops, no!'
																textClasses='text-white text-[16px] font-mona tracking-wide text-center'
																divClasses=''
															/>
														</button>
														<button
															onClick={() => handleLogOut()}
															className='mt-3 py-2 bg-red-600 w-full rounded-full'
														>
															<FlipButton
																title='Yes, logout.'
																textClasses='text-white text-[16px] font-mona tracking-wide text-center'
																divClasses=''
															/>
														</button>
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								</div>

								<div className='mt-2 py-2 px-5 flex flex-col gap-4 rounded-[16px] bg-zinc-950'>
									<div className='flex justify-between items-center'>
										<p className='b-text text-white'>Theme</p>
										<div className='flex gap-1 border border-white/20 rounded-full'>
											<button
												onClick={() => setTheme("dark")}
												className='block rounded-full p-2'
											>
												<Moon
													className={cn(
														" h-[20px] w-[20px] ",
														"transition-colors duration-300 ease-in-out",
														theme === "dark" ? "text-white" : "text-white/40"
													)}
												/>
											</button>
											<button
												onClick={() => setTheme("light")}
												className='block rounded-full p-2'
											>
												<Sun
													className={cn(
														" h-[20px] w-[20px] ",
														"transition-colors duration-300 ease-in-out",
														theme === "light" ? "text-white" : "text-white/40"
													)}
												/>
											</button>
										</div>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default DesktopNavbar;
