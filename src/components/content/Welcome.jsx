import Image from 'next/image';
import Link from 'next/link';
import { GradientBox, ModelViewer } from '..';

export default function Welcome() {
	return (
		<div className="w-full min-h-screen overflow-hidden">
			<div className="relative">
				<GradientBox>
					<div className="absolute z-10 hero min-h-screen">
						<div className="hero-content -mt-10 flex-col-reverse justify-evenly gap-7 sm:gap-1 lg:flex-row-reverse w-full max-w-7xl">
							<Image src="/ImpigoLogo.png" width={500} height={800} alt="icon" className="max-w-xs rounded-lg" />
							{/* <div className="flex flex-col items-center relative">
								<ModelViewer src={'/models/model1.glb'} />
							</div> */}

							<div className="flex flex-col gap-7 ">
								<h1 className="text-5xl font-bold">Impigo Designs</h1>
								<div className="flex flex-col gap-2 ">
									<p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi quasi.</p>
									<p>In deleniti eaque aut repudiandaeet a id nisi.</p>
								</div>
								<div className="flex gap-5 items-center">
									<Link href="/models" className="">
										<button className="btn btn-primary">Explore</button>
									</Link>

									<Link href="/home" className=" font-semibold leading-6 text-gray-300">
										Learn more <span aria-hidden="true">→</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</GradientBox>
			</div>
		</div>
	);
}
