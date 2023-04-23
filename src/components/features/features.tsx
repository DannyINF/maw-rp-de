// Features.tsx

import React from 'react';
import styles from './features.module.scss';
import Image from 'next/image';

export interface Feature {
	name: string;
	image: string;
	description: string;
}

export interface FeatureProps {
	features: Feature[];
}

const Features: React.FC<FeatureProps> = ({ features }) => {
	return (
		<section
			id="features"
			tabIndex={0}
			role="article"
			className={styles.features}
		>
			<h2>Features</h2>
			{features.map((feature, index) => (
				<div key={index} className={styles.feature}>
					<div className={styles.image}>
						<Image
							width={500}
							height={250}
							src={feature.image}
							alt={feature.name}
						/>
					</div>
					<div className={styles.info}>
						<h2 className={styles.name}>{feature.name}</h2>
						<p className={styles.description}>
							{feature.description}
						</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default Features;
