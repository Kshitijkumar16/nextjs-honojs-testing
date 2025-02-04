"use client";
   import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const Marquee = ({
	children,
	speed,
	startTrigger,
	endTrigger,
	movement = "-=300px",
	reverse = true,
	direction = -1,
}: {
	children: React.ReactNode;
	speed: number;
	startTrigger: number | string;
	endTrigger: number | string;
	movement?: string;
	reverse?: boolean;
	direction?: 1 | -1;
}) => {
	const div1 = useRef<HTMLDivElement | null>(null);
	const div2 = useRef<HTMLDivElement | null>(null);
	const slider = useRef<HTMLDivElement | null>(null);

	let xPercent = 0;

	let nSpeed = speed * 1;

	useEffect(() => {
		const isMobile = window.innerWidth < 460;
		if (isMobile) {
			nSpeed = speed * 2;
		}
	}, []);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		requestAnimationFrame(animation);

		if (slider.current) {
			gsap.to(slider.current, {
				scrollTrigger: {
					trigger: document.documentElement,
					start: startTrigger,
					end: endTrigger,
					scrub: 0.25,
					onUpdate: (e) => (direction = e.direction * -1),
				},
				x: movement,
			});
		}
	}, []);

	const animation = () => {
		if (div1.current && div2.current) {
			if (xPercent <= -100) {
				xPercent = 0;
			}
			if (xPercent > 0) {
				xPercent = -100;
			}
			gsap.set(div1.current, { xPercent: xPercent });
			gsap.set(div2.current, { xPercent: xPercent });
			if (reverse) {
				xPercent += nSpeed * direction;
			} else {
				xPercent += nSpeed;
			}
			requestAnimationFrame(animation);
		}
	};

	return (
		<div
			ref={slider}
			className='flex w-full relative group'
		>
			<div ref={div1}>{children}</div>
			<div ref={div2}>{children}</div>
		</div>
	);
};

export default Marquee;
