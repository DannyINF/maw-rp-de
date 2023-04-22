import Head from 'next/head';
import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import React from 'react';
import Factions from '@/components/factions/factions';
import { factionList } from '@/content/factionList';
import Features from '@/components/features/features';
import { featureList } from '@/content/featureList';

export default function Home() {
	React.useEffect(() => {
		const clientHeight =
			document.getElementById('header')?.clientHeight || 5;
		document.body.style.marginTop = clientHeight - 5 + 'px';

		window.addEventListener('resize', () => {
			const clientHeight =
				document.getElementById('header')?.clientHeight || 5;
			document.body.style.marginTop = clientHeight - 5 + 'px';
		});

		return () => {
			window.removeEventListener('resize', () => {
				const clientHeight =
					document.getElementById('header')?.clientHeight || 5;
				document.body.style.marginTop = clientHeight - 5 + 'px';
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
				<div id="mainContent" tabIndex={0} role="document">
					<Hero />
					<Factions factions={factionList} />
					<Features features={featureList} />
				</div>
			</main>
		</>
	);
}
