import '@/styles/globals.css';
import 'swiper/css/bundle'; // All (extra) CSS of Swiper is imported here

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />

			<footer className="w-full h-16 p-3 gradient_main flex justify-center items-center">
				<div className="flex flex-col sm:flex-row">
					<h2 className="text-center text-xs sm:text-sm">Copyright &copy; 2023 Impigo Design&apos;s Pvt. Ltd.</h2>
					<h2 className="text-center text-xs sm:text-sm">All Rights Reserved.</h2>
				</div>
			</footer>
		</>
	);
}
