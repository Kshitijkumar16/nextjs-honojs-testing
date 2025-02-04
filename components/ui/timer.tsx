"use client";

import { useEffect, useState } from "react";

interface TimerProps {
	seconds: number;
	onComplete: () => void;
}

const Timer = ({ seconds, onComplete }: TimerProps) => {
	const [timeLeft, setTimeLeft] = useState<number>(seconds);

	useEffect(() => {
		if (timeLeft === 0) {
			onComplete();
			return;
		}

		const timer = setInterval(() => {
			setTimeLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft, onComplete]);

	return (
		<p className='text-white/70 font-branch text-lg'>Resend in {timeLeft}s</p>
	);
};

export default Timer;
