import { MainContainer } from '@/components';
import '@/styles/globals.css';
import 'swiper/css/bundle'; // All (extra) CSS of Swiper is imported here

export default function App({ Component, pageProps }) {
	return (
		<>
			<MainContainer>
				<Component {...pageProps} />
			</MainContainer>
		</>
	);
}
