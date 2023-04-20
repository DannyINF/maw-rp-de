import Head from 'next/head';
import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import React from 'react';

export default function Home() {
	React.useEffect(() => {
		document.body.style.marginTop =
			document.getElementById('header')?.clientHeight + 'px';

		window.addEventListener('resize', () => {
			document.body.style.marginTop =
				document.getElementById('header')?.clientHeight + 'px';
		});

		return () => {
			window.removeEventListener('resize', () => {
				document.body.style.marginTop =
					document.getElementById('header')?.clientHeight + 'px';
			});
		};
	}, []);

	return (
		<>
			<Head>
				<title>
					Mythen aus Westernis RP - Deine einzigartige Rollenspiel
					Erfahrung in Garry's Mod
				</title>
				<meta
					name="description"
					content="Tritt noch heute dem Mythen aus Westernis Rollenspiel-Server bei und lerne als Mensch, Zwerg oder Ork eine neue Welt kennen!"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<main>
				<Header />
				<Hero />
			</main>
		</>
	);
}
