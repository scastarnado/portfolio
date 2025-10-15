import React from 'react';
import ThemeSelector from './ThemeSelector';

const Hero: React.FC = () => {
	return (
		<section className="hero">
			<ThemeSelector className="hero-theme-selector" />
			<div className="hero-container">
				<div className="hero-content">
					<div className="hero-text">
						<h1 className="hero-title">
							Hi, I'm <span className="highlight">Sergi Castarnado</span>
						</h1>
						<h2 className="hero-subtitle">
							Full Stack Developer & Digital Creator
						</h2>
						<p className="hero-description">
							I craft exceptional digital experiences through clean code,
							innovative solutions, and user-centered design. Let's build
							something amazing together.
						</p>
						<div className="hero-actions">
							<a href="#projects" className="btn btn-primary">
								View My Projects 🚀
							</a>
							<a href="#contact" className="btn btn-secondary">
								Get In Touch
							</a>
						</div>
					</div>
					<div className="hero-image">
						<div
							className="profile-placeholder"
							style={{
								backgroundImage: 'url(/images/profile.jpg)',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						></div>
					</div>
				</div>
				<div className="hero-stats">
					<div className="stat">
						<h3>Some</h3>
						<p>Projects Completed</p>
					</div>
					<div className="stat">
						<h3>A few</h3>
						<p>Years of Experience</p>
					</div>
					<div className="stat">
						<h3>99%</h3>
						<p>Recreative Coding</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
