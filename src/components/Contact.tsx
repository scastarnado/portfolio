import React, { useState } from 'react';
import { ContactFormData, SocialLink } from '../types';

const Contact: React.FC = () => {
	const [formData, setFormData] = useState<ContactFormData>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		'idle' | 'success' | 'error'
	>('idle');

	const socialLinks: SocialLink[] = [
		{
			platform: 'LinkedIn',
			url: 'https://www.linkedin.com/in/scastarnado/',
			icon: '💼',
		},
		{ platform: 'GitHub', url: 'https://github.com/scastarnado', icon: '🐱' },
		{ platform: 'Twitter', url: 'https://x.com/SergiCastarnado', icon: '🐦' },
		{ platform: 'Email', url: 'mailto:sergi.castarnado@gmail.com', icon: '📧' },
	];

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Simulate form submission - replace with actual form handler
			await new Promise((resolve) => setTimeout(resolve, 1000));

			console.log('Form submitted:', formData);
			setSubmitStatus('success');
			setFormData({ name: '', email: '', subject: '', message: '' });
		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="contact">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title">Let's Work Together</h2>
					<p className="section-subtitle">
						Ready to start your project? Get in touch and let's discuss how I
						can help bring your ideas to life.
					</p>
				</div>

				<div className="contact-content">
					<div className="contact-info">
						<div className="contact-card">
							<h3>Get In Touch</h3>
							<p>
								I'm always excited to work on new projects and collaborate with
								interesting people. Whether you need a complete solution or want
								to discuss a custom project, I'm here to help.
							</p>

							<div className="contact-details">
								<div className="contact-item">
									<span className="contact-icon">📧</span>
									<div>
										<strong>Email</strong>
										<p>sergi@castarnado.com</p>
									</div>
								</div>
								<div className="contact-item">
									<span className="contact-icon">🌍</span>
									<div>
										<strong>Location</strong>
										<p>Available worldwide (Remote)</p>
									</div>
								</div>
								<div className="contact-item">
									<span className="contact-icon">⚡</span>
									<div>
										<strong>Response Time</strong>
										<p>Usually within 24 hours</p>
									</div>
								</div>
							</div>

							<div className="social-links">
								<h4>Connect With Me</h4>
								<div className="social-grid">
									{socialLinks.map((link) => (
										<a
											key={link.platform}
											href={link.url}
											className="social-link"
											target="_blank"
											rel="noopener noreferrer"
											title={link.platform}
										>
											<span className="social-icon">{link.icon}</span>
											<span className="social-name">{link.platform}</span>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="contact-form-container">
						<form className="contact-form" onSubmit={handleSubmit}>
							<h3>Send Me a Message</h3>

							{submitStatus === 'success' && (
								<div className="form-message success">
									✅ Thanks for your message! I'll get back to you soon.
								</div>
							)}

							{submitStatus === 'error' && (
								<div className="form-message error">
									❌ Something went wrong. Please try again or email me
									directly.
								</div>
							)}

							<div className="form-row">
								<div className="form-group">
									<label htmlFor="name">Name *</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleInputChange}
										required
										placeholder="Your full name"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="email">Email *</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										required
										placeholder="your.email@example.com"
									/>
								</div>
							</div>

							<div className="form-group">
								<label htmlFor="subject">Subject *</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleInputChange}
									required
									placeholder="What's this about?"
								/>
							</div>

							<div className="form-group">
								<label htmlFor="message">Message *</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									required
									rows={6}
									placeholder="Tell me about your project, timeline, and any specific requirements..."
								></textarea>
							</div>

							<button
								type="submit"
								className="btn btn-primary btn-full"
								disabled={isSubmitting}
							>
								{isSubmitting ? 'Sending...' : 'Send Message 🚀'}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
