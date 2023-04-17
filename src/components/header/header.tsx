// components/Header.js

import React from 'react';
import styles from './header.module.scss';
import Image from 'next/image';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Image
					src="/assets/images/logo-white.png"
					alt="logo"
					className={styles.logo}
					width={45}
					height={45}
				/>
				<a href="#home" className={styles.logoLink}>
					Mythen aus Westernis
				</a>
			</div>
			<nav className={styles.nav}>
				<ul>
					<li>
						<a href="#fraktionen" className={styles.link}>
							Fraktionen
						</a>
					</li>
					<li>
						<a href="#features" className={styles.link}>
							Features
						</a>
					</li>
					<li>
						<a href="#geschichte" className={styles.link}>
							Geschichte
						</a>
					</li>
					<li>
						<a
							href="https://hdr-rp.vyhub.app/shop"
							target="_blank"
							className={styles.link}
						>
							Shop
						</a>
					</li>
					<li>
						<a
							href="https://forum.mythenauswesternis.de/"
							target="_blank"
							className={styles.link}
						>
							Forum
						</a>
					</li>
					<li>
						<a
							href="steam://connect/84.200.229.44:27020"
							target="_blank"
							className={styles.linkMarked}
						>
							Beitreten
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
