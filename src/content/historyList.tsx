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
			'Die Idee für den Herr der Ringe Rollenspiel Garrys Mod Server wird geboren. Die Serverleiter beginnen mit der Planung und der Konzeptionierung des Roleplay Server und der Systeme.',
	},
	{
		key: 2,
		date: '01. Juni 2022',
		title: 'Entwicklung beginnt',
		icon: <FaCode role="img" aria-label="Code" />,
		content:
			'Die ersten Bausteine wie Inventar-System und Crafting-System entstehen.',
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
			'Der Herr der Ringe Rollenspiel-Server wird offiziell gestartet. Spieler können sich registrieren und die Herr der Ringe Mod Erfahrung erleben.',
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
		date: '02. Januar 2023',
		title: 'Erste Eventwoche',
		icon: <GiFireworkRocket role="img" aria-label="Firework Rocket" />,
		content:
			'Bereits am Anfang des neuen Jahres fand eine große Eventwoche statt. Angmar wird zu Isengard und später zu Mordor. Moria wird erst ein Teil von Gondor und danach zu Rohan. Ebenfalls werden große Schlachten, wie die von Minas Tirith und Helms Klamm nachgespielt.',
	},
	{
		key: 7,
		date: '25. März 2023',
		title: 'Alchemie System',
		icon: <GiFireBottle role="img" aria-label="Fire Bottle" />,
		content:
			'Durch das neue Alchemie System werden die Kräuter vervielfacht und die Alchemisten haben die Möglichkeit, ihr Können mit neuem und einzigartigem Fantasy Rollenspiel auf die Probe zu stellen. Neben den neuen Kräutern gibt es auch viele neue Tränke, welche in der richtigen Reihenfolge gebraut werden müssen.',
	},
	{
		key: 8,
		date: '20. April 2023',
		title: 'Arost Bündnis',
		icon: <FaHandshake role="img" aria-label="Handshake" />,
		content:
			'Nach gemeinsamer Entscheidung schließen sich die drei Nebenfraktionen der Elben, Dunländer und Wandernden zusammen und werden zum Bündnis der neutralen Handelsstadt Arost. Die Stadt wird zu einem wichtigen Handelszentrum und wird von allen Fraktionen als neue Hauptstadt anerkannt.',
	},
	{
		key: 9,
		date: '18. August 2023',
		title: 'Großes 2.0 Update',
		icon: <FaHandshake role="img" aria-label="Handshake" />,
		content:
			'Nach einigen Problemen in der Wirtschaft, wurde mit dem großen 2.0 Update ein Wirtschafts Reset durchgeführt. Zudem wurde ein neues Eroberungssystem und eine neue eigens angefertigte Map eingeführt. Allerdings hatte der Server längere Zeit Probleme mit DDos Attacken.',
	},
	{
		key: 10,
		date: '09. Dezember 2023',
		title: 'MaW:RP 3.0: Saurons Aufstieg!',
		icon: <FaHandshake role="img" aria-label="Handshake" />,
		content:
			'Das größte Update bisher kam mit neuen Fraktionen, wie Mordor statt Angmar und Erebor statt Moria. Zudem wurde Imladris eingeführt. Die Map hat eine riesige Mordor Erweiterung erhalten. Der Server erholt sich von den Attacken und läuft wieder besser.',
	},
];
