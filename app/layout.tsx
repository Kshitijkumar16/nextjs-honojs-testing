import type { Metadata } from "next";
import "./globals.css";
import { branch, mona } from "@/providers/fonts";
import { Toaster } from "@/components/ui/toaster";
import { QueryProvider } from "@/providers/query-provider";

export const metadata: Metadata = {
	title: "Modern Therapist | (R)evolution Studios",
	description: "Example website.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${mona.variable} ${branch.variable} max-w-[1920px] mx-auto bg-black relative selection:bg-white selection:text-yellow-700`}
			>
				<QueryProvider>
					{/* navbar */}
					{/* actual page */}
					{children}
					{/* toaster and footer */}
					<Toaster />
				</QueryProvider>
			</body>
		</html>
	);
}
