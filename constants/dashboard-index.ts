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

export const Features: {
	heading: string;
	desc: string;
	img: StaticImageData;
	attributes: string[];
}[] = [
	{
		heading: "Stats & info throughtout their therapy journey",
		desc: "Used by Duolingo. Shows realtime info and builds trust, adds a feeling of progress right from the start and also sets a goal. ",
		img: images.mg10,
		attributes: ["Gamification", "Sets clear goals", "Feelings of progress"],
	},
	{
		heading: "Memories (images) from the therapy journey ",
		desc: "Used by Google itself. Photos from events, sessions, external activites, etc. Collaege of different memories.",
		img: images.mg10,
		attributes: [""],
	},
	{
		heading: "Their list of learnings from different sessions",
		desc: "Used by Spotify. Real time and instantaneous trust building",
		img: images.mg10,
		attributes: [""],
	},
	{
		heading: "Their mottos throughtout your different sessions",
		desc: "Like an Instagram bio. How we usually keep a sticky note besides a mirror or bed.",
		img: images.mg10,
		attributes: [""],
	},
];
