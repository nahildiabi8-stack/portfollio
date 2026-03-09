import { BsStars } from 'react-icons/bs';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaPhp } from 'react-icons/fa';
import { SiFigma, SiMysql, SiTailwindcss } from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Languages que je travaille avec',
		items: [
			{
				title: 'PHP',
				icon: <FaPhp color='rgb(119, 123, 179)' />,
				color: 'rgba(119, 123, 179, 0.6)',
			},
			{
				title: 'HTML',
				icon: <FaHtml5 color='rgb(228, 77, 38)' />,
				color: 'rgba(228, 77, 38, 0.6)',
			},
			{
				title: 'CSS',
				icon: <FaCss3Alt color='rgb(38, 77, 228)' />,
				color: 'rgba(38, 77, 228, 0.6)',
			},
			{
				title: 'JavaScript',
				icon: <FaJs color='rgb(240, 219, 79)' />,
				color: 'rgba(240, 219, 79, 0.6)',
			},
		],
	},
	{
		heading: "Outils qui m'aide a construire mes sites",
		items: [
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='rgb(6, 182, 212)' />,
				color: 'rgba(6, 182, 212, 0.7)',
			},
			{
				title: 'Bootstrap',
				icon: <FaBootstrap color='rgb(125, 17, 248)' />,
				color: 'rgba(125, 17, 248, 0.75)',
			},
			{
				title: 'Figma',
				icon: <SiFigma color='rgb(242, 78, 30)' />,
				color: 'rgba(242, 78, 30, 0.6)',
			},
			{
				title: 'Claude AI',
				icon: <BsStars color='rgb(210, 160, 100)' />,
				color: 'rgba(210, 160, 100, 0.6)',
			},
		],
	},
	{
		heading: "Base de données que j'utilise",
		items: [
			{
				title: 'MySQL',
				icon: <SiMysql color='rgb(0, 122, 158)' />,
				color: 'rgba(0, 122, 158, 0.75)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='SET'
				/>
			</div>
		</section>
	);
};