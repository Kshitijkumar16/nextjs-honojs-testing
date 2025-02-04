import { Mona_Sans } from "next/font/google";
import localFont from "next/font/local";

export const mona = Mona_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-mona",
});

export const branch = localFont({
	src: "../public/fonts/Branch.ttf",
	display: "swap",
	variable: "--font-branch",
});
