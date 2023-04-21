import React from 'react';
import { Parallax } from 'react-parallax';
import styles from './hero.module.scss';

const Hero = () => {
	return (
		<section>
			<Parallax
				blur={{ min: 5, max: 5 }}
				bgImage="/assets/images/hero-bg1.webp"
				bgImageAlt="background"
				bgClassName={styles.bgImage}
				strength={200}
			>
				<div className={styles.hero}>
					<h1 className={styles.headline}>Mythen aus Westernis</h1>
					<h2 className={styles.subheadline}>
						Deine Bestimmung, in der großen von Westernis Welt
					</h2>
				</div>
			</Parallax>
		</section>
	);
};

export default Hero;
