// PrivacyPolicy.tsx
// Sostituisci i segnaposto tra [parentesi quadre] con i tuoi dati reali.

export default function PrivacyPolicy() {
	return (
		<div className="font-sans font-light text-cream min-h-screen">
			{/* ── CONTENUTO ── */}
			<main className="max-w-3xl mx-auto px-8 pt-40 pb-28">
				{/* header */}
				<p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">Informativa legale</p>
				<h1 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.1] text-dark mb-4">Privacy Policy</h1>
				<p className="text-[0.8rem] tracking-[0.1em] text-muted mb-16">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })}</p>

				<div className="flex flex-col gap-12">
					<Section title="1. Titolare del trattamento">
						<p>
							Il titolare del trattamento dei dati personali è <strong>[Nome e Cognome]</strong>, con studio in <strong>[Indirizzo completo]</strong>, C.F. <strong>[Codice Fiscale]</strong>.
						</p>
						<p>
							Contatto email del titolare:{' '}
							<a href="mailto:[email@esempio.it]" className="text-deep-sage hover:underline">
								[email@esempio.it]
							</a>
						</p>
					</Section>

					<Section title="2. Tipologie di dati trattati">
						<p>Questo sito web non raccoglie alcun dato personale attraverso form, cookie, strumenti di analisi o tecnologie di tracciamento di alcun tipo.</p>
						<p>
							L'unico trattamento che avviene è quello effettuato automaticamente dai sistemi informatici e dai software dell'infrastruttura di hosting, necessari al funzionamento del sito. Si tratta di <strong>dati di navigazione</strong>, ovvero informazioni che i sistemi informatici acquisiscono automaticamente durante la normale navigazione in Internet, tra cui:
						</p>
						<ul className="list-disc list-inside flex flex-col gap-1 pl-2">
							<li>indirizzi IP o nomi a dominio dei dispositivi utilizzati dagli utenti</li>
							<li>indirizzi URI/URL delle risorse richieste</li>
							<li>orario della richiesta</li>
							<li>metodo utilizzato nel sottoporre la richiesta al server</li>
							<li>dimensione del file ottenuto in risposta</li>
							<li>codice numerico indicante lo stato della risposta dal server</li>
							<li>altri parametri relativi al sistema operativo e al browser dell'utente</li>
						</ul>
						<p>
							Questi dati sono utilizzati esclusivamente per ricavare informazioni statistiche anonime sull'uso del sito e per controllarne il corretto funzionamento. I log vengono cancellati automaticamente entro <strong>[30/60/90] giorni</strong> dalla loro registrazione (verifica la policy del tuo provider di hosting).
						</p>
					</Section>

					<Section title="3. Base giuridica del trattamento">
						<p>
							Il trattamento dei dati di navigazione descritti al punto 2 si fonda sul <strong>legittimo interesse</strong> del titolare (art. 6, par. 1, lett. f del Regolamento UE 2016/679 – GDPR) consistente nell'esigenza di garantire la sicurezza e il corretto funzionamento del sito web.
						</p>
					</Section>

					<Section title="4. Modalità del trattamento e conservazione">
						<p>
							I dati di navigazione sono trattati con strumenti automatizzati e conservati su server gestiti dal provider di hosting <strong>[Nome provider, es. Vercel / Netlify / Hetzner]</strong>.
						</p>
						<p>I dati non vengono comunicati a terzi, né utilizzati per finalità commerciali, di profilazione o di marketing.</p>
					</Section>

					<Section title="5. Diritti dell'interessato">
						<p>In qualità di interessato, hai il diritto di:</p>
						<ul className="list-disc list-inside flex flex-col gap-1 pl-2">
							<li>accedere ai tuoi dati personali (art. 15 GDPR)</li>
							<li>richiederne la rettifica (art. 16 GDPR)</li>
							<li>richiederne la cancellazione (art. 17 GDPR)</li>
							<li>opporti al trattamento (art. 21 GDPR)</li>
							<li>richiedere la limitazione del trattamento (art. 18 GDPR)</li>
							<li>proporre reclamo all'autorità di controllo competente</li>
						</ul>
						<p>
							L'autorità di controllo in Italia è il{' '}
							<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-deep-sage hover:underline">
								Garante per la protezione dei dati personali
							</a>
							, raggiungibile all'indirizzo <span className="font-medium">www.garanteprivacy.it</span>.
						</p>
						<p>Per esercitare i tuoi diritti puoi contattare il titolare all'indirizzo email indicato al punto 1.</p>
					</Section>

					<Section title="6. Cookie e tecnologie di tracciamento">
						<p>
							Questo sito <strong>non utilizza cookie</strong> di alcun tipo — né tecnici, né analitici, né di profilazione — e non impiega alcuna tecnologia di tracciamento o storage lato browser (localStorage, sessionStorage, ecc.).
						</p>
						<p>Non è pertanto necessario il rilascio del consenso ai sensi del D.Lgs. 196/2003 (Codice Privacy) e del Provvedimento del Garante in materia di cookie.</p>
					</Section>

					<Section title="7. Modifiche alla presente informativa">
						<p>Il titolare si riserva di apportare modifiche alla presente informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con aggiornamento della data in calce. Si invita pertanto a consultare periodicamente questa pagina.</p>
					</Section>
				</div>
			</main>
		</div>
	);
}

/* ── Section wrapper ── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="font-serif text-[1.4rem] font-light text-dark border-b border-stone/30 pb-3">{title}</h2>
			<div className="flex flex-col gap-3 text-[0.92rem] leading-[1.85] text-muted">{children}</div>
		</div>
	);
}
