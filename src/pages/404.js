import Link from 'next/link';

export default function Custom404Page() {
	return (
		<>
			<main className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8 min-h-[73vh]">
				<div className="text-center">
					<p className="text-base font-semibold text-indigo-600">404</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">Page not found</h1>
					<p className="mt-6 text-base leading-7 text-gray-300">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							href="/"
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Go back home
						</Link>
						<Link href="/" className="text-sm font-semibold text-gray-100">
							Contact support <span aria-hidden="true">&rarr;</span>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
