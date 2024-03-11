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
	GiElfHelmet,
	GiHobbitDoor,
	GiWomanElfFace,
} from 'react-icons/gi';
import { FaHatWizard } from 'react-icons/fa';

export const factionList: Faction[] = [
	{
		name: 'Gondor',
		image: '/assets/images/factions/human.webp',
		description:
			'Die Menschen von Gondor sind eine stolze und edle Zivilisation in Westernis. Als eines der bedeutendsten menschlichen Königreiche ist Gondor bekannt für seine mutigen Krieger, weisen Herrscher und prachtvollen Bauten.',
		leader: {
			name: 'Truchsess Ecthelion',
		},
		specialRanks: [
			{
				icon: <GiElfHelmet aria-label="Elf Helmet" role="img" />,
				name: 'Schwanenritter',
			},
			{
				icon: <GiPocketBow aria-label="Bow" role="img" />,
				name: 'Dunedain',
			},
			{
				icon: <GiPotionBall aria-label="Potion" role="img" />,
				name: 'Großalchemist',
			},
		],
	},
	/*{
		name: 'Erebor',
		image: '/assets/images/factions/dwarf.webp',
		description:
			'Zwerge sind ein Volk in Westernis, bekannt für ihre große Stärke, Hartnäckigkeit und meisterlichen Fähigkeiten im Handwerk, Bergbau und Schmieden.',
		leader: {
			name: 'Dain Eisenfuß',
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
				name: 'Dains Schmied',
			},
		],
	},*/
	{
		name: 'Mordor',
		image: '/assets/images/factions/orc.webp',
		description:
			'Orks sind ein brutales und kriegerisches Volk in Westernis, bekannt für ihre rohe Gewalt, Schrecklichkeit und bedingungslose Loyalität gegenüber ihren dunklen Herren.',
		leader: {
			name: 'Saurons Mund',
		},
		specialRanks: [
			{
				icon: <GiCrocSword aria-label="Sword" role="img" />,
				name: 'Uruk-hai',
			},
			{
				icon: <GiMagicGate aria-label="Magic Gate" role="img" />,
				name: 'Nazgûl',
			},
			{
				icon: <GiDwarfHelmet aria-label="Helmet" role="img" />,
				name: 'Trolle',
			},
		],
	},
	{
		name: 'Imladris',
		image: '/assets/images/factions/elb.png',
		description:
			'Die Elben von Bruchtal sind bekannt für ihre geschickte Handwerkskunst und ihren edlen Umgang mit Schwert und Bogen. Sie handeln stets gegen die dunklen Mächte.',
		leader: {
			name: 'Herr Elrond',
		},
		specialRanks: [
			{
				icon: <GiWomanElfFace aria-label="Woman Elf Face" role="img" />,
				name: 'Noldorelben',
			},
			{
				icon: <GiHobbitDoor aria-label="Hobbit Door" role="img" />,
				name: 'Hobbits',
			},
			{
				icon: <FaHatWizard aria-label="Wizard Hat" role="img" />,
				name: 'Istar',
			},
		],
	},
];
