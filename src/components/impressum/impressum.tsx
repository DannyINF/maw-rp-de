import React from 'react';
import { useModal } from '../../context/modalContext';
import styles from './impressum.module.scss';

const Impressum: React.FC = () => {
	const { openModal } = useModal();

	const openImpressumModal = () => {
		openModal(
			'Impressum',
			<div className={styles.modalContent}>
				<h3>Allgemeine Informationen</h3>
				<h4>Name und Anschrift</h4>
				<p>
					Angaben gemäß § 5 TMG
					<br />
					Schüßeler, Schober &amp; Schober GbR
					<br />
					Saxoniastraße, 22
					<br />
					01159 Dresden
				</p>
				<h4>Vertreten durch:</h4>
				<p>
					Philipp Schüßeler
					<br />
					Danny Schober
					<br />
					Maurice Schober
				</p>
				<h4>E-Mail-Adresse</h4>
				<p>forum@mythenauswesternis.de</p>
				<h4>Telefon</h4>
				<p>+4915159475480</p>
				<h4>Umsatzsteuer-Identifikationsnummer</h4>
				<p>
					Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
					DE358042085
				</p>
				<h4>Weitere Informationen</h4>
				<h5>EU-Streitschlichtung</h5>
				<p>
					Die Europäische Kommission stellt eine Plattform zur
					Online-Streitbeilegung (OS) bereit:{' '}
					<a
						href="https://ec.europa.eu/consumers/odr/"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://ec.europa.eu/consumers/odr/
					</a>
					. Unsere E-Mail-Adresse finden Sie oben im Impressum.
				</p>
				<h5>
					Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
				</h5>
				<p>
					Wir sind nicht bereit oder verpflichtet, an
					Streitbeilegungsverfahren vor einer
					Verbraucherschlichtungsstelle teilzunehmen.
				</p>
			</div>
		);
	};

	return (
		<div className={styles['impressum-container']}>
			<button
				className={styles['impressum-button']}
				onClick={openImpressumModal}
			>
				Impressum
			</button>
		</div>
	);
};

export default Impressum;
