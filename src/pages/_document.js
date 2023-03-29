import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="mobile-web-app-capable" content="yes" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="android-chrome-512x512" sizes="512x512" href="/icons/android-chrome-512x512.png" />
				<link rel="android-chrome-512x512" sizes="192x192" href="/icons/android-chrome-512x512.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
