import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="mobile-web-app-capable" content="yes" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<body className="w-full min-h-screen overflow-x-hidden select-text bg-black text-white gradient_main scroll-smooth">
				<Main />

				<NextScript />

				<Script
					strategy="beforeInteractive"
					type="module"
					src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
					onLoad={() => console.log('Model Viewer Loaded')}
					onReady={() => console.log('Model Viewer Ready')}
					onError={() => console.log('Model Viewer Error')}
				/>
			</body>
		</Html>
	);
}
