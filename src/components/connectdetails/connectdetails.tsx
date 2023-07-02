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
						<a
							href="https://store.steampowered.com/app/4000/Garrys_Mod/"
							rel="noopener noreferrer nofollow"
							target="_blank"
						>
							Garry's Mod ist ein Sandbox Spiel mit unzähligen
							Erweiterungsmöglichkeiten und Modifikationen.
							<br /> Dadurch haben wir ein nie dagewesenes
							Rollenspiel in der Welt von Westernis geschaffen.
						</a>
					</p>
					<a
						href="https://store.steampowered.com/app/4000/Garrys_Mod/"
						rel="noopener noreferrer nofollow"
						target="_blank"
					>
						<FiExternalLink
							role="img"
							aria-label="garry's mod kaufen"
						/>
					</a>
				</div>
			</div>
			<h4>
				Wenn du Garry's Mod installiert hast, wirst du mit einem Klick{' '}
				auf Beitreten
				<br /> automatisch mit dem Server verbunden.
			</h4>

			<div className={styles.gmodButtons}>
				<a
					className={styles.button}
					href="steam://connect/84.200.229.44:27020"
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
