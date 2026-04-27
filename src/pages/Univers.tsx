import Nav from '../components/Nav'
import Footer from '../components/Footer'

const elements = [
  {
    id: 'terre',
    label: 'La Terre',
    ar: 'التراب',
    sub: "L'ancrage et la mémoire",
    law: 'Loi I : Honorer la racine',
    img: '/images/breakfast-table.jpg',
    imgClass: 'grayscale sepia-[0.3]',
    reverse: false,
    lawAlign: 'left',
  },
  {
    id: 'mer',
    label: 'La Mer',
    ar: 'البحر',
    sub: "Le sel et l'abîme",
    law: 'Loi II : Puiser dans les profondeurs',
    img: '/images/fish-board-2.jpg',
    imgClass: 'filter contrast-125 saturate-0',
    reverse: true,
    lawAlign: 'right',
  },
  {
    id: 'vegetal',
    label: 'Le Végétal',
    ar: 'النبات',
    sub: "La sève et l'amertume",
    law: 'Loi III : Cueillir avec respect',
    img: '/images/herbs-sketch.jpg',
    imgClass: 'filter saturate-50 brightness-75',
    reverse: false,
    lawAlign: 'left',
  },
  {
    id: 'feu',
    label: 'Le Feu',
    ar: 'النار',
    sub: 'La cendre et la transformation',
    law: "Loi IV : Maîtriser l'incandescence",
    img: '/images/shrimp-fire.jpg',
    imgClass: 'filter contrast-125 saturate-50',
    reverse: true,
    lawAlign: 'right',
  },
]

const cycleSteps = [
  { icon: 'grain',                label: 'Matière',   active: true },
  { icon: 'local_fire_department',label: 'Feu',       active: false },
  { icon: 'pan_tool',             label: 'Geste',     active: false },
  { icon: 'hourglass_empty',      label: 'Temps',     active: false },
  { icon: 'restaurant',           label: 'Goût',      active: false },
  { icon: 'spa',                  label: 'Sensation', active: false },
  { icon: 'menu_book',            label: 'Mémoire',   active: true },
]

const memoirePhotos = [
  { src: '/images/restaurant-interior.jpg', alt: 'Salle Al-ʿUshshāb', span: 'col-span-7 row-span-2' },
  { src: '/images/group-table.jpg',         alt: 'Une table partagée',  span: 'col-span-5 row-span-1' },
  { src: '/images/feast-table.jpg',         alt: 'Le festin',           span: 'col-span-5 row-span-1' },
]

export default function Univers() {
  return (
    <div className="bg-surface text-on-surface antialiased selection:bg-secondary/20 selection:text-secondary overflow-x-hidden">
      <Nav />
      <main className="pt-32">

        {/* 1. HERO */}
        <section className="min-h-[870px] px-margin-page flex flex-col md:flex-row items-center justify-between gap-gutter relative">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center z-10 pl-8 md:pl-24">
            <h1 className="font-display-ar text-secondary mb-4 text-7xl md:text-9xl leading-none">الأصل</h1>
            <h2 className="font-display-lat text-display-lat text-on-surface-variant tracking-widest uppercase opacity-80 pl-2">L'origine</h2>
            <div className="mt-12 w-24 h-[1px] bg-outline-variant"></div>
          </div>
          <div className="w-full md:w-1/2 h-[716px] md:h-[870px] relative overflow-hidden border border-outline-variant p-2">
            <img
              className="w-full h-full object-cover filter contrast-125 saturate-50"
              src="/images/feast-table.jpg"
              alt="Table Al-ʿUshshāb"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(21,19,14,0.9)] pointer-events-none"></div>
          </div>
        </section>

        {/* 2. MANIFESTO */}
        <section className="py-section-gap px-margin-page flex justify-center">
          <div className="max-w-[720px] w-full text-center md:text-left flex flex-col gap-8">
            <p className="font-body-lg text-body-lg text-on-surface-variant relative leading-relaxed">
              <span className="font-display-lat text-6xl text-secondary float-left mr-4 mt-2 leading-none">N</span>
              ous ne cuisinons pas. Nous révélons. Dans l'ombre des rituels oubliés du Maghreb, chaque ingrédient est un fragment d'histoire, une mémoire enfouie dans la terre. Al-ʿUshshāb n'est pas un restaurant, c'est un sanctuaire dédié à la lenteur, à la noblesse de la matière brute et au geste immémorial.
            </p>
            <p className="font-display-ar text-3xl text-secondary text-right leading-loose mt-4 opacity-90" dir="rtl">
              نحن لا نطبخ، بل نكشف. في ظل الطقوس المنسية للمغرب الكبير، كل مكون هو جزء من التاريخ، ذاكرة مدفونة في الأرض. العشاب ليس مطعماً، بل هو ملاذ مكرس للبطء، لنبل المادة الخام والإيماءة الخالدة.
            </p>
            <div className="flex justify-center mt-8">
              <span className="material-symbols-outlined text-outline-variant text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>eco</span>
            </div>
          </div>
        </section>

        {/* 3. FOUR ELEMENTS */}
        <section className="py-section-gap px-margin-page flex flex-col gap-section-gap">
          {elements.map(el => (
            <div
              key={el.id}
              className={`flex flex-col ${el.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-gutter h-auto md:h-[819px]`}
            >
              <div className="w-full md:w-5/12 h-[512px] md:h-full relative p-1 border border-outline-variant/50">
                <img
                  className={`w-full h-full object-cover ${el.imgClass}`}
                  src={el.img}
                  alt={el.ar}
                />
              </div>
              <div className={`w-full md:w-7/12 flex flex-col justify-center px-8 ${el.reverse ? 'md:items-end md:text-right' : ''}`}>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-4">{el.label}</span>
                <h3 className="font-display-ar text-display-ar text-on-surface mb-2">{el.ar}</h3>
                <p className="font-display-lat text-headline-md text-on-surface-variant italic mb-8">{el.sub}</p>
                <p className={`font-label-sm text-label-sm text-secondary uppercase w-max ${
                  el.lawAlign === 'right'
                    ? 'border-r-2 border-secondary pr-4'
                    : 'border-l-2 border-secondary pl-4'
                }`}>
                  {el.law}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* 4. LE CYCLE ALCHIMIQUE */}
        <section className="py-section-gap px-margin-page bg-surface-container-lowest relative">
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{ backgroundImage: 'radial-gradient(circle at center, #e4c278 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="font-display-lat text-display-lat text-secondary mb-16 text-center">Le Cycle Alchimique</h2>
            <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 hidden md:block -z-10"></div>
              <div className="absolute left-1/2 top-0 h-full w-[1px] bg-outline-variant/30 md:hidden -z-10"></div>
              {cycleSteps.map(step => (
                <div key={step.label} className="flex flex-col items-center gap-4 py-8 md:py-0 bg-surface-container-lowest px-4">
                  <span
                    className={`material-symbols-outlined ${step.active ? 'text-secondary' : 'text-outline-variant'}`}
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {step.icon}
                  </span>
                  <span className={`font-label-sm text-label-sm uppercase tracking-widest ${step.active ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. MÉMOIRE */}
        <section className="py-section-gap px-margin-page">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] mb-4 block">Mémoire</span>
                <h2 className="font-display-ar text-display-ar text-on-surface">الذاكرة</h2>
              </div>
              <p className="font-display-lat text-headline-md text-on-surface-variant italic md:max-w-xs md:text-right">
                Les instants qui demeurent.
              </p>
            </div>

            <div className="grid grid-cols-12 gap-3 h-[600px] md:h-[700px]">
              {memoirePhotos.map((photo, i) => (
                <div key={i} className={`${photo.span} relative overflow-hidden border border-outline-variant/30 p-1 group`}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover filter brightness-90 contrast-110 saturate-75 transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(21,19,14,0.6)] pointer-events-none"></div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-8 h-[1px] bg-secondary/40"></div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-[0.2em]">Casablanca · Maroc</span>
              </div>
              <p className="font-display-lat text-sm italic text-on-surface-variant md:max-w-sm md:text-right">
                Chaque table est un acte de partage. Chaque repas, une mémoire gravée dans la chair et dans la fumée.
              </p>
            </div>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="py-section-gap px-margin-page flex justify-center items-center relative">
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-outline-variant/20 -z-10"></div>
          <div className="border border-secondary/30 bg-surface p-1">
            <div className="border border-secondary/20 p-12 flex flex-col items-center text-center gap-8 bg-surface-container-lowest">
              <h3 className="font-display-lat text-headline-md text-on-surface italic">Vivre cette philosophie</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Une invitation à franchir le seuil, à ralentir et à goûter au rituel de la terre et du feu.
              </p>
              <a
                href="/reservation"
                className="mt-4 px-8 py-4 border border-secondary text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em] hover:bg-secondary/10 transition-colors duration-500"
              >
                Réserver
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
