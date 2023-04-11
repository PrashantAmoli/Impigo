import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay, Pagination } from 'swiper';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Data from '../../../db.json';

const ProductsList = [
	{
		id: 1,
		title: '3D Product full title like Apple Macbook Pro Max',
		image: '/images/demo1.png',
		model_src: '/models/demo1.glb',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum? Doloremque, voluptate. Quos, quia. Quisquam, quod? Quia, quidem. Quisquam, quod? Quia, quidem. Quisquam, quod? Quia, quidem.',
	},
	{
		id: 2,
		title: '3D Product full title like Apple Macbook Pro Max',
		image: '/images/demo1.png',
		model_src: '/models/demo1.glb',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum? Doloremque, voluptate. Quos, quia. Quisquam, quod? Quia, quidem. Quisquam, quod? Quia, quidem. Quisquam, quod? Quia, quidem.',
	},
	{
		id: 3,
		title: '3D Product full title like Apple Macbook Pro Max',
		image: '/images/demo1.png',
		model_src: '/models/demo1.glb',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum? Doloremque, voluptate. Quos, quia. Quisquam, quod? Quia, quidem. Quisquam, quod? Quia, quidem. Quisquam, quod? Quia, quidem.',
	},
	{
		id: 4,
		title: '3D Product full title like Apple Macbook Pro Max',
		image: '/images/demo1.png',
		model_src: '/models/demo1.glb',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum? Doloremque, voluptate. Quos, quia. Quisquam, quod? Quia, quidem. Quisquam, quod? Quia, quidem. Quisquam, quod? Quia, quidem.',
	},
	{
		id: 5,
		title: '3D Product full title like Apple Macbook Pro Max',
		image: '/images/demo1.png',
		model_src: '/models/demo1.glb',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum? Doloremque, voluptate. Quos, quia. Quisquam, quod? Quia, quidem. Quisquam, quod? Quia, quidem. Quisquam, quod? Quia, quidem.',
	},
];

export default function GalleryPage() {
	return (
		<>
			<Head>
				<title>Gallery @ Impigo Design&apos;s</title>
			</Head>

			<main className="w-full pb-7">
				<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-3 py-9 sm:p-9 gap-24 sm:gap-16 justify-items-center">
					{/* {ProductsList.map((item, index) => ( md:grid-cols-2 
						<Link
							href={`/gallery/${item.id}`}
							key={index}
							className="card w-full h-80 gradient_white shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105  overflow-hidden"
						>
							<Image src={item.image} alt="3D Model" height={300} width={300} className="w-full h-64 object-cover" />
							<div className="flex px-3 items-center h-16">
								<span className="truncate font-semibold">{item.title}</span>
							</div>
						</Link>
					))} */}
					{Data.gallery.map((item, index) => (
						<div
							key={index}
							className="w-full max-w-2xl"
							// className="card w-fit gradient_white shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105  overflow-hidden"
						>
							<h2 className="text-center text-xl font-semibold py-3">{item.title}</h2>
							<Swiper
								modules={[EffectCube, Autoplay, Pagination]}
								effect={'cube'}
								grabCursor={true}
								slidesPerView={'auto'}
								pagination={true}
								loop={true}
								autoplay={{
									delay: 2000,
									disableOnInteraction: false,
								}}
								className="mySwiper w-full py-9"
							>
								{item.images.map((image, index) => (
									<SwiperSlide key={index} className="hover:scale-105 transition-all bg-center bg-cover">
										<Image src={image} alt="3D Model" height={300} width={300} className="h-96 w-full object-contain" />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					))}
				</section>
			</main>
		</>
	);
}
