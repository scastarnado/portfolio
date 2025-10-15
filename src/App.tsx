import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './styles/App.css';

const App: React.FC = () => {
	return (
		<div className="App">
			<Hero />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
