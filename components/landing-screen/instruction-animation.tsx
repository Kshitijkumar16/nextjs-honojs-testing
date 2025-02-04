"use client";

import { Instructions } from "@/constants";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const InstructionAnimation = () => {
	const [lineIndex, setLineIndex] = useState(0);

	const changeInstructionInterval = 3000;

	useEffect(() => {
		let intervalId: NodeJS.Timeout | undefined;
		let timeoutId: NodeJS.Timeout | undefined;

		if (lineIndex !== Instructions.length - 1) {
			intervalId = setInterval(() => {
				setLineIndex((prv) => (prv + 1) % Instructions.length);
			}, changeInstructionInterval);
		} else {
			timeoutId = setTimeout(() => {
				setLineIndex(0);
			}, 6000);
		}

		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [lineIndex]);

	return (
		<div className='relative min-w-[400px] flex justify-center items-center overflow-hidden'>
			<AnimatePresence>
				{Instructions.map(
					(item, key) =>
						key === lineIndex && (
							<motion.div
								initial={{ y: "100%" }}
								animate={{
									y: 0,
									transition: {
										y: { duration: 0.3, ease: "easeOut" },
									},
								}}
								exit={{
									y: "-100%",
									transition: {
										y: { duration: 0.3, ease: "easeIn" },
									},
								}}
								key={`key-` + key}
								className='absolute inset-0 h-full w-full first:relative'
							>
								<div className='flex items-center justify-center'>
									{item.map((line, index) => (
										<motion.p
											initial={{ opacity: 0, filter: "blur(24px)" }}
											animate={{
												opacity: 1,
												filter: "blur(0px)",
												transition: { delay: 0.1 * (index + 1) },
											}}
											key={line.attribute + index}
											className={cn(
												"text-white font-mona tracking-wide text-[18px] font-light",
												line.attribute === "boxed" &&
													"border border-white/40 px-2 py-1 rounded-[8px] mx-1"
											)}
										>
											{line.text}
											{line.attribute !== "boxed" && <span>&nbsp;</span>}
										</motion.p>
									))}
								</div>
							</motion.div>
						)
				)}
			</AnimatePresence>
		</div>
	);
};

export default InstructionAnimation;
