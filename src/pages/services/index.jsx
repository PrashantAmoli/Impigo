import { Services } from '@/components';
import Head from 'next/head';

export default function ServicesPage() {
	return (
		<>
			<Head>
				<title>Services by Impigo Design&apos;s</title>
			</Head>

			<main className="w-full overflow-x-hidden pb-10">
				<Services />
			</main>
		</>
	);
}
