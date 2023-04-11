import Image from 'next/image';
import Link from 'next/link';
import { GradientBox, ModelViewer } from '..';
import demoImage from '@/assets/images/demo.gif';

export default function Welcome() {
	return (
		<>
			<div className="w-full min-h-screen overflow-hidden">
				<div className="relative">
					<GradientBox>
						<div className="absolute z-10 hero min-h-screen">
							<div className="hero-content -mt-10 flex-col-reverse justify-evenly gap-7 sm:gap-1 lg:flex-row-reverse lg:items-start w-full max-w-7xl">
								<Image src="/ImpigoLogo.png" width={500} height={800} alt="icon" className="max-w-xs rounded-lg" />
								{/* <div className="flex flex-col items-center relative">
								<ModelViewer src={'/models/model1.glb'} />
							</div> */}

								<div className="flex flex-col gap-5 pt-20 pb-16 lg:p-0">
									<h1 className="text-4xl sm:text-5xl font-bold tracking-wider font-SpaceX">IMPIGO DESIGNS</h1>
									<p className="flex flex-col gap-2 sm:text-lg sm:tracking-widest capitalize font-semibold">ADDING CREATIVITY TO YOUR TRIUMPH</p>
									<div className="flex mt-4 gap-6 items-center">
										<Link href="/services" className="">
											<button className="btn btn-primary">Explore</button>
										</Link>

										<Link href="/home" className=" font-semibold leading-6 text-gray-300">
											Speak with us <span aria-hidden="true">→</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</GradientBox>
				</div>
			</div>

			<h2 className="text-center text-red-500 text-xl sm:text-2xl font-semibold mb-16 py-4">
				&quot;We believe in the power of collaboration and teamwork to achieve our goals.&quot;
			</h2>

			<div className="mockup-window border bg-base-300/20 border-base-100 w-11/12 max-w-4xl shadow_blue hover:scale-105 transition-all mx-auto overflow-hidden">
				<Image src={demoImage} width={500} height={400} alt="image" className="object-cover w-full h-full" />
			</div>
		</>
	);
}
