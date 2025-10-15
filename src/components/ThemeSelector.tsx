import React, { useEffect, useState } from 'react';

interface ThemeSelectorProps {
	className?: string;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ className = '' }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Check for saved theme preference or default to light mode
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;

		if (savedTheme) {
			const isDark = savedTheme === 'dark';
			setIsDarkMode(isDark);
			applyTheme(isDark);
		} else if (prefersDark) {
			setIsDarkMode(true);
			applyTheme(true);
		}
	}, []);

	// Apply theme to document
	const applyTheme = (isDark: boolean) => {
		if (isDark) {
			document.documentElement.classList.add('dark-theme');
			document.documentElement.classList.remove('light-theme');
		} else {
			document.documentElement.classList.add('light-theme');
			document.documentElement.classList.remove('dark-theme');
		}
	};

	// Toggle theme
	const toggleTheme = () => {
		const newTheme = !isDarkMode;
		setIsDarkMode(newTheme);
		applyTheme(newTheme);
		localStorage.setItem('theme', newTheme ? 'dark' : 'light');

		// Announce theme change for screen readers
		const announcement = newTheme
			? 'Dark mode activated'
			: 'Light mode activated';
		announceToScreenReader(announcement);
	};

	// Announce changes to screen readers
	const announceToScreenReader = (message: string) => {
		const announcement = document.createElement('div');
		announcement.setAttribute('aria-live', 'polite');
		announcement.setAttribute('aria-atomic', 'true');
		announcement.className = 'sr-only';
		announcement.textContent = message;

		document.body.appendChild(announcement);
		setTimeout(() => {
			document.body.removeChild(announcement);
		}, 1000);
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggleTheme();
		}
	};

	return (
		<div className={`theme-selector ${className}`}>
			<button
				onClick={toggleTheme}
				onKeyDown={handleKeyDown}
				className="theme-toggle"
				aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
				aria-pressed={isDarkMode}
				title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
				type="button"
			>
				<div className="toggle-container">
					<div className="toggle-switch">
						<span className="toggle-icon sun-icon" aria-hidden="true">
							☀️
						</span>
						<span className="toggle-icon moon-icon" aria-hidden="true">
							🌙
						</span>
						<div className="toggle-slider" />
					</div>
				</div>
				<span className="toggle-label">
					{isDarkMode ? 'Dark' : 'Light'} Mode
				</span>
			</button>
		</div>
	);
};

export default ThemeSelector;
