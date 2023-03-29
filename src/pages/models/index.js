import Head from 'next/head';
import Image from 'next/image';

export default function ModelsPage() {
	return (
		<>
			<Head>
				<title>Model Demo by Impigo Design&apos;s</title>
			</Head>

			<main>
				<h1>Model List</h1>

				<section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 sm:p-9 gap-9 justify-items-center">
					<div className="card w-full h-80 gradient_white shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105  overflow-hidden">
						{/* unsplash random images api */}
						<Image src="/images/demo1.png" alt="3D Model" height={300} width={300} className="w-full h-64 object-cover" />
						<div className="flex px-3 items-center h-16">
							<span className="truncate font-semibold">3D Product full title like Apple Macbook Pro Max</span>
						</div>
					</div>

					<div className="card w-full h-80 gradient_white shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105  overflow-hidden">
						{/* unsplash random images api */}
						<Image src="/images/demo1.png" alt="3D Model" height={300} width={300} className="w-full h-64 object-cover" />
						<div className="flex px-3 items-center h-16">
							<span className="truncate font-semibold">3D Product full title like Apple Macbook Pro Max</span>
						</div>
					</div>
					<div className="card w-full h-80 gradient_white shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105  overflow-hidden">
						{/* unsplash random images api */}
						<Image src="/images/demo1.png" alt="3D Model" height={300} width={300} className="w-full h-64 object-cover" />
						<div className="flex px-3 items-center h-16">
							<span className="truncate font-semibold">3D Product full title like Apple Macbook Pro Max</span>
						</div>
					</div>
					<div className="card w-full h-80 gradient_white shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105  overflow-hidden">
						{/* unsplash random images api */}
						<Image src="/images/demo1.png" alt="3D Model" height={300} width={300} className="w-full h-64 object-cover" />
						<div className="flex px-3 items-center h-16">
							<span className="truncate font-semibold">3D Product full title like Apple Macbook Pro Max</span>
						</div>
					</div>
					<div className="card w-full h-80 gradient_white shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105  overflow-hidden">
						{/* unsplash random images api */}
						<Image src="/images/demo1.png" alt="3D Model" height={300} width={300} className="w-full h-64 object-cover" />
						<div className="flex px-3 items-center h-16">
							<span className="truncate font-semibold">3D Product full title like Apple Macbook Pro Max</span>
						</div>
					</div>
					<div className="card w-full h-80 gradient_white shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105  overflow-hidden">
						{/* unsplash random images api */}
						<Image src="/images/demo1.png" alt="3D Model" height={300} width={300} className="w-full h-64 object-cover" />
						<div className="flex px-3 items-center h-16">
							<span className="truncate font-semibold">3D Product full title like Apple Macbook Pro Max</span>
						</div>
					</div>
					<div className="card w-full h-80 gradient_white shadow-blue-600/30 hover:shadow-blue-600/50 shadow-xl hover:shadow-2xl transition-all hover:scale-105  overflow-hidden">
						{/* unsplash random images api */}
						<Image src="/images/demo1.png" alt="3D Model" height={300} width={300} className="w-full h-64 object-cover" />
						<div className="flex px-3 items-center h-16">
							<span className="truncate font-semibold">3D Product full title like Apple Macbook Pro Max</span>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
