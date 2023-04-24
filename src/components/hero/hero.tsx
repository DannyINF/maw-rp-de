import React from 'react';
import { Parallax } from 'react-parallax';
import styles from './hero.module.scss';

const Hero = () => {
	return (
		<section tabIndex={0} role="article" className={styles.heroWrapper}>
			<Parallax
				blur={{ min: 2, max: 2 }}
				bgImage="/assets/images/hero-bg1.webp"
				bgImageAlt="background"
				bgClassName={styles.bgImage}
				strength={500}
			>
				<div className={styles.hero}>
					<h1 className={styles.headline}>Mythen aus Westernis</h1>
					<h2 className={styles.subheadline}>
						Deine Bestimmung, in der großen von Westernis Welt
					</h2>
					<div className={styles.heroButtons}>
						<a href="#beitreten" className={styles.buttonPrimary}>
							Beitreten
						</a>
						<a
							href="#fraktionen"
							className={styles.buttonSecondary}
						>
							Fraktionen
						</a>
					</div>
				</div>
			</Parallax>
		</section>
	);
};

export default Hero;
