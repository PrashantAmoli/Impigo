import Image from 'next/image';
import demoImage from '@/assets/images/demo.gif';
import bottleImage from '@/assets/images/bottle.jpg';
import shoes1Image from '@/assets/images/shoes1.jpg';
import shoes2Image from '@/assets/images/shoes2.jpg';
import interior1Image from '@/assets/images/interior1.jpg';
import furniture1Image from '@/assets/images/furniture1.jpg';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import Data from '../../../db.json';

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
		<div className="flex flex-col justify-center items-center overflow-hidden px-2 py-12 gap-20 container mx-auto w-full max-w-7xl">
			<h1 className="text-red-500 text-center text-2xl font-bold">
				&quot;Decades of real implementation experience form the backbone of our solutions.&quot;
			</h1>

			{Data?.services.map((service, index) => {
				if (index % 2 !== 0)
					return (
						<div key={index} className="flex flex-col sm:flex-row-reverse gap-5 sm:gap-7">
							<div className="flex flex-col justify-center gap-6">
								<h2 className="text-3xl sm:text-4xl font-bold">{service.title}</h2>
								<h2 className="sm:text-lg font-semibold max-w-2xl">
									Boost your brand by launch 3D marketing campaigns that can be customized and updated with new content to get users to keep coming
									back
								</h2>
								<ul className="flex flex-col gap-2 pl-2">
									{service.content.map((item, index) => (
										<li key={index} className="flex items-center gap-2">
											<CloudArrowUpIcon className="w-5 h-5 text-primary" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="mockup-window border border-base-300 bg-base-300/20 w-11/12 max-w-4xl scale-95 hover:scale-100 transition-all">
								<Image src={service.images[0]} width={400} height={400} alt="image" className="object-cover w-full h-full" />
							</div>
						</div>
					);
				else
					return (
						<div key={index} className="flex flex-col sm:flex-row gap-5 sm:gap-7">
							<div className="flex flex-col justify-center gap-6">
								<h2 className="text-3xl sm:text-4xl font-bold">{service.title}</h2>
								<h2 className="sm:text-lg font-semibold max-w-2xl">
									Boost your brand by launch 3D marketing campaigns that can be customized and updated with new content to get users to keep coming
									back
								</h2>
								<ul className="flex flex-col gap-2 pl-2">
									{service.content.map((item, index) => (
										<li key={index} className="flex items-center gap-2">
											<CloudArrowUpIcon className="w-5 h-5 text-primary" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="mockup-phone border-primary mx-auto scale-75 hover:scale-90 sm:scale-90 sm:hover:scale-95 transition-all shadow-blue-600/30 hover:shadow-blue-600/30 shadow-xl hover:shadow-2xl">
								<div className="camera"></div>
								<div className="display">
									<div className="artboard artboard-demo phone-1">
										<Image src={service.images[0]} width={300} height={600} alt="image" className="object-cover rounded-3xl w-full h-full" />
									</div>
								</div>
							</div>
						</div>
					);
			})}

			<h2 className="sm:text-center text-2xl sm:text-4xl font-bold">Bring your products to life with 3D</h2>

			<div className="flex flex-col sm:flex-row-reverse gap-5 sm:gap-7">
				<div className="flex flex-col justify-center gap-6">
					<h2 className="text-3xl sm:text-4xl font-bold">Create personalized 3D experiences</h2>
					<h2 className="sm:text-lg font-semibold max-w-2xl">
						Boost your brand by launch 3D marketing campaigns that can be customized and updated with new content to get users to keep coming back
					</h2>
				</div>

				<div className="mockup-window border border-base-300 bg-base-300/20 w-11/12 max-w-4xl scale-95 hover:scale-100 transition-all">
					<Image src={demoImage} width={300} height={300} alt="image" className="object-cover w-full h-full" />
				</div>
			</div>

			<div className="flex flex-col sm:flex-row gap-5 sm:gap-7">
				<div className="flex flex-col justify-center gap-6">
					<h2 className="text-3xl sm:text-4xl font-bold">Create personalized 3D experiences</h2>
					<h2 className="sm:text-lg font-semibold max-w-2xl">
						Boost your brand by launch 3D marketing campaigns that can be customized and updated with new content to get users to keep coming back
					</h2>
				</div>

				<div className="mockup-phone border-primary mx-auto scale-75 hover:scale-90 sm:scale-90 sm:hover:scale-95 transition-all shadow-blue-600/30 hover:shadow-blue-600/30 shadow-xl hover:shadow-2xl">
					<div className="camera"></div>
					<div className="display">
						<div className="artboard artboard-demo phone-1">
							<Image src={interior1Image} width={300} height={600} alt="image" className="object-cover rounded-3xl w-full h-full" />
						</div>
					</div>
				</div>
			</div>

			{/* <div className="mockup-window border bg-base-300/20 border-base-100 w-11/12 max-w-4xl shadow_blue hover:scale-105 transition-all">
				<Image src={demoImage} width={300} height={300} alt="image" className="object-cover w-full h-full" />
			</div> */}
		</div>
	);
}
