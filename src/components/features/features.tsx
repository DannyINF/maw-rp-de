// Features.tsx

import React, { useEffect, useRef } from 'react';
import styles from './features.module.scss';
import Image from 'next/image';

export interface Feature {
	name: string;
	image: string;
	description: string;
	highlights: FeatureHighlight[];
}

export interface FeatureHighlight {
	icon: JSX.Element;
	name: string;
}

export interface FeatureProps {
	features: Feature[];
}

const Features: React.FC<FeatureProps> = ({ features }) => {
	const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const handleScroll = () => {
			featuresRef.current.forEach((feature, index) => {
				if (feature) {
					const rect = feature.getBoundingClientRect();
					const windowHeight = window.innerHeight;
					if (rect.top < windowHeight && rect.bottom > 0) {
						const progress =
							1.4 - Math.max(0, rect.top) / (windowHeight * 1);
						const translation = (1 - progress) * 500;
						const direction = index % 2 === 0 ? 1 : -1;
						const finalTranslation = translation * direction;

						//check if current scroll progress is in last 100px of page height, if so, set final translation to 0
						const scrollProgress =
							(window.pageYOffset /
								(document.documentElement.scrollHeight -
									document.documentElement.clientHeight)) *
							100;
						if (scrollProgress > 99) {
							feature.style.transform = `translateX(0px)`;
						} else if (direction === 1) {
							feature.style.transform = `translateX(${
								(finalTranslation > 0 && finalTranslation) || 0
							}px)`;
						} else {
							feature.style.transform = `translateX(${
								(finalTranslation < 0 && finalTranslation) || 0
							}px)`;
						}
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section
			id="features"
			tabIndex={0}
			role="article"
			className={styles.features}
		>
			<h2>Features</h2>
			{features.map((feature, index) => (
				<div
					key={index}
					className={styles.feature}
					ref={element => (featuresRef.current[index] = element)}
				>
					<div className={styles.image}>
						<Image
							width={1000}
							height={1000}
							src={feature.image}
							alt={feature.name}
							loading="lazy"
						/>
					</div>
					<div className={styles.info}>
						<h3 className={styles.name}>{feature.name}</h3>
						<p className={styles.description}>
							{feature.description}
						</p>
						<div className={styles.highlights}>
							{feature.highlights.map((highlight, index) => (
								<div key={index} className={styles.highlight}>
									{highlight.icon}
									<p>{highlight.name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default Features;
