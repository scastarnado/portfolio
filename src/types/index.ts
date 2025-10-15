// Type definitions for Sergi's Portfolio Page

export interface Project {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	image: string;
	demoUrl?: string;
	featured: boolean;
}

export interface Skill {
	name: string;
	level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
	icon: string;
	category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Design';
}

export interface ContactFormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export interface SocialLink {
	platform: string;
	url: string;
	icon: string;
}

export interface Service {
	title: string;
	description: string;
	icon: string;
	price: string;
}
