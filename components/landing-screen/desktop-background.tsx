"use client";

import { images } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";

const DesktopBackground = () => {
	const plane1 = useRef<null | HTMLDivElement>(null);
	// const plane2 = useRef<null | HTMLDivElement>(null);
	const speed = 0.011;
	const easing = 0.085;
	let xForce = 0;
	let yForce = 0;
	let requestAnimationFrameId: number | null = null;

	const manageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const { movementX, movementY } = e;
		xForce += movementX * speed;
		yForce += movementY * speed;

		if (!requestAnimationFrameId) {
			requestAnimationFrameId = requestAnimationFrame(animate);
		}
	};

	const lerp = (start: number, end: number, amount: number) =>
		start * (1 - amount) + end * amount;

	const animate = () => {
		xForce = lerp(xForce, 0, easing);
		yForce = lerp(yForce, 0, easing);
		gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
		// gsap.set(plane2.current, {
		// 	x: `+=${xForce * 0.5}`,
		// 	y: `+=${yForce * 0.5}`,
		// }
		// );

		if (Math.abs(xForce) < 0.003) xForce = 0;
		if (Math.abs(yForce) < 0.003) yForce = 0;

		if (Math.abs(xForce) > 0 || Math.abs(yForce) > 0) {
			requestAnimationFrame(animate);
		} else {
			if (requestAnimationFrameId) {
				cancelAnimationFrame(requestAnimationFrameId);
				requestAnimationFrameId = null;
			}
		}
	};

	return (
		<>
			<div
				ref={plane1}
				onMouseMove={(e) => {
					manageMouseMove(e);
				}}
				className='absolute max-md:hidden inset-0 lg:h-full lg:w-full sm:h-[80svh] min-w-[1200px] z-0 opacity-40'
			>
				{[
					{
						src: images.mg7,
						aspect: "aspect-[1.8/2]",
						height: "h-[20%]",
						translate: "translate-x-[30dvw] translate-y-[56svh]",
					},
					{
						src: images.mg12,
						aspect: "aspect-[0.8/1]",
						height: "h-[26.5%]",
						translate: "translate-x-[64dvw] translate-y-[76svh]",
					},
					{
						src: images.mg6,
						aspect: "aspect-[1.8/2]",
						height: "h-[20%]",
						translate: "translate-x-[90dvw] translate-y-[86svh]",
					},
					{
						src: images.mg3,
						aspect: "aspect-[0.66/1]",
						height: "h-[28%]",
						translate: "translate-x-[34dvw] -translate-y-[3svh]",
					},
					{
						src: images.mg8,
						aspect: "aspect-[1.35/2]",
						height: "h-[23.6%]",
						translate: "translate-x-[12dvw] translate-y-[30svh]",
					},
					{
						src: images.mg15,
						aspect: "aspect-[0.7/1]",
						height: "h-[26.5%]",
						translate: "translate-x-[90dvw] translate-y-[4svh]",
					},
					{
						src: images.mg1,
						aspect: "aspect-[1.8/2]",
						height: "h-[26%]",
						translate: "translate-x-[94dvw] translate-y-[45svh]",
					},
					{
						src: images.mg10,
						aspect: "aspect-[1.66/2]",
						height: "h-[30%]",
						translate: "-translate-x-[12dvw] translate-y-[3svh]",
					},
					{
						src: images.mg9,
						aspect: "aspect-[1.86/2]",
						height: "h-[32%]",
						translate: "-translate-x-[2dvw] translate-y-[70svh]",
					},
					{
						src: images.mg13,
						aspect: "aspect-[1.22/1]",
						height: "h-[26.5%]",
						translate: "translate-x-[58dvw] -translate-y-[20svh]",
					},
					{
						src: images.mg5,
						aspect: "aspect-[0.8/1]",
						height: "h-[26.5%]",
						translate: "translate-x-[66dvw] translate-y-[24svh]",
					},
					{
						src: images.mg14,
						aspect: "aspect-[1.6/1]",
						height: "h-[16%]",
						translate: "translate-x-[10dvw] -translate-y-[10svh]",
					},
					{
						src: images.mg11,
						aspect: "aspect-[1.86/2]",
						height: "h-[32%]",
						translate: "translate-x-[30dvw] translate-y-[94svh]",
					},
				].map((image, index) => (
					<div
						key={index}
						style={{}}
						className={cn(
							"absolute",
							image.aspect,
							image.height,
							image.translate
						)}
					>
						<Image
							src={image.src}
							alt=''
							fill
							className='object-cover object-center'
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default DesktopBackground;
