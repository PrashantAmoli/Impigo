import { ModelViewer } from '@/components';
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

			<main className="min-h-[92vh] overflow-hidden">
				<h1 className="text-center font-bold text-2xl">Model Viewer for {id}</h1>
				<ModelViewer />
			</main>
		</>
	);
}
