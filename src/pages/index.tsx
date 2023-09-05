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
import Script from 'next/script';
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
					Herr der Ringe RP Garrys Mod Server | Fantasy Rollenspiel
				</title>
				<meta
					name="title"
					content="Herr der Ringe RP - Garrys Mod Server | GMOD Roleplay"
				/>
				<meta
					name="description"
					content="Tritt noch heute dem Herr der Ringe Rollenspiel Garrys Mod Server bei und lerne als Mensch, Zwerg oder Ork eine neue Fantasy Rollenspiel Welt kennen!"
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
					content="Herr der Ringe Rollenspiel Garrys Mod Server | Roleplay Server"
				/>
				<meta
					property="og:description"
					content="Tritt noch heute dem Herr der Ringe Rollenspiel Garrys Mod Server bei und lerne als Mensch, Zwerg oder Ork eine neue Fantasy Rollenspiel Welt kennen!"
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
					content="Mythen aus Westernis, HDR RP, Herr der Ringe RP, Mythen aus Westernis RP, GMOD HDR RP, Garrys Mod Herr der Ringe, Herr der Ringe Rollenspiel, herr der ringe-online, gaming communities, gta rp, spielen im mittelalter, roleplay server, rollenspiel pc kostenlos, garrys mod server, herr der ringe mod, modded games, fantasy rollenspiel"
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
								<Connect serverIp="84.200.229.2:27020" />
							</div>
						</>
					)}
					<Impressum />
				</ModalProvider>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=AW-11244277110"
				></Script>
				<Script>
					{`
						window.dataLayer = window.dataLayer || [];
				  		function gtag(){ dataLayer.push(arguments); }
				  		gtag('js', new Date());
									
				  		gtag('config', 'AW-11244277110');
					`}
				</Script>
			</main>
		</>
	);
}
