"use client";

// global imports
import { useState } from "react";
import { motion } from "framer-motion";

// local imports
import { cn } from "@/lib/utils";

interface FlipButtonProps {
	title: string;
	divClasses: string;
	textClasses: string;
}

const FlipButton = ({ title, divClasses, textClasses }: FlipButtonProps) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	return (
		<motion.div
			onPointerEnter={() => setIsHovered(true)}
			onPointerLeave={() => setIsHovered(false)}
			animate={isHovered ? "hovered" : "notHovered"}
			className={cn(
				"relative overflow-hidden flex justify-center items-center bg-transparent",
				divClasses
			)}
		>
			<motion.p
				variants={{ hovered: { y: "-100%" }, notHovered: { y: 0 } }}
				transition={{ duration: 0.2, ease: "easeOut" }}
				className={cn("flex justify-center items-center", textClasses)}
			>
				{title}
			</motion.p>
			<motion.p
				variants={{ hovered: { y: 0 }, notHovered: { y: "100%" } }}
				transition={{ duration: 0.2, ease: "easeOut" }}
				className={cn(
					"absolute flex justify-center items-center h-full w-full",
					textClasses
				)}
			>
				{title}
			</motion.p>
		</motion.div>
	);
};

export default FlipButton;
