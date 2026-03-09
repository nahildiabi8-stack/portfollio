import { SectionTitle, } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Full Stack Developer',
				timePeriod: '2022 - Present',
				description: (
					<ul>
						<li>
							J'ai créer beaucoup de petit projets comme  {' '}
							<strong>Xeno</strong>, une IA qui arrive a construire du code vraiment riche. Speclaisée en backend
						</li>
						<li>
							Conception et développement de plusieurs tableaux de bord interactifs de visualisation de données.
						</li>
						<li>J'ai aussi créer ce petit site, qui fait partit de mes projects.</li>
					</ul>
				),
			},
		],
	},

	{
		title: 'Education',
		items: [
			{
				title: 'Formation Développeur ',
				place: 'Garage404, Saint Etienne Rue Tarentaize',
				timePeriod: '2022 - Present',
				description: "J'ai récamment rejoins cette formation pour devenir un développeur, je suis fascinée par le backend et j'aimerais devenir un expert en PHP.",
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>

						Bonjour je suis Nahil, je suis un Développeur Full Stack
					</p>
					<p>
						J'ai travaillé avec <strong>PHP</strong> et{' '}
						<strong>tailwind</strong> depuis <strong>2 ans</strong>,
						construire des sites bien chargé en back-end
					</p>
					<p>
						J'aime résoudre des problèmes, apprendre de nouvelles choses et expérimenter avec
						différentes technologies. Quand je ne code pas, je travaille probablement sur
						un projet personnel ou j'explore quelque chose de nouveau.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											| {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
