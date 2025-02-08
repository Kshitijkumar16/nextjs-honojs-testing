export const AUTH_COOKIE = "nextjs-honojs-test";

import images from "../constants/images";
import icons from "../constants/icons";

export { images, icons };

export const Instructions: { text: string; attribute: "normal" | "boxed" }[][] =
	[
		[
			{ text: "Hi,", attribute: "normal" },
			{ text: "sweet", attribute: "normal" },
			{ text: "new", attribute: "normal" },
			{ text: "friend!", attribute: "boxed" },
		],
		[
			{ text: "Here", attribute: "normal" },
			{ text: "are", attribute: "normal" },
			{ text: "3", attribute: "normal" },
			{ text: "easy", attribute: "normal" },
			{ text: "steps", attribute: "normal" },
			{ text: "to", attribute: "normal" },
			{ text: "be better", attribute: "boxed" },
		],
		[
			{ text: "Step 1:", attribute: "normal" },
			{ text: "Log in", attribute: "boxed" },
			{ text: "to", attribute: "normal" },
			{ text: "our", attribute: "normal" },
			{ text: "platform", attribute: "normal" },
		],
		[
			{ text: "Step 2:", attribute: "normal" },
			{ text: "Choose", attribute: "normal" },
			{ text: "a", attribute: "normal" },
			{ text: "date & time", attribute: "boxed" },
		],
		[
			{ text: "Step 3:", attribute: "normal" },
			{ text: "Talk", attribute: "boxed" },
			{ text: "your", attribute: "normal" },
			{ text: "heart", attribute: "normal" },
			{ text: "out", attribute: "normal" },
		],
		[
			{ text: "So,", attribute: "normal" },
			{ text: "ready", attribute: "normal" },
			{ text: "to", attribute: "normal" },
			{ text: "begin", attribute: "normal" },
			{ text: "your", attribute: "normal" },
			{ text: "journey?", attribute: "boxed" },
		],
	];

export const GenderList: { title: string; value: string }[] = [
	{ title: "Male", value: "male" },
	{ title: "Female", value: "female" },
	{ title: "Other", value: "other" },
];
