import React from 'react';
import { Project } from '../types';

const Projects: React.FC = () => {
	// Sample projects for Sergi - these can be customized later
	const projects: Project[] = [
		{
			id: '1',
			title: 'ClickityClackityCloom',
			description:
				'First desktop software. full-featured auto-clicker tool just designed for my own purposes. Completely adjustable to fit various needs.',
			technologies: ['C#', '.NET', 'UI/UX'],
			image: '/api/placeholder/400/250',
			demoUrl: 'https://github.com/scastarnado/ClickityClackityCloom',
			featured: true,
		},
		{
			id: '2',
			title: 'OpPlatform',
			description:
				'Collaborative project management tool with drag-and-drop functionality, team chat, and progress tracking.',
			technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io'],
			image: '/api/placeholder/400/250',
			demoUrl: 'https://demo.example.com',
			featured: true,
		},
		{
			id: '3',
			title: 'StudyBuddy',
			description:
				'Comprehensive analytics platform for social media management with automated reporting and insights.',
			technologies: ['Next.js', 'Python', 'FastAPI', 'Redis'],
			image: '/api/placeholder/400/250',
			demoUrl: 'https://demo.example.com',
			featured: true,
		},
		{
			id: '4',
			title: 'KebabClicker',
			description:
				'Complete LMS with course creation, student progress tracking, and interactive quizzes.',
			technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
			image: '/api/placeholder/400/250',
			demoUrl: 'https://demo.example.com',
			featured: false,
		},
	];

	return (
		<section id="projects" className="projects">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title">Featured Projects</h2>
					<p className="section-subtitle">
						Ready-to-use solutions that somehow motivated me to code them and
						might be useful to you.
					</p>
				</div>

				<div className="projects-grid">
					{projects.map((project) => (
						<div
							key={project.id}
							className={`project-card ${project.featured ? 'featured' : ''}`}
						>
							<div className="project-image">
								<img src={project.image} alt={project.title} />
								<div className="project-overlay">
									<a
										href={project.demoUrl}
										className="btn btn-small btn-white"
										target="_blank"
										rel="noopener noreferrer"
									>
										Live Demo
									</a>
								</div>
							</div>

							<div className="project-content">
								<h3 className="project-title">{project.title}</h3>
								<p className="project-description">{project.description}</p>

								<div className="project-tech">
									{project.technologies.map((tech) => (
										<span key={tech} className="tech-tag">
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="projects-cta">
					<p>
						Need a custom solution? Let's discuss your project requirements!
					</p>
					<a href="#contact" className="btn btn-outline">
						Get Custom Quote
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
