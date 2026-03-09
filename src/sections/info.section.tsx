import { FaGithub} from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
			<a
				href='https://github.com/Abdullahiqbal2021/portfolio-latest'
				target='_blank'
				rel='noopener noreferrer'
				className='github-ribbon'
			>
				<div>⭐ Star this repo</div>
				<span></span>
			</a>
			<FloatingButton
				label='About Me'
				className='first'
				href='/#about-me'
			/>
			<p>Mon nom est</p>
			<TextHover
				text='NAHIL'
				className='name'
			/>
			<p>Développeur Full Stack</p>
			<FloatingButton
				label='Tech'
				className='sec'
				href='/#tech-stack'
			/>

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/nahildiabi8-stack'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				
				<GlowLink
					href='mailto:nahildiabi8@gmail.com'
					icon={<IoMailOutline color='rgb(18, 122, 209)' />}
					color=' rgb(18, 122, 209,0.7)'
					aria-label='mail'
				/>
			</div>
		</div>
	);
};
