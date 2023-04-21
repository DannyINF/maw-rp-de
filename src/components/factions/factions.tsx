// Factions.tsx
import React from 'react';
import styles from './factions.module.scss';
import Image from 'next/image';

export interface FactionLeader {
	name: string;
}

export interface SpecialRank {
	icon: JSX.Element;
	name: string;
}

export interface Faction {
	name: string;
	image: string;
	description: string;
	leader: FactionLeader;
	specialRanks: SpecialRank[];
}

interface FactionsProps {
	factions: Faction[];
}

const Factions: React.FC<FactionsProps> = ({ factions }) => {
	return (
		<section id="fraktionen" className={styles.factions}>
			<h2>Fraktionen</h2>
			{factions.map((faction, index) => (
				<div key={index} className={styles.faction}>
					<div className={styles.image}>
						<Image
							width={500}
							height={836}
							src={faction.image}
							alt={faction.name}
						/>
					</div>
					<div className={styles.info}>
						<h2 className={styles.name}>{faction.name}</h2>
						<p className={styles.leader}>
							Fraktionsleiter: {faction.leader.name}
						</p>
						<p className={styles.description}>
							{faction.description}
						</p>
						<div className={styles.specialRanks}>
							<p className={styles.specialRanksHeading}>
								Spezialränge:
							</p>
							<ul>
								{faction.specialRanks.map((rank, rankIndex) => (
									<li
										key={rankIndex}
										className={styles.specialRank}
									>
										{rank.icon}
										{rank.name}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default Factions;
