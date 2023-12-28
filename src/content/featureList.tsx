import { Feature } from '@/components/features/features';
import {
	GiAnvilImpact,
	GiBrain,
	GiPotionBall,
	GiIceSpear,
	GiHillConquest,
} from 'react-icons/gi';
import { RiTreasureMapLine } from 'react-icons/ri';
import {
	TbBackpack,
	TbSwords,
	TbPlugConnected,
	TbTopologyComplex,
} from 'react-icons/tb';
import { BsFillPersonCheckFill, BsShieldFillCheck } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { MdOutlineHistoryEdu } from 'react-icons/md';
import { LuStar } from "react-icons/lu";

export const featureList: Feature[] = [
	{
		name: 'Inventar',
		description:
			"„Wohin nur mit all deinen Sachen?“, ganz klar - ins Inventar. Das Inventar bietet dir die Möglichkeit deine Gegenstände sicher zu verwahren. Doch pass' auf! Nicht alles scheint so sicher zu sein. Wertvolle Items packst du besser in eine Kiste, bevor sie dir jemand stiehlt.",
		image: '/assets/images/features/inventory.webp',
		highlights: [
			{
				name: 'Sicher',
				icon: <BsShieldFillCheck role="img" aria-label="Shield" />,
			},
			{
				name: 'An einem Ort',
				icon: <TbBackpack role="img" aria-label="Backpack" />,
			},
			{
				name: 'Interaktiv',
				icon: (
					<HiUserGroup
						role="img"
						aria-hidden={false}
						aria-label="User Group"
					/>
				),
			},
			{
				name: 'Alle Systeme verbunden',
				icon: (
					<TbPlugConnected role="img" aria-label="Plug Connected" />
				),
			},
		],
	},
	{
		name: 'Eroberungen',
		description:
			'Das Eroberungssystem steuert die Schlachten auf unserem Server. Auf der Karte verteilt gibt es 11 einzigartige Gebiete aus "Der Herr Der Ringe", welche ihr mit euren Mitspielern in epischen Schlachten einnehmen oder verteidigen könnt. Da bei diesen Schlachten große Heere der drei Fraktionen aufeinander treffen, ist es ratsam, mit Taktik vorzugehen.',
		image: '/assets/images/features/conquest.webp',
		highlights: [
			{
				name: 'Epische Schlachten',
				icon: <TbSwords role="img" aria-label="Swords" />,
			},
			{
				name: 'Taktisch',
				icon: <GiBrain role="img" aria-label="Brain" />,
			},
			{
				name: 'Gesamte Karte',
				icon: (
					<RiTreasureMapLine role="img" aria-label="Treasure Map" />
				),
			},
			{
				name: 'Verschiedene Waffen',
				icon: <GiIceSpear role="img" aria-label="Ice Spear" />,
			},
		],
	},
	{
		name: 'Crafting',
		description:
			'Ob Waffen, Tränke, Essen oder andere nützliche Dinge - all dies kannst du durch unser Crafting-System direkt herstellen. Also probiere dich doch in den verschiedenen Berufen und beginne, dein Handelsimperium aufzubauen. Die Nutzung ist durch die direkte Anbindung an das Inventar-System sehr benutzerfreundlich gestaltet.',
		image: '/assets/images/features/crafting.webp',
		highlights: [
			{
				name: 'Schmieden',
				icon: <GiAnvilImpact role="img" aria-label="Anvil Impact" />,
			},
			{
				name: 'Brauen',
				icon: <GiPotionBall role="img" aria-label="Potion Ball" />,
			},
			{
				name: 'Benutzerfreundlich',
				icon: (
					<BsFillPersonCheckFill
						role="img"
						aria-label="Person Check"
					/>
				),
			},
			{
				name: 'Einzigartig',
				icon: (
					<TbTopologyComplex
						role="img"
						aria-label="Complex Topology"
					/>
				),
			},
		],
	},
	{
		name: 'Quests',
		description:
			'Du hast nichts zu tun oder es sind zu späteren Zeiten wenige Spieler auf dem Server? Kein Problem, hole dir spannende und ertragreiche Aufgaben bei Quest NPCs ab.',
		image: '/assets/images/features/crafting.webp',
		highlights: [
			{
				name: 'Story',
				icon: <MdOutlineHistoryEdu role="img" aria-label="Quill" />,
			},
			{
				name: 'Farming',
				icon: <LuStar role="img" aria-label="Star" />,
			},
			{
				name: 'Nebenquests',
				icon: (
					<GiHillConquest 
						role="img"
						aria-label="Hill"
					/>
				),
			},
		],
	},
];
