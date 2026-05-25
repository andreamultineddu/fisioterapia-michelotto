const SectionLabel = ({ children }: { children: React.ReactNode }) => <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">{children}</p>;

const SectionTitle = ({ children }: { children: React.ReactNode }) => <h1 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-dark mb-6">{children}</h1>;

export default function PancafitPage() {
	return (
		<div className="font-sans font-light text-text bg-warm-white overflow-x-hidden">
			<section className="bg-cream pt-28 md:pt-32 pb-28">
				<div className="max-w-6xl mx-auto px-8 md:px-16">
					<SectionLabel>Metodo</SectionLabel>
					<SectionTitle>
						Pancafit<sup className="text-[0.5em]">®</sup> <em className="italic text-deep-sage">Raggi Method</em>
						<sup className="text-[0.5em]">®</sup>
					</SectionTitle>

					<div className="flex flex-col gap-7">
						<p className="text-[0.95rem] leading-[1.85] text-muted">
							La Pancafit è un metodo posturale ideato dal professor Raggi con l'obiettivo di riequilibrare globalmente il corpo attraverso l'allungamento delle catene muscolari. Utilizza una panca regolabile che permette di mantenere il corpo in posture specifiche, studiate per rilasciare tensioni profonde e migliorare la mobilità. La tecnica si basa sulla "decompensazione", ossia l'eliminazione dei compensi posturali che il corpo
							sviluppa nel tempo a causa di stress, traumi, posture scorrette o abitudini quotidiane ripetitive.
						</p>

						<p className="text-[0.95rem] leading-[1.85] text-muted">
							Uno degli aspetti chiave della Pancafit è l'approccio globale: invece di concentrarsi su un singolo distretto, mira a intervenire sull'intero sistema muscolo-fasciale. L'allungamento viene effettuato in modo dolce ma progressivo, rispettando i tempi del corpo e favorendo una respirazione diaframmatica profonda. Questo processo permette di sciogliere irrigidimenti che spesso non vengono percepiti, ma che influenzano la
							postura e la qualità del movimento.
						</p>

						<p className="text-[0.95rem] leading-[1.85] text-muted">
							Dal punto di vista dei benefici, il metodo Pancafit può aiutare a ridurre dolori muscolari e articolari, migliorare la postura e prevenire ricadute legate a tensioni croniche. È utilizzato sia in ambito rieducativo sia preventivo, poiché favorisce un riequilibrio dell'intera struttura corporea. Inoltre, il lavoro sulla respirazione contribuisce a ridurre lo stress e a migliorare la consapevolezza corporea, rendendo le
							sedute utili non solo sul piano fisico ma anche su quello emotivo e funzionale.
						</p>

						<p className="text-[0.95rem] leading-[1.85] text-muted">
							Un ulteriore punto di forza della Pancafit è la sua adattabilità: le posture possono essere personalizzate in base alle esigenze della persona, rendendo il metodo adatto a sportivi, persone sedentarie, anziani o individui in fase di recupero da infortuni. Il professionista valuta attentamente la storia posturale del soggetto e struttura un percorso graduale che permette di ottenere miglioramenti stabili nel tempo.
							Grazie alla sua natura non invasiva e alla possibilità di monitorare facilmente i progressi, la Pancafit viene spesso integrata anche in programmi di riabilitazione o in percorsi di benessere a lungo termine.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
