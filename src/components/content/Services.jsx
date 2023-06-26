import Image from 'next/image';
import demoImage from '@/assets/images/demo.gif';
import bottleImage from '@/assets/images/bottle.jpg';
import shoes1Image from '@/assets/images/shoes1.jpg';
import shoes2Image from '@/assets/images/shoes2.jpg';
import interior1Image from '@/assets/images/interior1.jpg';
import furniture1Image from '@/assets/images/furniture1.jpg';
import { ArrowLongRightIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import Data from '../../../db.json';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Reveal from '@/components/animations/Reveal';
import { ModelViewer, Stats } from '..';

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
	const slideInVariants = {
		hidden: {
			x: '-100vw',
		},
		visible: {
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 120,
				damping: 20,
			},
		},
	};

	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [10, 1], [10, 1]);

	const revealVariants = {
		hidden: {
			opacity: 0,
			y: 50,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: 'easeInOut',
			},
		},
	};
	// const [ref, inView] = useInView({
	// 	threshold: 0.4,
	// });

	return (
		<div className="flex flex-col justify-center items-center overflow-hidden px-3 py-12 gap-20 container mx-auto w-full max-w-7xl">
			<motion.div variants={slideInVariants} initial="hidden" animate="visible" className=" rounded-lg p-4">
				<motion.div
					initial={{ opacity: 0, y: '-100vh' }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 1, type: 'spring', bounce: 0.3 }}
				>
					<h1 className="text-red-500 text-center text-2xl font-bold">
						&quot;Decades of real implementation experience form the backbone of our solutions.&quot;
					</h1>
				</motion.div>
			</motion.div>

			{Data?.services.map((service, index) => {
				if (index % 2 !== 0)
					return (
						<div key={index} className="flex flex-col sm:flex-row-reverse gap-5 sm:gap-7 justify-between items-center min-h-[70vh]">
							<Reveal from="left">
								<div className="flex flex-col justify-evenly gap-6 min-h-[60vh]">
									<div className="w-full flex flex-col gap-5">
										<h2 className="text-3xl sm:text-4xl font-bold">{service.title}</h2>
										<div className="">
											{service.tags.map((tag, index) => (
												<span
													key={index}
													className="inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-900 rounded-full mr-2 mb-2 hover:scale-105 transition-all duration-300 shadow_blue"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
									<ul className="flex flex-col gap-2 pl-1.5">
										{service.content.map((item, index) => (
											<li key={index} className="flex items-start justify-start gap-2">
												<ArrowLongRightIcon className="h-6 w-8 font-semibold text-primary" />
												<span>{item}</span>
											</li>
										))}
									</ul>

									<a href="#contact" className="btn btn-ghost">
										Learn more
									</a>
								</div>
							</Reveal>

							<Reveal from="right">
								<div className="mockup-window border border-base-300 bg-base-300/20 w-11/12 max-w-4xl scale-95 hover:scale-100 transition-all">
									<Image src={service.images[0]} width={400} height={400} alt="image" className="object-cover w-full h-full" />
								</div>
							</Reveal>
						</div>
					);
				else
					return (
						<div key={index} className="flex flex-col sm:flex-row gap-5 sm:gap-7 justify-between min-h-[70vh]">
							<Reveal from="right">
								<div className="flex flex-col justify-evenly gap-6 min-h-[60vh]">
									<div className="w-full flex flex-col gap-5">
										<h2 className="text-3xl sm:text-4xl font-bold">{service.title}</h2>
										<div className="">
											{service.tags.map((tag, index) => (
												<span
													key={index}
													className="inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-900 rounded-full mr-2 mb-2 hover:scale-105 transition-all duration-300 shadow_blue"
												>
													{tag}
												</span>
											))}
										</div>
									</div>

									<ul className="flex flex-col gap-2 pl-1.5">
										{service.content.map((item, index) => (
											<li key={index} className="flex items-start justify-start gap-2">
												<ArrowLongRightIcon className="h-6 w-8 font-semibold text-primary" />
												<span>{item}</span>
											</li>
										))}
									</ul>

									<a href="#contact" className="btn btn-ghost">
										Learn more
									</a>
								</div>
							</Reveal>

							<motion.div style={{ scale }}>
								<motion.div
									style={{
										scaleY: scrollYProgress,
									}}
								></motion.div>

								<Reveal from="left">
									<div className="mockup-phone border-primary mx-auto scale-75 hover:scale-90 sm:scale-90 sm:hover:scale-95 transition-all shadow-blue-600/30 hover:shadow-blue-600/30 shadow-xl hover:shadow-2xl">
										<div className="camera"></div>
										<div className="display">
											<div className="artboard artboard-demo phone-1 overflow-hidden">
												{service?.models ? (
													<div className="flex gradient_blue backdrop-blur-md bg-opacity-5 w-full h-full">
														<ModelViewer src={service.models[0]} poster={service.images[0]} />
													</div>
												) : (
													<Image src={service.images[0]} width={300} height={600} alt="image" className="object-cover rounded-3xl w-full h-full" />
												)}
											</div>
										</div>
									</div>
								</Reveal>
							</motion.div>
						</div>
					);
			})}
			{/* <motion.div ref={ref} variants={revealVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
			</motion.div> */}

			<Stats />

			{/* <h2 className="sm:text-center text-2xl sm:text-4xl font-bold">Bring your products to life with 3D</h2>

			<div className="flex flex-col sm:flex-row-reverse gap-5 sm:gap-7">
				<Reveal from="left">
					<div className="flex flex-col justify-center gap-6">
						<h2 className="text-3xl sm:text-4xl font-bold">Create personalized 3D experiences</h2>
						<h2 className="sm:text-lg font-semibold max-w-2xl">
							Boost your brand by launch 3D marketing campaigns that can be customized and updated with new content to get users to keep coming back
						</h2>
					</div>
				</Reveal>

				<Reveal from="right">
					<div className="mockup-window border border-base-300 bg-base-300/20 w-11/12 max-w-4xl scale-95 hover:scale-100 transition-all">
						<Image src={demoImage} width={300} height={300} alt="image" className="object-cover w-full h-full" />
					</div>
				</Reveal>
			</div>

			<div className="flex flex-col sm:flex-row gap-5 sm:gap-7">
				<Reveal from="right">
					<div className="flex flex-col justify-center gap-6">
						<h2 className="text-3xl sm:text-4xl font-bold">Create personalized 3D experiences</h2>
						<h2 className="sm:text-lg font-semibold max-w-2xl">
							Boost your brand by launch 3D marketing campaigns that can be customized and updated with new content to get users to keep coming back
						</h2>
					</div>
				</Reveal>

				<Reveal from="left">
					<div className="mockup-phone border-primary mx-auto scale-75 hover:scale-90 sm:scale-90 sm:hover:scale-95 transition-all shadow-blue-600/30 hover:shadow-blue-600/30 shadow-xl hover:shadow-2xl">
						<div className="camera"></div>
						<div className="display">
							<div className="artboard artboard-demo phone-1">
								<Image src={interior1Image} width={300} height={600} alt="image" className="object-cover rounded-3xl w-full h-full" />
							</div>
						</div>
					</div>
				</Reveal>
			</div> */}

			{/* <div className="mockup-window border bg-base-300/20 border-base-100 w-11/12 max-w-4xl shadow_blue hover:scale-105 transition-all">
				<Image src={demoImage} width={300} height={300} alt="image" className="object-cover w-full h-full" />
			</div> */}
		</div>
	);
}
