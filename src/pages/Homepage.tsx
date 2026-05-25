import { useState } from 'react';

/* ── piccoli componenti riutilizzabili ── */

const SectionLabel = ({ children }: { children: React.ReactNode }) => <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">{children}</p>;

const SectionTitle = ({ children }: { children: React.ReactNode }) => <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-dark mb-6">{children}</h2>;

/* ── tipi form ── */

interface FormState {
	nome: string;
	cognome: string;
	email: string;
	trattamento: string;
	messaggio: string;
}

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */

export default function TherapyPage() {
	const [form, setForm] = useState<FormState>({
		nome: '',
		cognome: '',
		email: '',
		trattamento: '',
		messaggio: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

	const handleSubmit = () => {
		console.log('Form inviato:', form);
		// TODO: integra con la tua logica di invio
	};

	return (
		<div className="font-sans font-light text-text bg-warm-white overflow-x-hidden">
			{/* ══ ABOUT ══ */}
			<section id="about" className="bg-cream pt-28 md:pt-32 pb-28">
				<div className="max-w-6xl mx-auto px-8 md:px-16">
					<div className="grid md:grid-cols-[1fr_1.4fr] gap-20 items-center">
						{/* visual */}
						<div className="relative h-[480px] hidden md:block">
							<div className="absolute top-0 left-0 w-56 h-72 bg-deep-sage flex items-end p-8">
								<p className="font-serif text-base text-white/70 italic leading-snug">«Il movimento è vita, la postura è il suo fondamento.»</p>
							</div>
							<div
								className="absolute border border-stone"
								style={{
									top: 290,
									left: 230,
									right: 10,
									bottom: 230,
								}}
							/>
							<div className="absolute bottom-0 right-0 w-52 h-56 bg-stone flex items-center justify-center">
								<span className="font-serif text-[3.5rem] text-white/60 font-light">♾</span>
							</div>
						</div>

						{/* content */}
						<div className="flex flex-col gap-7">
							<SectionLabel>Chi Sono</SectionLabel>
							<SectionTitle>
								Professionista certificato in <em className="italic text-deep-sage">terapia manuale</em>
							</SectionTitle>
							<p className="text-[0.95rem] leading-[1.85] text-muted">Sono un Massaggiatore e Operatore di Discipline Bionaturali con formazione avanzata nelle principali metodologie integrate di rieducazione posturale e lavoro corporeo. La mia pratica unisce rigore scientifico e sensibilità manuale, con l'obiettivo di accompagnare ogni persona verso un benessere autentico e duraturo.</p>
							<p className="text-[0.95rem] leading-[1.85] text-muted">Opero con un approccio olistico che considera il corpo nella sua globalità: dalla struttura scheletrica alle tensioni profonde del sistema nervoso, dal riequilibrio posturale alla fluidità del ritmo craniosacrale.</p>
							<div className="flex flex-wrap gap-3 mt-1">
								{['MCB Certificato', 'Operatore Pancafit®', 'Terapia Craniosacrale', 'Rieducazione Posturale'].map((c) => (
									<span
										key={c}
										className="text-[0.68rem] tracking-[0.15em] uppercase text-deep-sage
                                   border border-sage px-4 py-2"
									>
										{c}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ══ SERVICES ══ */}
			<section id="services" className="bg-warm-white py-28">
				<div className="max-w-6xl mx-auto px-8 md:px-16">
					<div className="mb-16 max-w-[52ch]">
						<SectionLabel>Trattamenti</SectionLabel>
						<SectionTitle>
							Tre <em className="italic text-deep-sage">discipline</em>, un approccio integrato
						</SectionTitle>
					</div>
					<div className="grid md:grid-cols-3 border border-sage/80">
						{services.map((s, i) => (
							<div
								key={s.name}
								className={`p-12 relative overflow-hidden group cursor-default
                               hover:bg-sage/[0.06] transition-colors duration-400
                               ${i < services.length - 1 ? 'border-r border-sage/80' : ''}`}
							>
								{/* barra bottom hover */}
								<div
									className="absolute bottom-0 left-0 right-0 h-[3px] bg-deep-sage
                                scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400"
								/>
								<div className="font-serif text-[4rem] font-light text-stone/40 leading-none mb-6">0{i + 1}</div>
								<h3 className="font-serif text-[1.6rem] font-normal text-dark">{s.name}</h3>
								<p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-5">{s.subtitle}</p>
								<p className="text-[0.88rem] leading-[1.8] text-muted">{s.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ══ APPROACH ══ */}
			<section id="approach" className="bg-deep-sage py-28">
				<div className="max-w-6xl mx-auto px-8 md:px-16">
					<div className="grid md:grid-cols-2 gap-24 items-center">
						<div>
							<p className="text-[0.65rem] tracking-[0.35em] uppercase text-stone mb-4">Il Metodo</p>
							<h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-cream mb-10">
								Un percorso <em className="italic">su misura</em>
							</h2>
							<ul className="flex flex-col gap-8">
								{steps.map((step, i) => (
									<li key={step.title} className="flex gap-6 items-start">
										<div
											className="shrink-0 w-8 h-8 border border-stone/40 flex items-center justify-center
                                    text-[0.7rem] text-stone tracking-wide mt-0.5"
										>
											0{i + 1}
										</div>
										<div>
											<p className="font-serif text-[1.1rem] text-cream mb-1">{step.title}</p>
											<p className="text-[0.85rem] leading-[1.75] text-cream/60">{step.text}</p>
										</div>
									</li>
								))}
							</ul>
						</div>
						<blockquote
							className="font-serif text-[clamp(1.6rem,2.5vw,2.4rem)] font-light italic
                                   leading-[1.4] text-cream/85 border-l-2 border-stone pl-8"
						>
							"Non si tratta solo di alleviare un sintomo, ma di restituire al corpo la sua intelligenza naturale e la capacità di autoregolarsi."
						</blockquote>
					</div>
				</div>
			</section>

			{/* ══ CONTACT ══ */}
			<section id="contact" className="bg-cream py-28">
				<div className="max-w-6xl mx-auto px-8 md:px-16">
					<div className="grid md:grid-cols-2 gap-24">
						{/* info */}
						<div>
							<SectionLabel>Contatti</SectionLabel>
							<SectionTitle>
								Inizia il tuo <em className="italic text-deep-sage">percorso</em>
							</SectionTitle>
							<p className="text-[0.95rem] leading-[1.85] text-muted mb-12">Scrivimi per un primo contatto o per prenotare una seduta di valutazione. Rispondo entro 24 ore.</p>
							<div className="flex flex-col gap-8">
								{contactInfo.map(({ label, value }) => (
									<div key={label}>
										<p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-1">{label}</p>
										<p className="font-serif text-[1.3rem] text-dark">{value}</p>
									</div>
								))}
							</div>
						</div>

						{/* form */}
						<div className="flex flex-col gap-5">
							<div className="grid grid-cols-2 gap-4">
								<FormField label="Nome" name="nome" value={form.nome} onChange={handleChange} placeholder="Il tuo nome" />
								<FormField label="Cognome" name="cognome" value={form.cognome} onChange={handleChange} placeholder="Il tuo cognome" />
							</div>
							<FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="nome@esempio.it" />
							<FormField label="Trattamento di interesse" name="trattamento" value={form.trattamento} onChange={handleChange} placeholder="MCB, Pancafit®, Craniosacrale…" />
							<div className="flex flex-col gap-1">
								<label className="text-[0.65rem] tracking-[0.25em] uppercase text-muted">Messaggio</label>
								<textarea
									name="messaggio"
									value={form.messaggio}
									onChange={handleChange}
									placeholder="Descrivi brevemente il tuo bisogno…"
									rows={4}
									className="bg-transparent border-0 border-b border-stone/60 py-3
                                     font-sans text-[0.9rem] font-light text-text outline-none
                                     placeholder:text-muted/40 focus:border-deep-sage transition-colors
                                     resize-none"
								/>
							</div>
							<button
								onClick={handleSubmit}
								className="inline-flex items-center gap-3 bg-dark text-warm-white w-fit
                                 px-9 py-4 text-[0.72rem] tracking-[0.22em] uppercase
                                 hover:bg-deep-sage hover:-translate-y-0.5 transition-all duration-300 mt-2"
							>
								Invia richiesta
								<ArrowRight />
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

/* ── sub-components ── */

function ArrowRight() {
	return (
		<svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
			<path d="M0 6h14M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
		</svg>
	);
}

interface FormFieldProps {
	label: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	type?: string;
}
function FormField({ label, name, value, onChange, placeholder, type = 'text' }: FormFieldProps) {
	return (
		<div className="flex flex-col gap-1">
			<label className="text-[0.65rem] tracking-[0.25em] uppercase text-muted">{label}</label>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className="bg-transparent border-0 border-b border-stone/60 py-3
                        font-sans text-[0.9rem] font-light text-text outline-none
                        placeholder:text-muted/40 focus:border-deep-sage transition-colors"
			/>
		</div>
	);
}

/* ── data ── */

const services = [
	{
		name: 'MCB',
		subtitle: 'Catene Muscolari e Biologiche',
		desc: 'La Metodologia delle Catene Muscolari e Biologiche analizza le tensioni che percorrono il corpo lungo linee di forza continue. Attraverso tecniche manuali specifiche, si agisce sulla causa profonda dei dolori posturali, ripristinando equilibrio e libertà di movimento in modo globale e duraturo.',
	},
	{
		name: 'Pancafit®',
		subtitle: 'Stretching Globale Attivo',
		desc: "Il metodo Pancafit® utilizza un'attrezzatura brevettata per praticare lo stretching globale attivo in posizioni decompressive. Permette di allungare in modo sincronizzato le catene muscolari posteriori, correggendo compensi posturali e riducendo tensioni croniche in modo dolce e progressivo.",
	},
	{
		name: 'Craniosacrale',
		subtitle: 'Terapia del Sistema Cranico',
		desc: 'La terapia craniosacrale agisce sul ritmo sottile prodotto dalla circolazione del liquido cerebrospinale. Con tocco leggero e preciso si liberano le restrizioni del sistema membranoso e osseo, favorendo il riequilibrio del sistema nervoso, riducendo stress e migliorando il benessere generale.',
	},
];

const steps = [
	{
		title: 'Valutazione Posturale',
		text: "Ogni percorso inizia con un'analisi globale della postura, dell'anamnesi e delle abitudini di vita per comprendere la persona nella sua totalità.",
	},
	{
		title: 'Trattamento Integrato',
		text: 'Le tecniche vengono scelte e combinate in base alle esigenze individuali, integrando MCB, Pancafit® e craniosacrale con precisione e continuità.',
	},
	{
		title: 'Accompagnamento nel Tempo',
		text: 'Il benessere è un processo. Il programma evolve con te, monitorando i progressi e adattando le sessioni per risultati profondi e stabili.',
	},
];

const contactInfo = [
	{ label: 'Telefono', value: '+39 000 000 0000' },
	{ label: 'Email', value: 'studio@esempio.it' },
	{ label: 'Studio', value: 'Via Esempio, 00 · Città' },
	{ label: 'Orari', value: 'Lun – Ven, 9:00 – 19:00' },
];
