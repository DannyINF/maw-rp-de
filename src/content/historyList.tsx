import { HistoryItem } from '@/components/history/history';
import {
	FaCode,
	FaCogs,
	FaBug,
	FaPencilAlt,
	FaHandshake,
} from 'react-icons/fa';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { TbChristmasTree } from 'react-icons/tb';
import { GiFireworkRocket, GiFireBottle } from 'react-icons/gi';
import { RiSwordLine } from 'react-icons/ri';

export const historyList: HistoryItem[] = [
	{
		key: 1,
		date: '05. Februar 2022',
		title: 'Konzeptionierung',
		icon: <FaPencilAlt role="img" aria-label="Pencil" />,
		content:
			'Die Idee für den Herr der Ringe Rollenspiel-Server wird geboren. Die Serverleiter beginnen mit der Planung und der Konzeptionierung des Servers und der Systeme.',
	},
	{
		key: 2,
		date: '01. Juni 2022',
		title: 'Entwicklung beginnt',
		icon: <FaCode role="img" aria-label="Code" />,
		content:
			'Mekphen startet als Entwickler die Umsetzung der geplanten Features und die Erstellung des Spielservers. Dabei entstehen die ersten Bausteine wie Inventar-System und Crafting-System.',
	},
	{
		key: 3,
		date: '01. September 2022',
		title: 'Beta-Test',
		icon: <FaBug role="img" aria-label="Bug" />,
		content:
			'Der Server wird für einen geschlossenen Beta-Test geöffnet. Eine begrenzte Anzahl von Testern erhält Zugang, um die Systeme und Features des Servers zu testen und Feedback an das Team zu geben.',
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
		date: '16. November 2022',
		title: 'Erstes Update',
		icon: <FaCogs role="img" aria-label="Cogs" />,
		content:
			'Das erste große Update wird veröffentlicht. Es gibt nun ein Hunger-System, Eroberungsgebiete haben einen Cooldown, Moria bekommt einen Zwergenfürst und etliche neue Verbesserungen erscheinen auf dem Server.',
	},
	{
		key: 6,
		date: '10. Dezember 2022',
		title: 'Dezember Update',
		icon: <TbChristmasTree role="img" aria-label="Christmas Tree" />,
		content:
			'In dem riesigen Dezember Update kommen Features wie das Trainings-System, die Möglichkeit zum Kauf von Häusern und vieles mehr. Außerdem bekommen Moria, Gondor und Angmar eine besondere Spezialeinheit.',
	},
	{
		key: 7,
		date: '02. Januar 2022',
		title: 'Eventwoche',
		icon: <GiFireworkRocket role="img" aria-label="Firework Rocket" />,
		content:
			'Bereits am Anfang des neuen Jahres fand eine große Eventwoche statt. Angmar wird zu Isengard und später zu Mordor. Moria wird erst ein Teil von Gondor und danach zu Rohan. Ebenfalls werden große Schlachten, wie die von Minas Tirith und Helms Klamm nachgespielt.',
	},
	{
		key: 8,
		date: '14. März 2022',
		title: 'Krieg von Westernis',
		icon: <RiSwordLine role="img" aria-label="Swords" />,
		content:
			'Mit "Krieg von Westernis" kommt das größte alleinstehende Feature auf den Server. Durch über 10.000 Zeilen Code schafft es "Krieg von Westernis" ein eigenes Strategiespiel für die Führungsebenen zu werden.',
	},
	{
		key: 9,
		date: '25. März 2022',
		title: 'Alchemie System',
		icon: <GiFireBottle role="img" aria-label="Fire Bottle" />,
		content:
			'Durch das neue Alchemie System werden die Kräuter vervielfacht und die Alchemisten haben die Möglichkeit, ihr Können mit neuem und einzigartigem Gameplay auf die Probe zu stellen. Neben den neuen Kräutern gibt es auch viele neue Tränke, welche in der richtigen Reihenfolge gebraut werden müssen.',
	},
	{
		key: 10,
		date: '20. April 2022',
		title: 'Arost Bündnis',
		icon: <FaHandshake role="img" aria-label="Handshake" />,
		content:
			'Nach gemeinsamer Entscheidung schließen sich die drei Nebenfraktionen der Elben, Dunländer und Wandernden zusammen und werden zum Bündnis der neutralen Handelsstadt Arost. Die Stadt wird zu einem wichtigen Handelszentrum und wird von allen Fraktionen als neue Hauptstadt anerkannt.',
	},
];
