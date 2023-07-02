// components/ConnectSection.tsx
import React from 'react';
import styles from './connect.module.scss';
import { useModal } from '../../context/modalContext';
import ConnectDetails from '../connectdetails/connectdetails';

interface ConnectSectionProps {
	serverIp: string;
}

const Connect: React.FC<ConnectSectionProps> = ({ serverIp }) => {
	const { openModal } = useModal();

	const openConnectModal = () => {
		openModal('Achtung!', <ConnectDetails />);
	};

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
				<button className={styles.button} onClick={openConnectModal}>
					Verbinden
				</button>
				<a
					className={styles.button}
					href="https://forum.mythenauswesternis.de/"
					target="_blank"
				>
					Forum
				</a>
			</div>
		</section>
	);
};

export default Connect;
