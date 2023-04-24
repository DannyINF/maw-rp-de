// components/ConnectSection.tsx
import React from 'react';
import styles from './connect.module.scss';

interface ConnectSectionProps {
	serverIp: string;
}

const Connect: React.FC<ConnectSectionProps> = ({ serverIp }) => {
	return (
		<section
			id="beitreten"
			tabIndex={0}
			role="article"
			className={styles.connectSection}
		>
			<h2 className={styles.serverDescription}>
				Verbinde dich jetzt zum Server und starte deine Reise!
			</h2>
			<p className={styles.serverIp}>Server-IP: {serverIp}</p>
			<div className={styles.buttons}>
				<a
					className={styles.button}
					href="steam://connect/84.200.229.44:27020"
					target="_blank"
				>
					Verbinden
				</a>
				<a
					className={styles.button}
					href="steam://connect/84.200.229.44:27020"
					target="_blank"
				>
					Forum
				</a>
			</div>
		</section>
	);
};

export default Connect;
