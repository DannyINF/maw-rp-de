import { HistoryItem } from '@/components/history/history';
import { FaCode, FaCogs, FaBug, FaPencilAlt } from 'react-icons/fa';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';

export const historyList: HistoryItem[] = [
	{
		key: 1,
		date: '01. Januar 2022',
		title: 'Konzeptionierung',
		icon: <FaPencilAlt role="img" aria-label="Pencil" />,
		content:
			'Die Idee für den Herr der Ringe Rollenspiel-Server wird geboren. Das Team beginnt mit der Planung und Konzeptionierung des Projekts.',
	},
	{
		key: 2,
		date: '15. März 2022',
		title: 'Entwicklung beginnt',
		icon: <FaCode role="img" aria-label="Code" />,
		content:
			'Das Entwicklerteam startet die Umsetzung der geplanten Features und die Erstellung des Spielservers.',
	},
	{
		key: 3,
		date: '01. September 2022',
		title: 'Beta-Test',
		icon: <FaBug role="img" aria-label="Bug" />,
		content:
			'Der Server wird für einen geschlossenen Beta-Test geöffnet. Eine begrenzte Anzahl von Testern erhält Zugang, um Feedback zu geben und Fehler zu melden.',
	},
	{
		key: 4,
		date: '16. September 2022',
		title: 'Offizieller Release',
		icon: <BsFillRocketTakeoffFill role="img" aria-label="Space Shuttle" />,
		content:
			'Der Herr der Ringe Rollenspiel-Server wird offiziell gestartet. Spieler können sich registrieren und das Spiel erleben.',
	},
	{
		key: 5,
		date: '15. November 2022',
		title: 'Update 1.1',
		icon: <FaCogs role="img" aria-label="Cogs" />,
		content:
			'Das erste große Update wird veröffentlicht, das neue Funktionen, Fehlerbehebungen und Verbesserungen enthält.',
	},
];
