import { Faction } from '@/components/factions/factions';
import {
	GiAnvilImpact,
	GiAxeInLog,
	GiCrocSword,
	GiDwarfHelmet,
	GiMagicGate,
	GiPocketBow,
	GiPotionBall,
	GiRuneStone,
	GiHerbsBundle,
} from 'react-icons/gi';

export const factionList: Faction[] = [
	{
		name: 'Menschen',
		image: '/assets/images/factions/human.webp',
		description:
			'Die Menschen von Gondor sind eine stolze und edle Zivilisation in Westernis. Als eines der bedeutendsten menschlichen Königreiche ist Gondor bekannt für seine mutigen Krieger, weisen Herrscher und prachtvollen Bauten.',
		leader: {
			name: 'König Calimehtar',
		},
		specialRanks: [
			{
				icon: <GiHerbsBundle aria-label="Herbs Bundle" role="img" />,
				name: 'Kräutersammler',
			},
			{
				icon: <GiPocketBow aria-label="Bow" role="img" />,
				name: 'Mensch aus Westernis',
			},
			{
				icon: <GiPotionBall aria-label="Potion" role="img" />,
				name: 'Großalchemist',
			},
		],
	},
	{
		name: 'Zwerge',
		image: '/assets/images/factions/dwarf.webp',
		description:
			'Zwerge sind ein Volk in Westernis, bekannt für ihre große Stärke, Hartnäckigkeit und meisterlichen Fähigkeiten im Handwerk, Bergbau und Schmieden.',
		leader: {
			name: 'König Durin VI.',
		},
		specialRanks: [
			{
				icon: <GiRuneStone aria-label="Stone" role="img" />,
				name: 'Minenarbeiter',
			},
			{
				icon: <GiAxeInLog aria-label="Axe" role="img" />,
				name: 'Axtwerfer',
			},
			{
				icon: <GiAnvilImpact aria-label="Anvil" role="img" />,
				name: 'Legendärer Schmied',
			},
		],
	},
	{
		name: 'Orks',
		image: '/assets/images/factions/orc.webp',
		description:
			'Orks sind ein brutales und kriegerisches Volk in Westernis, bekannt für ihre rohe Gewalt, Schrecklichkeit und bedingungslose Loyalität gegenüber ihren dunklen Herren.',
		leader: {
			name: 'Hexenmeister von Angmar',
		},
		specialRanks: [
			{
				icon: <GiCrocSword aria-label="Sword" role="img" />,
				name: 'Berserker',
			},
			{
				icon: <GiMagicGate aria-label="Magic Gate" role="img" />,
				name: 'Hexer',
			},
			{
				icon: <GiDwarfHelmet aria-label="Helmet" role="img" />,
				name: 'Dunkler Numenorer',
			},
		],
	},
];
