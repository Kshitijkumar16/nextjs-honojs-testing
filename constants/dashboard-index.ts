import images from "./images";

export const DASHBOARDPAGE_URL = "/dashboard";
export const PROFILEPAGE_URL = "/profile";
export const CREATEPAGE_URL = "/create";

export const DashboardTabs: { title: string; value: DashActiveTab }[] = [
	{ title: "Mantra", value: "mantra" },
	{ title: "Learnings", value: "learnings" },
	{ title: "Appointments", value: "appointments" },
];

export const ProfilePersonalFilters: ProfilePersonalFilter[] = [
	"Your mantras",
	"Your learnings",
	"Memories made",
];

export const ProfileDataFilters: ProfileDataFilters[] = [
	"Appointments",
	"Purchases",
];

export const ProfileFillerData = [
	{
		title: "Lorem ipsum",
		value: " dolor",
		desc: "sit amet consectetur adipisicing elit.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident aut distinctio dolore temporibus nihil nemo qui beatae eos molestias similique.",
		date: "12-02-25",
		img: images.mg4,
	},
	{
		title: "Lorem ipsum",
		value: " dolor",
		desc: "sit amet consectetur adipisicing elit.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident aut distinctio dolore temporibus nihil nemo qui beatae eos molestias similique.",
		date: "12-02-25",
		img: images.mg5,
	},
	{
		title: "Lorem ipsum",
		value: " dolor",
		desc: "sit amet consectetur adipisicing elit.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident aut distinctio dolore temporibus nihil nemo qui beatae eos molestias similique.",
		date: "12-02-25",
		img: images.mg6,
	},
];
