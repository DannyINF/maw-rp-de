// Factions.tsx
import React from 'react';
import styles from './factions.module.scss';

export interface Faction {
	name: string;
	image: string;
	description: string;
}

interface FactionsProps {
	factions: Faction[];
}

const Factions: React.FC<FactionsProps> = ({ factions }) => {
	return (
		<section id="fraktionen" className={styles.factions}>
			<h1>Fraktionen</h1>
			{factions.map((faction, index) => (
				<div key={index} className={styles.faction}>
					<div className={styles.image}>
						<img src={faction.image} alt={faction.name} />
					</div>
					<div className={styles.info}>
						<h2 className={styles.name}>{faction.name}</h2>
						<p className={styles.description}>
							{faction.description}
						</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default Factions;
