import { About, Services, Stats, Welcome } from '@/components';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Head>
				<title>Impigo Design&apos;s Pvt. Ltd.</title>
				<meta name="title" content="Impigo Design's Pvt. Ltd." />
				<meta
					name="description"
					content="Impigo Design's Pvt. Ltd. is a leading provider of services related to Design. Our team of experienced 3D artists and engineers can create highly detailed, photo-realistic models of your products, that accurately represent their look, feel, and functionality. The models can be integrated into your website, allowing customers to interact with the product, zoom in, spin, and view it from different angles. This can help customers make an informed purchasing decision, as they can see the product in detail before they buy it."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Welcome />

				<Services />

				<Stats />

				<About />
			</main>
		</>
	);
}
