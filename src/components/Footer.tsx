import React from 'react';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-main">
						<div className="footer-brand">
							<h3>Sergi Castarnado</h3>
							<p>Full Stack Developer & Digital Creator</p>
						</div>

						<div className="footer-links">
							<div className="footer-section">
								<h4>Quick Links</h4>
								<ul>
									<li>
										<a href="#projects">Projects</a>
									</li>
									<li>
										<a href="#skills">Skills</a>
									</li>
									<li>
										<a href="#contact">Contact</a>
									</li>
								</ul>
							</div>

							<div className="footer-section">
								<h4>Services</h4>
								<ul>
									<li>
										<a href="#projects">Ready-made Solutions</a>
									</li>
									<li>
										<a href="#contact">Custom Development</a>
									</li>
									<li>
										<a href="#contact">Consulting</a>
									</li>
								</ul>
							</div>

							<div className="footer-section">
								<h4>Connect</h4>
								<ul>
									<li>
										<a
											href="https://linkedin.com/in/sergi-castarnado"
											target="_blank"
											rel="noopener noreferrer"
										>
											LinkedIn
										</a>
									</li>
									<li>
										<a
											href="https://github.com/scastarnado"
											target="_blank"
											rel="noopener noreferrer"
										>
											GitHub
										</a>
									</li>
									<li>
										<a href="mailto:sergi@castarnado.com">Email</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="footer-bottom">
						<div className="footer-copyright">
							<p>&copy; {currentYear} Sergi Castarnado. All rights reserved.</p>
						</div>
						<div className="footer-made-with">
							<p>Built with ❤️ using React & TypeScript</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
