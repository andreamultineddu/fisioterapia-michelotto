const SectionLabel = ({ children }: { children: React.ReactNode }) => <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">{children}</p>;

const SectionTitle = ({ children }: { children: React.ReactNode }) => <h1 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-dark mb-6">{children}</h1>;

export default function MassoterapiaPage() {
	return (
		<div className="font-sans font-light text-text bg-warm-white overflow-x-hidden">
			<section className="bg-cream pt-28 md:pt-32 pb-28">
				<div className="max-w-6xl mx-auto px-8 md:px-16">
					<SectionLabel>Trattamento</SectionLabel>
					<SectionTitle>
						Massoterapia <em className="italic text-deep-sage">manuale</em>
					</SectionTitle>

					<div className="flex flex-col gap-7">
						<p className="text-[0.95rem] leading-[1.85] text-muted">
							La massoterapia è una pratica terapeutica che utilizza diverse tecniche di massaggio manuale con l'obiettivo di migliorare il benessere fisico e favorire la funzionalità muscolare. Attraverso manipolazioni come frizioni, impastamenti e pressioni mirate, il massoterapista interviene sui tessuti molli del corpo — muscoli, tendini e fascia — per ridurre tensioni, alleviare dolori e stimolare la circolazione sanguigna e
							linfatica.
						</p>

						<p className="text-[0.95rem] leading-[1.85] text-muted">Questa disciplina trova applicazione sia in ambito preventivo sia riabilitativo: aiuta a recuperare dopo traumi o sforzi intensi, migliora la mobilità articolare e contribuisce a ridurre lo stress. La massoterapia, praticata da professionisti qualificati, rappresenta un supporto efficace per chi desidera mantenere o ritrovare equilibrio e benessere psicofisico.</p>

						<p className="text-[0.95rem] leading-[1.85] text-muted">
							Oltre ai benefici muscolari, la massoterapia svolge un ruolo importante nel supporto al sistema circolatorio. Le manovre applicate favoriscono infatti il flusso di sangue verso i tessuti, migliorando l'ossigenazione cellulare e accelerando i processi di recupero. Allo stesso tempo, la stimolazione del sistema linfatico contribuisce alla riduzione di edemi e gonfiori, risultando utile anche in caso di ritenzione idrica
							o dopo interventi di natura ortopedica. Questo rende la massoterapia una tecnica versatile, adatta a persone di età e condizioni diverse, purché valutate preventivamente da un professionista.
						</p>

						<p className="text-[0.95rem] leading-[1.85] text-muted">
							Dal punto di vista del benessere psicologico, la massoterapia aiuta a contrastare lo stress e le tensioni emotive, grazie alla sua azione rilassante sul sistema nervoso. Il contatto manuale e il ritmo cadenzato delle manovre favoriscono una sensazione di calma profonda, con effetti positivi sulla qualità del sonno e sulla gestione dell'ansia. Per molti, le sedute rappresentano un momento dedicato all'ascolto del
							proprio corpo e alla prevenzione di fastidi legati a posture scorrette o a uno stile di vita sedentario. In questo modo la massoterapia si configura come un efficace strumento di cura e mantenimento del benessere globale.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
