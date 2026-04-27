import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const tabs = ['Mer', 'Terre', 'Végétal', 'Feu']

const dishes = {
  Mer: [
    {
      ar: 'صدف البحر', fr: "L'Écho de l'Océan",
      desc1: 'A whispered memory of the Atlantic coast.',
      desc2: "Salt gathered by hand, paired with the earth's deepest roots.",
      ingredients: 'Wild Sea Fennel · Fermented Kelp · Smoked Olive Oil',
      price: 'MAD 450', img: '/images/harira-bowl.jpg', reverse: false,
    },
    {
      ar: 'حبر و رمل', fr: 'Encre & Sable',
      desc1: 'Drawn from the cold depths where light surrenders.',
      desc2: 'A textural study of shadow and sea floor.',
      ingredients: 'Cuttlefish Ink · Black Garlic · Preserved Lemon Dust',
      price: 'MAD 620', img: '/images/fish-board-1.jpg', reverse: true,
    },
    {
      ar: 'روح الغابة', fr: "L'Esprit de la Forêt",
      desc1: 'A dialogue between fire and earth.',
      desc2: 'Sun-dried elements returned to their primal state.',
      ingredients: 'Wild Thyme · Smoked Pine · Desert Truffle',
      price: 'MAD 380', img: '/images/fish-spread.jpg', reverse: false,
    },
    {
      ar: 'ثمار الشمس', fr: 'Fruits du Soleil',
      desc1: 'Capturing the ephemeral sweetness of the Atlas peaks.',
      desc2: 'A vibrant contrast of heat and nectar.',
      ingredients: 'Mountain Berry · Honey Suckle · Spiced Syrup',
      price: 'MAD 290', img: '/images/fish-board-2.jpg', reverse: true,
    },
    {
      ar: 'مائدة الأطلس', fr: 'La Table de l\'Atlas',
      desc1: 'A shared offering of abundance and tradition.',
      desc2: 'Forged in the heart of the hearth.',
      ingredients: 'Charred Sea Bass · Preserved Greens · Harissa Root',
      price: 'MAD 750', img: '/images/shrimp-fire.jpg', reverse: false,
    },
  ],
  Terre: [
    {
      ar: 'جذور الأطلس', fr: "Racines de l'Atlas",
      desc1: 'Extracted from the ancient soil of the High Atlas.',
      desc2: 'A meditation on patience and mineral depth.',
      ingredients: 'Black Truffle · Root Celeriac · Aged Argan Oil',
      price: 'MAD 520', img: '/images/breakfast-table.jpg', reverse: false,
    },
    {
      ar: 'طين الأرض', fr: 'Argile & Mémoire',
      desc1: 'A composition built from the earth\'s memory.',
      desc2: 'Slow-roasted, wrapped in clay, revealed at the table.',
      ingredients: 'Lamb Shank · Atlas Clay · Ras el Hanout',
      price: 'MAD 680', img: '/images/feast-table.jpg', reverse: true,
    },
  ],
  Végétal: [
    {
      ar: 'نبض الحديقة', fr: 'Pouls du Jardin',
      desc1: 'A seasonal gathering from the heirloom garden.',
      desc2: 'Raw, fermented, and alive.',
      ingredients: 'Preserved Lemon · Wild Herbs · Cold-Press Olive',
      price: 'MAD 310', img: '/images/harira-bowl.jpg', reverse: false,
    },
  ],
  Feu: [
    {
      ar: 'جمر الليل', fr: 'Braise de Nuit',
      desc1: 'Born from the embers that never fully die.',
      desc2: 'The primal ritual of smoke and transformation.',
      ingredients: 'Live Fire Shrimp · Charred Peppers · Smoked Chermoula',
      price: 'MAD 490', img: '/images/shrimp-fire.jpg', reverse: false,
    },
  ],
}

const accords = [
  { icon: 'water_drop', title: 'Infusion Botanique', desc: 'Distilled sea rosemary and bitter orange blossom.', price: '+ MAD 120', featured: false },
  { icon: 'wine_bar',   title: 'Cave du Maghreb',   desc: 'A curated selection of natural regional wines.',  price: '+ MAD 350', featured: true },
  { icon: 'local_fire_department', title: 'Elixir Fumé', desc: 'Charred cedar and wild mint extraction.',    price: '+ MAD 180', featured: false },
]

export default function Carte() {
  const [activeTab, setActiveTab] = useState<keyof typeof dishes>('Mer')
  const currentDishes = dishes[activeTab]

  return (
    <div className="bg-surface text-on-surface antialiased selection:bg-secondary/20 selection:text-secondary overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <header className="relative min-h-[819px] flex flex-col items-center justify-center bg-[#1A3A2E] text-center pt-32 px-gutter overflow-hidden border-b border-outline-variant">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(201,169,97,0.15)_0%,transparent_70%)] pointer-events-none"></div>
        <h1 className="font-display-ar text-display-ar text-secondary mb-6 relative z-10 tracking-widest drop-shadow-md">الخريطة</h1>
        <p className="font-headline-md text-headline-md text-on-surface-variant max-w-2xl italic relative z-10">Not every dish is a dish. Each one is a passage.</p>
        <div className="mt-16 flex items-center space-x-4 opacity-50 relative z-10">
          <div className="h-[1px] w-16 bg-secondary"></div>
          <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>flare</span>
          <div className="h-[1px] w-16 bg-secondary"></div>
        </div>
      </header>

      {/* Main on parchment */}
      <main className="bg-[#F4EDE4] text-surface-container-highest min-h-screen relative">

        {/* Tabs */}
        <section className="py-16 px-gutter border-b border-surface-container-highest/20">
          <div className="max-w-5xl mx-auto flex justify-center space-x-8 md:space-x-24">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as keyof typeof dishes)}
                className={`font-label-sm text-label-sm uppercase tracking-widest pb-2 transition-all ${
                  activeTab === tab
                    ? 'text-[#1A3A2E] border-b-2 border-[#C9A961]'
                    : 'text-[#1A3A2E]/50 hover:text-[#1A3A2E] hover:border-b-2 hover:border-[#C9A961]/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* Dish list */}
        <section className="py-section-gap px-gutter max-w-7xl mx-auto space-y-32">
          {currentDishes.map((dish, i) => (
            <article key={i} className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              {/* Photo */}
              <div className={`md:col-span-5 relative group ${dish.reverse ? 'md:order-2' : ''}`}>
                <div className="aspect-[3/4] relative overflow-hidden border border-[#C9A961]/30 p-2">
                  <div className="absolute inset-0 bg-surface-container-highest/5 z-10 pointer-events-none vignette-effect"></div>
                  <img
                    alt={dish.fr}
                    className="w-full h-full object-cover filter brightness-75 contrast-125 saturate-[0.8] sepia-[0.1] transition-transform duration-1000 group-hover:scale-105"
                    src={dish.img}
                  />
                </div>
              </div>
              {/* Text */}
              <div className={`md:col-span-7 space-y-8 flex flex-col justify-center ${dish.reverse ? 'md:order-1 text-right' : ''}`}>
                <div>
                  <h2 className="font-display-ar text-display-ar text-[#1A3A2E] mb-2">{dish.ar}</h2>
                  <h3 className="font-headline-md text-headline-md text-[#1A3A2E]/80 italic">{dish.fr}</h3>
                </div>
                <div className="space-y-4 font-body-md text-body-md text-[#37342e]">
                  <p>{dish.desc1}</p>
                  <p>{dish.desc2}</p>
                </div>
                <div className={`pt-6 border-t border-[#1A3A2E]/10 ${dish.reverse ? 'flex flex-col items-end' : ''}`}>
                  <p className="font-label-sm text-label-sm uppercase tracking-[0.15em] text-[#1A3A2E]/70 mb-4">
                    {dish.ingredients}
                  </p>
                  <span className="font-body-md text-sm text-[#C9A961] tracking-widest">{dish.price}</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* L'Accord */}
        <section className="py-section-gap px-gutter bg-[#1A3A2E] text-on-surface border-y border-outline-variant relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10 text-center mb-16">
            <h2 className="font-display-lat text-display-lat text-secondary mb-4">L'Accord</h2>
            <p className="font-body-md text-on-surface-variant italic">Elevate the passage with curated elixirs.</p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {accords.map(a => (
              <div
                key={a.title}
                className={`bg-surface-container-low p-8 flex flex-col items-center text-center transition-colors duration-500 ${
                  a.featured
                    ? 'border border-secondary/30 relative overflow-hidden shadow-[inset_0_0_20px_rgba(201,169,97,0.05)]'
                    : 'border border-outline-variant/50 hover:border-secondary/50'
                }`}
              >
                {a.featured && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-secondary/50"></div>}
                <span className="material-symbols-outlined text-secondary text-3xl mb-6" style={{ fontVariationSettings: "'FILL' 0" }}>{a.icon}</span>
                <h4 className="font-headline-md text-lg text-on-surface mb-2">{a.title}</h4>
                <p className="font-body-md text-on-surface-variant text-sm mb-6 flex-grow">{a.desc}</p>
                <span className="font-label-sm text-label-sm text-secondary tracking-widest">{a.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-gutter text-center">
          <h2 className="font-headline-md text-headline-md text-[#1A3A2E] italic mb-12">Compose your passage</h2>
          <a
            href="/reservation"
            className="inline-flex items-center justify-center border border-[#C9A961] px-12 py-5 font-label-sm text-label-sm uppercase tracking-widest text-[#1A3A2E] hover:bg-[#1A3A2E] hover:text-secondary transition-colors duration-500 group"
          >
            Reserve a table
            <span className="material-symbols-outlined ml-4 opacity-70 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_right_alt</span>
          </a>
        </section>

      </main>

      <Footer />
    </div>
  )
}
