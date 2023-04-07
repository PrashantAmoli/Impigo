import ContactForm from '@/components/forms/ContactForm';
import Head from 'next/head';

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact Impigo Design&apos;s</title>
			</Head>

			<main className="w-full">
				<ContactForm />
			</main>
		</>
	);
}
