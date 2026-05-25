import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		navigazione: [
			{ path: '/', label: 'Home' },
			{ path: '/massoterapia', label: 'Massoterapia' },
			{ path: '/pancafit', label: 'Pancafit' },
		],
		contatti: [
			{
				label: 'Email',
				value: 'info@fisioterapia.it',
				href: 'mailto:info@fisioterapia.it',
			},
			{
				label: 'Telefono',
				value: '+39 123 456 7890',
				href: 'tel:+391234567890',
			},
			{
				label: 'Indirizzo',
				value: 'Via Roma 123, 00100 Roma',
				href: '#',
			},
		],
	};

	return (
		<footer className="bg-dark text-cream/85">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Brand Section */}
					<div>
						<h3 className="font-serif text-[1.1rem] tracking-[0.15em] text-cream/85 mb-4">Studio · Terapia Manuale</h3>
						{false && <p className="text-sm text-cream/45">Il tuo centro di fisioterapia di fiducia. Offriamo servizi professionali per il benessere e la riabilitazione.</p>}
					</div>

					{/* Navigation Links */}
					<div>
						<h4 className="text-lg font-semibold text-cream/85 mb-4">Navigazione</h4>
						<ul className="space-y-2">
							{footerLinks.navigazione.map((link) => (
								<li key={link.path}>
									<Link to={link.path} className="text-sm hover:text-cream transition-colors duration-200">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-lg font-semibold text-cream/85 mb-4">Contatti</h4>
						<ul className="space-y-2">
							{footerLinks.contatti.map((contact, index) => (
								<li key={index}>
									<a href={contact.href} className="text-sm hover:text-cream transition-colors duration-200">
										<span className="font-medium">{contact.label}:</span> {contact.value}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-8 pt-8 border-t border-cream/15">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
						<p className="text-[0.72rem] tracking-wide text-cream/45">© {currentYear} · Tutti i diritti riservati</p>
						<div className="flex space-x-6">
							<Link to="/privacy" className="text-[0.72rem] tracking-wide text-cream/45 hover:text-cream transition-colors duration-200">
								Privacy Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
