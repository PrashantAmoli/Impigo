import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper';

import bottleImage from '@/assets/images/bottle.jpg';
import shoes1Image from '@/assets/images/shoes1.jpg';
import shoes2Image from '@/assets/images/shoes2.jpg';
import furniture1Image from '@/assets/images/furniture1.jpg';
import Image from 'next/image';

const stats = [
	{ id: 1, name: 'Transactions every 24 hours', value: '44 million' },
	{ id: 2, name: 'Assets under holding', value: '$119 trillion' },
	{ id: 3, name: 'New users annually', value: '46,000' },
];

export default function Stats() {
	return (
		<>
			{/* CTA Section */}
			<div className="px-1.5 py-8">
				<div className="mx-auto w-full overflow-hidden rounded-3xl max-w-7xl py-0 sm:px-6 sm:py-32 lg:px-8 shadow_blue shadow-lg hover:shadow-xl">
					<div className="relative isolate overflow-hidden w-full bg-gray-900 px-2 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 min-h-screen sm:min-h-[66vh]">
						<svg
							viewBox="0 0 1024 1024"
							className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
							aria-hidden="true"
						>
							<circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
							<defs>
								<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
									<stop stopColor="#7775D6" />
									<stop offset={1} stopColor="#E935C1" />
								</radialGradient>
							</defs>
						</svg>

						<div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
							<h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
								Boost your creativity.
								<br />
								Begin your journey into 3D.
							</h2>
							<p className="mt-6 text-lg leading-8 text-gray-300"></p>
							<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
								<Link
									href="/contact"
									className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
								>
									Contact Us
								</Link>
								<Link href="/gallery" className="text-sm font-semibold leading-6 text-white">
									Explore <span aria-hidden="true">→</span>
								</Link>
							</div>
						</div>

						<div className="relative mt-16 h-80 lg:mt-8">
							{/* <img
								className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
								src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
								alt="App screenshot"
								width={1824}
								height={1080}
							/> */}
							<Swiper
								modules={[EffectCards, Autoplay, Pagination]}
								effect={'cards'}
								grabCursor={true}
								loop={true}
								autoplay={{
									delay: 2000,
									disableOnInteraction: false,
								}}
								className="mySwiper mx-auto w-10/12 max-w-md p-12"
							>
								<SwiperSlide className="overflow-hidden hover:scale-105 transition-all">
									<Image
										src={furniture1Image}
										width={300}
										height={550}
										alt="Demo Product Images"
										className="w-72 h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all "
									/>
								</SwiperSlide>
								<SwiperSlide className="overflow-hidden hover:scale-105 transition-all">
									<Image
										src={bottleImage}
										width={300}
										height={550}
										alt="Demo Product Images"
										className="w-72 h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all "
									/>
								</SwiperSlide>
								<SwiperSlide className="overflow-hidden hover:scale-105 transition-all">
									<Image
										src={shoes1Image}
										width={300}
										height={550}
										alt="Demo Product Images"
										className="w-72 h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all "
									/>
								</SwiperSlide>
								<SwiperSlide className="overflow-hidden hover:scale-105 transition-all">
									<Image
										src={shoes2Image}
										width={300}
										height={550}
										alt="Demo Product Images"
										className="w-72 h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all "
									/>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
