import Head from 'next/head';
import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import React from 'react';
import Factions from '@/components/factions/factions';
import { factionList } from '@/content/factionList';
import Features from '@/components/features/features';
import { featureList } from '@/content/featureList';
import History from '@/components/history/history';
import { historyList } from '@/content/historyList';
import Connect from '@/components/connect/connect';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';
import Impressum from '@/components/impressum/impressum';
import { ModalProvider } from '@/context/modalContext';

const Login = dynamic(
	() => import('@/components/login/login').then(mod => mod.Login),
	{
		ssr: false,
	}
);
const { publicRuntimeConfig } = getConfig();
const { NEXT_LOGIN_ENABLED } = publicRuntimeConfig;

export default function Home() {
	const [isAuthenticated, setIsAuthenticated] = React.useState(false);

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
				<link rel="canonical" href="https://mythenauswesternis.de/" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Mythen aus Westernis RP - Deine einzigartige Rollenspiel Erfahrung in Garry's Mod"
				/>
				<meta
					property="og:description"
					content="Tritt noch heute dem Mythen aus Westernis Rollenspiel-Server bei und lerne als Mensch, Zwerg oder Ork eine neue Welt kennen!"
				/>
				<meta
					property="og:url"
					content="https://mythenauswesternis.de/"
				/>
			</Head>
			<main>
				<ModalProvider>
					{NEXT_LOGIN_ENABLED == 'true' && !isAuthenticated ? (
						<Login
							onLoginSuccess={() => setIsAuthenticated(true)}
						/>
					) : (
						<>
							<Header />
							<div id="mainContent" tabIndex={0} role="document">
								<Hero />
								<Factions factions={factionList} />
								<Features features={featureList} />
								<History items={historyList} />
								<Connect serverIp="84.200.229.44:27020" />
							</div>
						</>
					)}
					<Impressum />
				</ModalProvider>
			</main>
		</>
	);
}
