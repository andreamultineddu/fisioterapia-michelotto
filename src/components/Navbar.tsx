import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const isActive = (path: string) => {
		return `/${location.pathname.split('/')[1]}` === `/${path.split('/')[1]}`;
	};

	const navItems = [
		{ path: '/', label: 'Home' },
		{ path: '/massoterapia', label: 'Massoterapia' },
		{ path: '/pancafit', label: 'Pancafit' },
	];

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const linkClass = (path: string) => `text-[0.75rem] tracking-[0.2em] uppercase no-underline transition-colors duration-300 ${isActive(path) ? 'text-deep-sage' : 'text-muted hover:text-deep-sage'}`;

	return (
		<nav
			className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between
                       px-4 sm:px-6 lg:px-8 xl:px-16 py-5
                       bg-warm-white/85 backdrop-blur-md border-b border-stone/25"
		>
			<Link to="/" onClick={closeMenu} className="font-serif text-[1.15rem] tracking-[0.18em] uppercase text-deep-sage">
				Studio · Terapia Manuale
			</Link>

			{/* Desktop menu */}
			<ul className="hidden md:flex gap-11 list-none">
				{navItems.map((item) => (
					<li key={item.path}>
						<Link to={item.path} className={linkClass(item.path)}>
							{item.label}
						</Link>
					</li>
				))}
			</ul>

			{/* Burger button - Mobile only */}
			<button
				onClick={toggleMenu}
				className="md:hidden inline-flex items-center justify-center p-2 text-muted
                           hover:text-deep-sage transition-colors duration-300"
				aria-expanded={isMenuOpen}
				aria-label="Toggle menu"
			>
				<svg className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
					{isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
				</svg>
			</button>

			{/* Mobile dropdown menu */}
			<div
				className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out
                    bg-warm-white/95 backdrop-blur-md border-b border-stone/25 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<ul className="py-4 px-4 sm:px-6 lg:px-8 xl:px-16 space-y-3 list-none">
					{navItems.map((item) => (
						<li key={item.path}>
							<Link to={item.path} onClick={closeMenu} className={`block ${linkClass(item.path)}`}>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
