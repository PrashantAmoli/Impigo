import Image from 'next/image';
import { SiUnity, SiNintendogamecube } from 'react-icons/si';
import { MdAnimation, MdArchitecture } from 'react-icons/md';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import demoImage from '@/assets/images/demo.gif';

const features = [
	{
		name: '3D Product Designs',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: <SiUnity className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />,
	},
	{
		name: 'AR Integrations',
		description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
		icon: <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />,
	},
	{
		name: 'CAD Model',
		description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
		icon: <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />,
	},
	{
		name: 'Game Assets',
		description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
		icon: <SiNintendogamecube className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />,
	},
	{
		name: 'Fashion',
		description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
		icon: <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />,
	},
	{
		name: 'Architecture',
		description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
		icon: <MdArchitecture className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />,
	},
	{
		name: 'Animation',
		description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
		icon: <MdAnimation className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />,
	},
];

const content = [
	'We pride ourselves on our commitment to quality, our attention to detail, and our ability to work closely with our clients to ensure that their needs are met at every step of the design process. We understand that every project is unique, and we take the time to listen to our client&apos;s needs and goals before developing a customized solution to meet their specific requirements.',
	'Our team of experienced designers and engineers uses the latest software and technology to create stunning 3D models of your products, buildings, or other designs. With our expertise in 3D modeling, we can create realistic and accurate models that allow you to visualize your ideas before they become a reality',
	'In addition to our 3D modeling design services, we also offer a range of complementary services, including prototyping, testing, and production. With our end-to-end design capabilities, we can help you take your ideas from concept to completion, ensuring that your final product meets your exact specifications and is ready for market.',
	"When it comes to finding the perfect 3D modeling design service for your needs, it's important to choose a company that has the experience, skills, and technology necessary to turn your vision into a reality. Our company provides high-quality 3D modeling design services to clients. wide range of industries, from product design to architecture and everything in between.",
];

export default function About() {
	return (
		<section className="w-full min-h-screen pt-16">
			{/* Content Sections - Sticky Scroll */}
			<section className="overflow-y-scroll h-screen scroll-smooth w-full hide-scrollbar">
				<div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
					<div className="absolute inset-0 -z-10 overflow-hidden">
						<svg
							className="absolute left-[max(50%,25rem)] top-0 h-[120rem] w-[50rem] sm:w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
							aria-hidden="true"
						>
							<defs>
								<pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
									<path d="M100 200V.5M.5 .5H200" fill="none" />
								</pattern>
							</defs>
							<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
								<path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
							</svg>
							<rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
						</svg>
					</div>
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
						<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
							<div className="lg:pr-4">
								<div className="lg:max-w-lg">
									<p className="text-base font-semibold leading-7 text-indigo-600">
										&quot;We believe in the power of collaboration and teamwork to achieve our goals.&quot;
									</p>
									<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Impigo Design&apos;s Pvt. Ltd.</h1>
									<p className="mt-6 text-base sm:text-lg leading-8 text-gray-100">
										Impigo Design&apos;s Pvt. Ltd. is a leading provider of services related to Design. Our team of experienced 3D artists and
										engineers can create highly detailed, photo-realistic models of your products, that accurately represent their look, feel, and
										functionality.
									</p>
								</div>
							</div>
						</div>
						<div className="lg:-ml-12 -mt-12 p-1 scale-110 sm:scale-100 lg:hover:scale-110 transition-all md:p-8 sm:pl-1 max-w-2xl sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
							{/* <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          /> */}
							<div className="mockup-window border border-base-300 gradient_white shadow_blue w-full h-fit sticky">
								<Image src={demoImage} width={300} height={300} alt="image" className="object-cover w-full h-full" />
							</div>
						</div>
						<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
							<div className="lg:pr-4">
								<div className="max-w-xl text-base leading-7 text-gray-100 lg:max-w-lg">
									<p>
										The models can be integrated into your website, allowing customers to interact with the product, zoom in, spin, and view it from
										different angles. This can help customers make an informed purchasing decision, as they can see the product in detail before they
										buy it.
									</p>
									<ul role="list" className="mt-8 space-y-8 text-gray-100">
										{features.map((item, index) => (
											<li className="flex gap-x-3" key={index}>
												{item.icon}
												<span>
													<strong className="font-semibold text-gray-100">{item.name}</strong>
													{item.description}
												</span>
											</li>
										))}
									</ul>
									{content.map((item, index) => (
										<p className="mt-8" key={index}>
											{item}
										</p>
									))}

									{/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-100"></h2>
									<div className="flex items-center gap-x-6">
										<img className="h-16 w-16 rounded-full" src="/images/logo.png" alt="" />
										<div>
											<h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-100">Vishal Kumar</h3>
											<p className="text-sm font-semibold leading-6 text-indigo-500">Founder</p>
											<a href="https://www.linkedin.com/in/vishal-kumar-19b2b6215/">
												<SiLinkedin />
											</a>
										</div>
									</div>
									<p className="mt-6">
										Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae
										interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus
										ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
									</p> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
