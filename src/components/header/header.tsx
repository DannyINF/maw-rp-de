// components/Header.js

import React from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import {
	trackConnectionClick,
	trackForumClick,
	trackShopClick,
} from '@/lib/tracking';
import { useModal } from '../../context/modalContext';
import ConnectDetails from '../connectdetails/connectdetails';

const Header = () => {
	const { openModal } = useModal();

	const openConnectModal = () => {
		openModal('Achtung!', <ConnectDetails />);
	};

	return (
		<header id="header" className={styles.header}>
			<div className={styles.logo}>
				<Image
					src="/assets/images/logo-white.png"
					alt="Mythen aus Westernis Ring"
					className={styles.logo}
					width={45}
					height={45}
				/>
				<a
					href="#mainContent"
					aria-label="Mythen aus Westernis Main Content Link"
					className={styles.logoLink}
				>
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
							onClick={trackShopClick}
						>
							Shop
						</a>
					</li>
					<li>
						<a
							href="https://forum.mythenauswesternis.de/"
							target="_blank"
							className={styles.link}
							onClick={trackForumClick}
						>
							Forum
						</a>
					</li>
					<li>
						<button
							className={styles.linkMarked}
							onClick={openConnectModal}
						>
							Beitreten
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
