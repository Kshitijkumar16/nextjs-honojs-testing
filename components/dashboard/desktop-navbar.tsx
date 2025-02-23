"use client";

import { icons, images } from "@/constants";
import {
	CREATEPAGE_URL,
	DASHBOARDPAGE_URL,
	PROFILEPAGE_URL,
} from "@/constants/dashboard-index";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Models } from "node-appwrite";
import React, { useEffect, useRef, useState } from "react";
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from "framer-motion";
import { MenuIcon, Moon, Settings, Sun } from "lucide-react";
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

	const [isHidden, setIsHidden] = useState(false);
	const lastYRef = useRef(0);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (y) => {
		const difference = y - lastYRef.current;
		if (Math.abs(difference) > 50) {
			setIsHidden(difference > 0);

			lastYRef.current = y;
		}
		if (isHidden) {
			setDropDownOpen(false);
		}
	});

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
		<motion.div
			animate={isHidden ? "hidden" : "visible"}
			transition={{ duration: 0.2 }}
			variants={{ hidden: { y: "-130%" }, visible: { y: "0%" } }}
			className='px py-4 flex justify-between items-center bg-black'
		>
			<div className='flex items-center gap-10'>
				<p className='text-white font-branch text-[20px] tracking-wider'>
					Modern Therapy
				</p>

				<div className='md:flex gap-10 items-center hidden'>
					<Link
						href={DASHBOARDPAGE_URL}
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
						href={CREATEPAGE_URL}
						className='block'
					>
						<p
							className={cn(
								"b-text hover:text-white",
								"transition-colors duration-300 ease-in-out",
								pathName === CREATEPAGE_URL ? "text-white" : "text-white/50"
							)}
						>
							Create
						</p>
					</Link>
				</div>
			</div>

			<div className='flex items-center gap-5'>
				<div className='max-md:hidden'>
					<Link
						href={PROFILEPAGE_URL}
						className={cn("block group py-1 pr-1 pl-4 rounded-full")}
					>
						<div className='flex items-center gap-4'>
							<p
								className={cn(
									"b-text group-hover:text-white",
									"transition-colors duration-300 ease-in-out",
									pathName === PROFILEPAGE_URL ? "text-white" : "text-white/50"
								)}
							>
								Profile
							</p>
							<div className='flex justify-center items-center h-[36px] w-[36px]'>
								<Image
									src={images.kshitij}
									alt=''
									className={cn(
										"rounded-full object-cover object-center border-2",
										"transition-colors duration-300 ease-in-out",
										pathName === PROFILEPAGE_URL
											? "border-white h-[28px] w-[28px]"
											: "border-transparent group-hover:border-white h-[28px] w-[28px]"
									)}
								/>
							</div>
						</div>
					</Link>
				</div>
				{/* drop down logic */}
				<div className='relative'>
					<button
						ref={dropDownTriggerRef}
						onClick={() => {
							setDropDownOpen((prev) => (prev = !prev));
						}}
						className={cn(
							"block group px-3 py-3 rounded-[12px]"
							// "transition-colors border duration-200 ease-in-out",
							// dropDownOpen
							// 	? "border-white/20"
							// 	: "border-transparent hover:border-white/20"
						)}
					>
						<div
							className={cn(
								dropDownOpen
									? "opacity-100"
									: "opacity-50 group-hover:opacity-100",
								"transition-opacity duration-300 ease-in-out"
							)}
						>
							<p className='b-text text-white'>Menu</p>
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
								className='absolute origin-top-right 2xl:right-[6px] xl:-right-[4px] right-0 top-[64px] w-[280px] bg-black border border-white/20 rounded-[16px] z-50 p-2 overflow-hidden'
							>
								<div className='pt-8 pb-6 bg-black mx-5 border-b border-b-white/20'>
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
								<div className='mt-2 py-3 px-5 flex flex-col rounded-[16px] bg-black'>
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

								<div className='mt-2 pt-4 py-2 mx-5 border-t border-t-white/20 flex flex-col gap-4 rounded-none bg-black'>
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
		</motion.div>
	);
};

export default DesktopNavbar;
