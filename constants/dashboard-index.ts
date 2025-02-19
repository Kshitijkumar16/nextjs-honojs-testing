import { ImageProps, StaticImageData } from "next/image";
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

interface ProfileDataInterface {
	title: string;
	time: string;
	status: "cancelled" | "done" | "upcoming" | "rescheduled";
	value: string;
	desc: string;
	longDesc: string;
	date: string;
	img: StaticImageData;
}

export const ProfileFillerData: ProfileDataInterface[] = [
	{
		title: "Lorem ipsum",
		status: "upcoming",
		time: "14:00 - 14:45",
		value: " dolor",
		desc: "sit amet consectetur adipisicing elit.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident aut distinctio dolore temporibus nihil nemo qui beatae eos molestias similique.",
		date: "12-02-25",
		img: images.mg4,
	},
	{
		title: "Lorem ipsum",
		status: "done",
		time: "13:00 - 13:45",
		value: " dolor",
		desc: "sit amet consectetur adipisicing elit.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident aut distinctio dolore temporibus nihil nemo qui beatae eos molestias similique.",
		date: "05-02-25",
		img: images.mg5,
	},
	{
		title: "Lorem ipsum",
		status: "done",
		time: "14:00 - 14:45",
		value: " dolor",
		desc: "sit amet consectetur adipisicing elit.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident aut distinctio dolore temporibus nihil nemo qui beatae eos molestias similique.",
		date: "29-01-25",
		img: images.mg6,
	},
	{
		title: "Lorem ipsum",
		status: "rescheduled",
		time: "15:00 - 15:45",
		value: " dolor",
		desc: "sit amet consectetur adipisicing elit.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident aut distinctio dolore temporibus nihil nemo qui beatae eos molestias similique.",
		date: "16-01-25",
		img: images.mg8,
	},
	{
		title: "Lorem ipsum",
		status: "cancelled",
		time: "16:00 - 16:45",
		value: " dolor",
		desc: "sit amet consectetur adipisicing elit.",
		longDesc:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident aut distinctio dolore temporibus nihil nemo qui beatae eos molestias similique.",
		date: "08-01-25",
		img: images.mg9,
	},
];
