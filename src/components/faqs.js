import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(1);

  return (
    <section className='bg-gray-100 py-20'>
      <div className='container'>
        <h2>Preguntas frecuentes</h2>
        <div className='w-full shadow-sm mb-2 mt-12'>
          <p
            id={1}
            className='w-full p-4 bg-white mb-0 cursor-pointer rounded-lg border border-gray-200 font-semibold'
            onClick={(e) => setFaqOpen(e.target.id)}
          >
            <span className='font-bold mr-4 text-brand-1'>›</span>¿Cómo se aplica Exodus Max?</p>
          <p className={`${faqOpen == 1 ? 'flex' : 'hidden'} bg-gray-200 p-20`}>
            Agite vigorosamente el envase antes de usar: abra el empaque cuidadosamente y mida la cantidad requerida de Exodusmax, según la etiqueta, cultivo y recomendaciones técnicas que se le otorgan junto con el producto. Apóyese de una probeta. Para la correcta disociación de Exodusmax es necesario agitarlo en la mitad del volumen de agua indicado para cada aplicación, posteriormente agregue el volumen de agua faltante y vuelva a agitar.
          </p>
        </div>
        <div className='w-full shadow-sm mb-2'>
          <p
            id={2}
            className='w-full p-4 bg-white mb-0 cursor-pointer rounded-lg border border-gray-200 font-semibold'
            onClick={(e) => setFaqOpen(e.target.id)}
          >
            <span className='font-bold mr-4 text-brand-1'>›</span>¿Cómo actúa Exodus Max?</p>
          <p className={`${faqOpen == 2 ? 'flex' : 'hidden'} bg-gray-200 p-20`}>
            Una vez que entra en contacto con el material genético de los microorganismos, Exodusmax destruye las cadenas carbonocarbono y carbono–nitrógeno. Ideal para el tratamiento de enfermedades causadas por hongos y bacterias fitopatógenas que atacan follaje y/o lesionan la zona radicular, así como los diferentes fitoplasmas transmitidos por vectores en los diferentes cultivos agrícolas
          </p>
        </div>
        <div className='w-full shadow-sm mb-2'>
          <p
            id={3}
            className='w-full p-4 bg-white mb-0 cursor-pointer rounded-lg border border-gray-200 font-semibold'
            onClick={(e) => setFaqOpen(e.target.id)}
          >
            <span className='font-bold mr-4 text-brand-1'>›</span>¿Cuáles cultivos se pueden tratar con Exodus Max?</p>
          <p className={`${faqOpen == 3 ? 'flex' : 'hidden'} bg-gray-200 p-20`}>
            Calabaza, calabacita, chayote, melón, pepino, sandía, arándano, fresa, frambuesa, grosella, zarzamora, vid, jitomate (tomate rojo), berenjena, chile, papa, pimiento morrón, papayo, cebolla, Ajo, esparrago, col de Bruselas, col, coliflor, manzano, peral, toronja, limón, lima, mandarina, naranja, lechuga, espinaca, acelga, apio, frijol, garbanzo, avena, chícharo, zanahoria, betabel, camote y arroz
          </p>
        </div>
        <div className='w-full shadow-sm mb-2'>
          <p
            id={4}
            className='w-full p-4 bg-white mb-0 cursor-pointer rounded-lg border border-gray-200 font-semibold'
            onClick={(e) => setFaqOpen(e.target.id)}
          >
            <span className='font-bold mr-4 text-brand-1'>›</span>¿Cuáles enfermedades se pueden tratar con Exodus Max?</p>
          <p className={`${faqOpen == 4 ? 'flex' : 'hidden'} bg-gray-200 p-20`}>
            Dependerá del tipo de cultivo en particular, pero de manera general se pueden tratar las siguientes: Cenicilla (Leveillula taurica), Mancha bacteriaza (Xanthomonas axonopodis pv. Vesicatoria), , Cáncer bacteriano (Clavibacter michiganensis), Mancha bacteriana (Xanthomonas campestris), Mildiu (Pseudoperonospora cubensis), Cenicilla polvorienta (Erysiphe cichoracearum), Antracnosis (Gloesporium fragariae), Moho gris (Botrytis cinérea), Cenicilla polvorienta (Sphaerotheca macularis), Cenicilla (Uncinula necátor), Pudrición amarga (Guignardia bidwellii)
          </p>
        </div>
      </div>
    </section>
  )
}