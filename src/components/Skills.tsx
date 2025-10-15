import React from 'react';
import { Skill } from '../types';

const Skills: React.FC = () => {
	// Sergi's technical skills - can be customized
	const skills: Skill[] = [
		// Frontend
		{ name: 'React', level: 'Expert', icon: '⚛️', category: 'Frontend' },
		{ name: 'TypeScript', level: 'Advanced', icon: '📘', category: 'Frontend' },
		{ name: 'Vue.js', level: 'Advanced', icon: '💚', category: 'Frontend' },
		{
			name: 'Angular',
			level: 'Intermediate',
			icon: '🅰️',
			category: 'Frontend',
		},
		{ name: 'Next.js', level: 'Advanced', icon: '▲', category: 'Frontend' },

		// Backend
		{ name: 'Node.js', level: 'Expert', icon: '💚', category: 'Backend' },
		{ name: 'Python', level: 'Advanced', icon: '🐍', category: 'Backend' },
		{ name: 'Java', level: 'Intermediate', icon: '☕', category: 'Backend' },
		{ name: 'Express.js', level: 'Expert', icon: '🚀', category: 'Backend' },
		{ name: 'Django', level: 'Advanced', icon: '🎸', category: 'Backend' },

		// Database
		{ name: 'MongoDB', level: 'Advanced', icon: '🍃', category: 'Database' },
		{ name: 'PostgreSQL', level: 'Advanced', icon: '🐘', category: 'Database' },
		{ name: 'MySQL', level: 'Intermediate', icon: '🗄️', category: 'Database' },
		{ name: 'Redis', level: 'Intermediate', icon: '🔴', category: 'Database' },

		// Tools
		{ name: 'Git', level: 'Expert', icon: '📊', category: 'Tools' },
		{ name: 'Docker', level: 'Advanced', icon: '🐳', category: 'Tools' },
		{ name: 'AWS', level: 'Intermediate', icon: '☁️', category: 'Tools' },
		{ name: 'VS Code', level: 'Expert', icon: '💻', category: 'Tools' },
	];

	const groupedSkills = skills.reduce((acc, skill) => {
		if (!acc[skill.category]) {
			acc[skill.category] = [];
		}
		acc[skill.category].push(skill);
		return acc;
	}, {} as Record<string, Skill[]>);

	const getLevelColor = (level: string): string => {
		switch (level) {
			case 'Expert':
				return 'expert';
			case 'Advanced':
				return 'advanced';
			case 'Intermediate':
				return 'intermediate';
			default:
				return 'beginner';
		}
	};

	return (
		<section id="skills" className="skills">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title">Skills & Technologies</h2>
					<p className="section-subtitle">
						The tools and technologies I use to bring ideas to life
					</p>
				</div>

				<div className="skills-categories">
					{Object.entries(groupedSkills).map(([category, categorySkills]) => (
						<div key={category} className="skill-category">
							<h3 className="category-title">{category}</h3>
							<div className="skills-grid">
								{categorySkills.map((skill) => (
									<div key={skill.name} className="skill-card">
										<div className="skill-icon">{skill.icon}</div>
										<div className="skill-info">
											<h4 className="skill-name">{skill.name}</h4>
											<div
												className={`skill-level ${getLevelColor(skill.level)}`}
											>
												<span className="level-text">{skill.level}</span>
												<div className="level-bar">
													<div className="level-fill"></div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="skills-summary">
					<div className="summary-card">
						<h3>What I Bring to Your Project</h3>
						<ul>
							<li>✅ Full-stack development expertise</li>
							<li>✅ Modern frameworks and best practices</li>
							<li>✅ Scalable and maintainable code</li>
							<li>✅ Performance optimization</li>
							<li>✅ Responsive and accessible design</li>
							<li>✅ API development and integration</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
