import { getCurrent } from "@/app/actions";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/");

	return (
		<div className='h-screen flex flex-col justify-center items-center'></div>
	);
};

export default DashboardPage;
