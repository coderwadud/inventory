import Layout from "@/components/layouts";
import "aos/dist/aos.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
			offset: 0,
			duration: 300,
			easing: "ease-in-sine",
			delay: 300,
			// disable: "mobile",
			once: true, // For Repeating animations
		});
	}, []);
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
