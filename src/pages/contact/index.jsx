import ContactForm from '@/components/forms/ContactForm';
import Head from 'next/head';
import { useEffect } from 'react';

export default function ContactPage() {
	useEffect(() => {
		// Load all embeds on the page
		Tally.loadEmbeds();
	}, []);

	return (
		<>
			<Head>
				<title>Contact Impigo Design&apos;s</title>
				<script async src="https://tally.so/widgets/embed.js"></script>
			</Head>

			<main className="w-full min-h-[80vh] relative">
				{/* <ContactForm /> */}
				{/* <Script async src="https://tally.so/widgets/embed.js"></Script> */}

				<button
					className="fixed bottom-2 right-2 z-10"
					data-tally-open="3qLXLO"
					data-tally-width="330"
					data-tally-overlay="1"
					data-tally-emoji-text="👋"
					data-tally-emoji-animation="wave"
				>
					Click me
				</button>

				{/* <iframe
					className="absolute inset-0"
					data-tally-src="https://tally.so/r/3qLXLO?transparentBackground=1"
					width="100%"
					height="100%"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
					title="Get in touch"
				></iframe> */}

				<div className="absolute inset-x-0 bottom-0 h-11 bg-white"></div>

				{/* // Add the embed in your HTML */}
				<iframe
					data-tally-src="https://tally.so/embed/3qLXLO?alignLeft=1&transparentBackground=1&dynamicHeight=1"
					loading="lazy"
					width="100%"
					height="800"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
					title="Get in touch"
				></iframe>
			</main>
		</>
	);
}
