import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 flex flex-col items-center gap-12">
            <div
                className="w-full h-64 md:h-80 lg:h-96 xl:h-[28rem] bg-cover"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
                    backgroundPosition: 'center 75%',
                }}
                role="img"
                aria-label="banner informativo"
            />

            <div className="w-full flex flex-col justify-center items-center gap-12 px-6 md:px-20 pb-12">
                <h2 className="text-2xl md:text-3xl text-center font-semibold">
                    Davide Michelotto — Fisioterapia
                </h2>

                <div className="w-full max-w-4xl flex flex-col gap-6 text-justify text-base md:text-lg leading-relaxed">
                    <p>
                        Il corpo è un sistema straordinario in quanto registra
                        ogni movimento, ogni abitudine, ogni tensione ed ogni
                        emozione. A volte però si sbilancia, perde armonia, e
                        inizia a comunicare attraverso tensioni ricorrenti,
                        rigidità, stanchezza, posture scorrette per arrivare poi
                        al dolore.
                    </p>

                    <p>
                        Il mio lavoro nasce da qui: dall’ascolto del corpo e
                        dall’osservazione di ciò che esso racconta. Sono
                        Massoterapista MCB specializzato in riequilibrio
                        posturale attraverso Pancafit® Raggi Method ®, uno
                        strumento capace di lavorare sulla globalità delle
                        catene muscolari, liberando tensioni profonde e
                        restituendo armonia al movimento.
                    </p>

                    <p>
                        Il metodo che utilizzo unisce competenza manuale,
                        approccio posturale e capacità di osservazione.
                    </p>
                </div>
                
                <div className="w-full max-w-4xl flex flex-col gap-6 text-justify text-base md:text-lg leading-relaxed">
                    <h2 className="text-xl md:text-2xl text-center font-semibold">
                        Ogni persona è unica e ogni corpo esprime il proprio linguaggio
                    </h2>

                    <div>
                        <h3 className="font-medium">
                            Con la Massoterapia agisco su:
                        </h3>
                        <ul className="list-disc list-inside mt-2">
                            <li>Tensioni muscolari localizzate</li>
                            <li>Dolori cervicali, lombari e dorsali</li>
                            <li>Rigidità articolari</li>
                            <li>Sovraccarichi da stress</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium">
                            Con Pancafit ® Raggi Method ® intervengo su:
                        </h3>
                        <ul className="list-disc list-inside mt-2">
                            <li>Riequilibrio delle catene muscolari</li>
                            <li>Allungamento muscolare globale</li>
                            <li>Miglioramento del respiro</li>
                            <li>Posture alterate o dolorose</li>
                            <li>
                                Schemi di compenso che limitano libertà e
                                fluidità del movimento
                            </li>
                        </ul>
                    </div>

                    <p>
                        La sinergia di questi due strumenti crea un percorso
                        efficace, profondo e duraturo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
