import { About } from '@/components';
import Head from 'next/head';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About Impigo Design&apos;s</title>
			</Head>

			<main className="w-full">
				<About />
			</main>
		</>
	);
}
