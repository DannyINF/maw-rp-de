import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './history.module.scss';

export type HistoryItem = {
	key: number;
	date: string;
	title: string;
	content: string;
	icon: JSX.Element;
};

type HistoryProps = {
	items: HistoryItem[];
};

const History: React.FC<HistoryProps> = ({ items }) => {
	return (
		<section
			id="geschichte"
			role="article"
			tabIndex={0}
			className={styles.history}
		>
			<h2>Geschichte</h2>
			<VerticalTimeline lineColor="var(--accent-color-primary-highlight)">
				{items.map(item => (
					<VerticalTimelineElement
						key={item.key}
						className="vertical-timeline-element"
						date={item.date}
						textClassName={styles.text}
						dateClassName={styles.date}
						icon={item.icon}
						iconClassName={styles.icon}
						contentArrowStyle={{
							borderRight:
								'9px solid var(--accent-color-primary-highlight)',
						}}
					>
						<h3 className="vertical-timeline-element-title">
							{item.title}
						</h3>
						<p>{item.content}</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</section>
	);
};

export default History;
