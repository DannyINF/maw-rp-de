// components/Login.tsx
import { useState } from 'react';
import styles from './login.module.scss';

type Props = {
	onLoginSuccess: () => void;
};

export const Login: React.FC<Props> = ({ onLoginSuccess }) => {
	const [inputPassword, setInputPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (inputPassword === process.env.NEXT_PUBLIC_PASSWORD) {
			onLoginSuccess();
		} else {
			alert('Falsches Passwort.');
		}
	};

	return (
		<div className={styles.loginContainer}>
			<form onSubmit={handleSubmit} className={styles.loginForm}>
				<h1 className={styles.title}>Mythen aus Westernis RP</h1>
				<h2>
					Diese Seite befindet sich aktuell noch im Aufbau! Schau in
					ein paar Tagen nochmal vorbei!
				</h2>
				<div className={styles.loginBox}>
					<h3 className={styles.subtitle}>Login</h3>
					<input
						type="password"
						placeholder="Passwort"
						value={inputPassword}
						onChange={e => setInputPassword(e.target.value)}
						className={styles.input}
					/>
					<div className={styles.buttonContainer}>
						<button type="submit" className={styles.button}>
							Einloggen
						</button>
						<a
							className={styles.button}
							href="https://forum.mythenauswesternis.de/"
						>
							Forum
						</a>
					</div>
				</div>
			</form>
		</div>
	);
};
