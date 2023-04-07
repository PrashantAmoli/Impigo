import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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

			<main className="w-full pt-16 pb-7">
				<h2 className="text-center font-bold text-2xl pt-4">3D Product Demo List</h2>

				<section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 py-9 sm:p-9 gap-9 justify-items-center">
					{ProductsList.map((item, index) => (
						<Link
							href={`/gallery/${item.id}`}
							key={index}
							className="card w-full h-80 gradient_white shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105  overflow-hidden"
						>
							{/* unsplash random images api */}
							<Image src={item.image} alt="3D Model" height={300} width={300} className="w-full h-64 object-cover" />
							<div className="flex px-3 items-center h-16">
								<span className="truncate font-semibold">{item.title}</span>
							</div>
						</Link>
					))}
				</section>
			</main>
		</>
	);
}
