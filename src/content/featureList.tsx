import { Feature } from '@/components/features/features';
import {
	GiAnvilImpact,
	GiBrain,
	GiPotionBall,
	GiIceSpear,
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

export const featureList: Feature[] = [
	{
		name: 'Inventar',
		description:
			'„Wohin nur mit all deinen Sachen?“, ganz klar ins Inventar. Das Inventar bietet dir die Möglichkeit deine Gegenstände sicher zu verwahren. Doch Pass auf nicht alles scheint so sicher zu sein, wertvolle Items packst du besser in eine Kiste, bevor dir jemand diese stiehlt.',
		image: '/assets/test.png',
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
				icon: <HiUserGroup role="img" aria-label="Accessbility" />,
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
			'Durch das Eroberungssystem werden die Schlachten auf unseren Server gesteuert. Auf der Karte verteilt gibt es 11 einzigartige Gebiete aus Herr Der Ringe, welche ihr mit euren Mitspielern in epischen Schlachten einnehmen oder verteidigen könnt. Da bei diesen Schlachten große Heere der 3 Fraktionen aufeinander treffen ist es ratsam mit Taktik vorzugehen.',
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
			'Ob Waffen, Tränke, Essen oder andere nützliche Dinge. All dies kannst du durch unser Crafting System direkt herstellen. Also probiere dich doch in den verschiedenen Berufen und beginne dein Handelsimperium aufzubauen. Die Nutzung ist benutzerfreundlich gestaltet durch die direkte Anbindung an das Inventar System.',
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
];
