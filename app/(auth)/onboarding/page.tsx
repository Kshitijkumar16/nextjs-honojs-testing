import { getCurrent } from "@/app/actions";
import { images } from "@/constants";
import Image from "next/image";
import { redirect } from "next/navigation";

const OnboardingPage = async () => {
	const user = await getCurrent();

	if (!user) redirect("/login");
	if (user.phoneVerification === true) redirect("/dashboard");

	return (
		<div className='flex justify-between min-h-screen lg:gap-14'>
			<div className='max-w-[640px] lg:flex hidden w-[40%] py lg:pl max-lg:px'>
				<div className='relative h-full w-full py px'>
					<div className='absolute z-0 h-full w-full top-0 left-0 border border-white/20 rounded-[24px] overflow-hidden'>
						<Image
							src={images.mg3}
							alt=''
							fill
							className='object-cover object-top'
						/>
						<div className='absolute h-full w-full inset-0 bg-gradient-to-b from-transparent via-black/75 to-black' />
					</div>
					<div className='relative z-10'>
						{/* testimonials */}
						<div className='flex'>
							<p className=''></p>
						</div>
					</div>
				</div>
			</div>
			<div className='lg:w-[60%] w-[100%] lg:pr max-lg:px py overflo'>
				<div className='h-full w-full'></div>
			</div>
		</div>
	);
};

export default OnboardingPage;
