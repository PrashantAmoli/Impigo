import Image from 'next/image';
import demoImage from '@/assets/images/demo.gif';
import bottleImage from '@/assets/images/bottle.jpg';
import shoes1Image from '@/assets/images/shoes1.jpg';
import shoes2Image from '@/assets/images/shoes2.jpg';
import interior1Image from '@/assets/images/interior1.jpg';
import furniture1Image from '@/assets/images/furniture1.jpg';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

const features = [
	{
		name: 'Push to deploy.',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'SSL certificates.',
		description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
		icon: LockClosedIcon,
	},
	{
		name: 'Database backups.',
		description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
		icon: ServerIcon,
	},
];

export default function Services() {
	return (
		<div className="flex flex-col justify-center items-center overflow-x-hidden">
			<h1>Services</h1>

			<h2 className="text-center">Bring your products to life with 3D</h2>

			<div className="mockup-window border bg-base-300 w-11/12 max-w-4xl">
				<Image src={demoImage} width={300} height={300} alt="image" className="object-cover w-full h-full" />
			</div>

			<h2 className="text-center">Create personalized 3D experiences</h2>
			<h2 className="text-center">
				Marketing: Boost your brand by launch 3D marketing campaigns that can be customized and updated with new content to get users to keep coming
				back
			</h2>

			<div className="mockup-phone border-primary w-10/12 max-w-xs h-[66vh] overflow-hidden">
				<div className="camera"></div>
				<div className="display w-full h-[65vh] overflow-hidden pb-8">
					<Image src={interior1Image} width={300} height={600} alt="image" className="object-cover rounded-3xl w-full h-full" />
				</div>
			</div>
		</div>
	);
}
