// Factions.tsx
import React, { useEffect, useRef } from 'react';
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
	const factionsRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const handleScroll = () => {
			factionsRef.current.forEach((faction, index) => {
				if (faction) {
					const rect = faction.getBoundingClientRect();
					const windowHeight = window.innerHeight;
					if (rect.top < windowHeight && rect.bottom > 0) {
						const progress =
							1.3 - Math.max(0, rect.top) / (windowHeight * 1);
						const translation = (1 - progress) * 500;
						const direction = index % 2 === 0 ? 1 : -1;
						const finalTranslation = translation * direction;

						if (direction === 1) {
							faction.style.transform = `translateX(${
								(finalTranslation > 0 && finalTranslation) || 0
							}px)`;
						} else {
							faction.style.transform = `translateX(${
								(finalTranslation < 0 && finalTranslation) || 0
							}px)`;
						}
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Um die Anfangstransparenz zu initialisieren

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section id="fraktionen" className={styles.factions}>
			<h2>Fraktionen</h2>
			{factions.map((faction, index) => (
				<div
					key={index}
					className={`${styles.faction}`}
					ref={element => (factionsRef.current[index] = element)}
				>
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
