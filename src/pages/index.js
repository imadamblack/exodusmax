import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i02 from '../../public/landing/07.png';
import i03 from '../../public/landing/03.png';
import i04 from '../../public/landing/08.png';
import i13 from '../../public/landing/13.png';
import clavibacter from '../../public/landing/clavibacter.jpg';
import moho from '../../public/landing/moho.png';
import mildew from '../../public/landing/mildew.png';
import cenicilla from '../../public/landing/cenicilla.jpg';
import faqs from '../../public/landing/faqs.jpg';
import Faqs from '../components/faqs';

export default function Home() {
  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Mándanos un WhatsApp',
    description: 'Solicita una asesoría de nuestro ingeniero sin costo',
  };

  return (
    <>
      <section
        className="relative h-[80vh] w-full flex flex-col justify-center items-center bg-[url('/landing/00.jpg')] bg-cover">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-1 via-transparent to-cyan-400 z-10"/>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-1 via-transparent to-[#49ea60] opacity-50 z-10"/>
        <div className="absolute inset-0 bg-black opacity-30 z-10"/>

        <div className="w-full lg:w-1/2 text-center text-white z-10 p-8">
          <h1
            className="relative font-medium ft-11 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            Controla hasta el 90% de hongos y bacterias en tu cultivo de manera orgánica y sustentable
          </h1>
          <div className="flex flex-col justify-center items-center mt-12">
            <p className="ft-2 font-medium text-center mb-12">{cta.description}</p>
            <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          </div>
        </div>
        <div className="absolute flex flex-col justify-center items-center text-white bottom-8 mt-8 md:mt-20 z-10">
          <p className="ft-1">Sigue leyendo</p>
          <div className="animate-bounce">
            <div className="ft-3 material-icons mx-auto">expand_more</div>
          </div>
        </div>
        <div className="w-full h-full absolute bg-black/30 -z-1"/>
      </section>

      <section className="reading-container mb-16">
        <div className="flex border-b border-brand-1 pb-4 mb-8">
          <span className="material-icons mr-2 -ft-2">timer</span>
          <p className="-ft-2" style={{marginBlockEnd: 0}}>Conoce los principales beneficios en 4 min</p>
        </div>
        <p className="ft-2">
          Tú y yo sabemos que la idea de seguir usando los mismos métodos y productos de siempre es tentadora.
          <br/><br/>
          Después de todo, si no está roto, ¿por qué arreglarlo?
          <br/><br/>
          Pero, ¿cuántas temporadas llevas viendo cómo se pierden tus cosechas por las mismas enfermedades?
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Garantías"
        title="La mejor garantía que te podemos dar es el testimonio de más agricultores como tú"
        image={i13}
      />
      <section className="my-16">
        <div className="flex flex-col items-center justify-center md:mx-52 mx-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white mx-auto">
            <div className="w-full flex flex-col bg-brand-1 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-12 py-16 flex-grow">
                <div className="relative w-full flex justify-center text-brand-2">
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                </div>
                <p className="text-center">
                  "Desde que usamos Exodusmax, hemos visto una mejora increíble en la salud de nuestros cultivos. Es
                  fácil de aplicar y, lo mejor de todo, es que es completamente seguro para el ambiente. Nuestros
                  clientes están muy satisfechos con los resultados."
                </p>
                <div>
                  <p className="text-brand-2 ft-4 font-bold text-center">ALEJANDRA MARTÍNEZ</p>
                  <p className="text-brand-2 text-center">AgroSoluciones del Bajío</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-brand-1 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-12 py-16 flex-grow">
                <div className="relative w-full flex justify-center text-brand-2">
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                </div>
                <p className="text-center">
                  "Habíamos probado varios productos antes, pero ninguno nos dio los resultados que ofrece Exodusmax. Es
                  un tratamiento orgánico y eficaz contra las plagas, lo que nos permite mantener la calidad de nuestros
                  productos agrícolas."
                </p>
                <div>
                  <p className="text-brand-2 ft-4 font-bold text-center">ROBERTO GUTIÉRREZ</p>
                  <p className="text-brand-2 text-center">Campos Verdes</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col bg-brand-1 rounded-2xl overflow-hidden">
              <div className="flex flex-col gap-10 px-12 py-16 flex-grow">
                <div className="relative w-full flex justify-center text-brand-2">
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                  <div className="material-icons ft-6">stars</div>
                </div>
                <p className="text-center">
                  "Lo que más me gusta de Exodusmax es lo sencillo que es de aplicar y lo rápido que se notan los
                  cambios. Desde que lo implementamos, nuestros cultivos han estado más saludables, sin necesidad de
                  recurrir a químicos agresivos."
                </p>
                <div>
                  <p className="text-brand-2 ft-4 font-bold text-center">MARÍA LÓPEZ</p>
                  <p className="text-brand-2 text-center">Hortalizas del Norte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Atributos"
        title="Solución innovadora con resultados inmediatos"
        description="Protege tus cultivos sin dañar el medio ambiente"
        image={i02}
      />
      <section className="container my-16">
        <p className="ft-2 reading-container">Exodus Max es una nanobiomolécula que nos permite controlar de manera
          efectiva el 90% de los
          hongos y bacterias en tus cultivos, manteniéndolos saludables y aumentando su productividad sin recurrir a
          químicos dañinos</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16">
          <div className="w-full space-y-4 border border-brand-2 rounded-2xl p-8">
            <h3 className="ft-6 text-brand-2 font-bold">ORGÁNICO</h3>
            <p className="ft-2">Hecho con ingredientes naturales, sin químicos.</p>
          </div>
          <div className="w-full space-y-4 border border-brand-2 rounded-2xl p-8">
            <h3 className="ft-6 text-brand-2 font-bold">ECOLÓGICO</h3>
            <p className="ft-2">No daña el medio ambiente ni los cultivos.</p>
          </div>
          <div className="w-full space-y-4 border border-brand-2 rounded-2xl p-8">
            <h3 className="ft-6 text-brand-2 font-bold">EFICAZ</h3>
            <p className="ft-2">Aporta resultados inmediatos y tangibles en tu cultivo.</p>
          </div>
          <div className="w-full space-y-4 border border-brand-2 rounded-2xl p-8">
            <h3 className="ft-6 text-brand-2 font-bold">SEGURO</h3>
            <p className="ft-2">No representa riesgos para las personas ni los animales.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center reading-container">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="Nanoprotección total contra enfermedades"
        description="Controla las enfermedades más comunes en cultivos de berries, hortalizas y frutos más importantes de tu región"
        image={i03}
      />
      <section className="container my-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="relative rounded-2xl overflow-hidden pt-[20rem]">
            <Image src={clavibacter} layout="fill" objectFit="cover" objectPosition="center"/>
          </div>
          <div className="mt-12">
            <h3 className="text-center">CÁNCER BACTERIANO</h3>
            <p className="text-center">Clavibacter michiganensis</p>
          </div>
        </div>
        <div>
          <div className="relative rounded-2xl overflow-hidden h-[20rem]">
            <Image src={cenicilla} layout="fill" objectFit="cover" objectPosition="center"/>
          </div>
          <div className="mt-12">
            <h3 className="text-center mt-4">CENICILLA</h3>
            <p className="text-center">Clavibacter michiganensis</p>
          </div>
        </div>
        <div>
          <div className="relative rounded-2xl overflow-hidden h-[20rem]">
            <Image src={moho} layout="fill" objectFit="cover" objectPosition="center"/>
          </div>
          <div className="mt-12">
            <h3 className="text-center mt-4">MOHO GRIS</h3>
            <p className="text-center">Clavibacter michiganensis</p>
          </div>
        </div>
        <div>
          <div className="relative rounded-2xl overflow-hidden h-[20rem]">
            <Image src={mildew} layout="fill" objectFit="cover" objectPosition="center"/>
          </div>
          <div className="mt-12">
            <h3 className="text-center mt-4">MILDIU</h3>
            <p className="text-center">Clavibacter michiganensis</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Proceso"
        title="¿Cómo puedes comenzar a ahorrar con BioPoliagua?"
        image={i04}
      />
      <section className="reading-container my-16">
        <p className="ft-2">
          <b>Te platico cómo te ayudamos a ahorrar recursos:</b>
        </p>
        <ol className="space-y-4">
          <li className="ft-1">Puedes <b>adquirir Exodus Max</b> enviándonos un mensaje de WhatsApp</li>
          <li className="ft-1">Solicitas una videollamada o <b>visita de un ingeniero</b></li>
          <li className="ft-1"><b>Te capacitamos</b> para que apliques el producto de forma correcta</li>
          <li className="ft-1">Te acompañamos con <b>asistencia técnica</b> hasta la cosecha</li>
          <li className="ft-1">Notas como <b>las enfermedades desaparecen</b> de inmediato</li>
        </ol>
        <p className="ft-2">
          Contamos con un equipo de ingenieros especializados en agricultura sustentable.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact"><a className="button mb-4">{cta.main}</a></Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="FAQs"
        title="Si tienes dudas, probablemente estén aquí"
        image={faqs}
      />
      <section className="container py-8">
        <Faqs/>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-brand-1 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="font-semibold text-white tracking-wide">
              Listo, es momento de contactar a uno de nuestros ingenieros
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">
                Ya llegaste hasta acá, <br/>
                ya le dedicaste unos minutos de tu valioso tiempo a saber como puedes ahorrar agua y contribuir al medio
                ambiente.
                <br/><br/>
                Regálanos unos datos y envíanos un WhatsApp.
              </p>
            </div>
            <OptInForm/>
          </div>
        </div>
      </section>
    </>
  );
}
