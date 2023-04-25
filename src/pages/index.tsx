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
					Mythen aus Westernis Rollenspiel - Herr der Ringe Garry's
					Mod
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
				<link rel="canonical" href="https://www.maw-rp.de/" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Mythen aus Westernis Rollenspiel - Herr der Ringe Garry's Mod"
				/>
				<meta
					property="og:description"
					content="Tritt noch heute dem Mythen aus Westernis Rollenspiel-Server bei und lerne als Mensch, Zwerg oder Ork eine neue Welt kennen!"
				/>
				<meta property="og:url" content="https://www.maw-rp.de/" />
				<meta
					property="og:image"
					content="https://www.maw-rp.de/assets/images/ogimage.jpg"
				/>
				<meta property="og:site_name" content="Herr der Ringe RP" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Mythen aus Westernis Rollenspiel - Herr der Ringe Garry's Mod"
				/>
				<meta
					name="twitter:description"
					content="Tritt noch heute dem Mythen aus Westernis Rollenspiel-Server bei und lerne als Mensch, Zwerg oder Ork eine neue Welt kennen!"
				/>
				<meta name="twitter:url" content="https://www.maw-rp.de/" />
				<meta
					name="twitter:image"
					content="https://www.maw-rp.de/assets/images/ogimage.jpg"
				/>
				<meta name="twitter:site" content="@HdRMythen" />
				<meta name="twitter:creator" content="@zimtzimt" />
				<meta name="twitter:domain" content="maw-rp.de" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<meta
					name="keywords"
					content="Mythen aus Westernis, Rollenspiel, Garry's Mod, RP Server, Mensch, Zwerg, Ork, Fantasy, Gaming, GMod, Community, Herr der Ringe, HdR, Rollenspiel-Erfahrung, Rollenspiel-Abenteuer, Online-Gaming, Spiele, Server, deutsche Rollenspiel-Community, Garry's Mod Server"
				/>
				<script
					async
					defer
					data-domain="maw-rp.de"
					src="https://plausible.io/js/script.js"
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
