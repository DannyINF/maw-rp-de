// components/ConnectSection.tsx
import React from 'react';
import styles from './connectdetails.module.scss';
import { trackConnectionClick } from '@/lib/tracking';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

const ConnectDetails: React.FC = () => {
	return (
		<div className={styles.connectDetailsDiv}>
			<h3>Du benötigst Garry's Mod um am Rollenspiel teilzunehmen.</h3>
			<a
				href="https://store.steampowered.com/app/4000/Garrys_Mod/"
				rel="noopener noreferrer nofollow"
				target="_blank"
			>
				<div className={styles.gmodInfoDiv}>
					<div className={styles.gmodInfoImage}>
						<Image
							src="/assets/images/logo-gmod.png"
							alt="garry's mod"
							width={100}
							height={100}
						/>
					</div>
					<div className={styles.gmodInfoDivContent}>
						<p>
							Garry's Mod ist ein Sandbox Spiel mit unzähligen
							Erweiterungsmöglichkeiten und Modifikationen.
							<br /> Dadurch haben wir ein nie dagewesenes
							Rollenspiel in der Welt von Westernis geschaffen.
						</p>
						<FiExternalLink
							role="img"
							aria-label="garry's mod kaufen"
						/>
					</div>
				</div>
			</a>
			<p>
				<b>Wenn du Garry's Mod installiert hast</b>, wirst du mit einem
				Klick auf Beitreten
				<br /> automatisch mit dem Server verbunden.
				<br />
				Mit dem Handy kannst du dich <b>leider nicht</b> mit dem
				Rollenspiel Server verbinden.
			</p>

			<div className={styles.gmodButtons}>
				<a
					className={styles.button}
					href="steam://connect/84.200.229.44:27024"
					target="_blank"
					onClick={trackConnectionClick}
				>
					Beitreten
				</a>
				<a
					className={styles.secondaryButton}
					href="https://forum.mythenauswesternis.de/"
					target="_blank"
				>
					Forum
				</a>
			</div>
		</div>
	);
};

export default ConnectDetails;
