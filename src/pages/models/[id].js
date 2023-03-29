import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Model({ model }) {
	const router = useRouter();
	const { id } = router.query;
	return (
		<>
			<Head>
				<title>Model Viewer for {id}</title>
			</Head>

			<main>
				<h1>Model Viewer for {id}</h1>
				<p>{model}</p>
			</main>
		</>
	);
}
