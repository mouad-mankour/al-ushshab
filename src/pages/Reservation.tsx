import { useState } from 'react'
import { Link } from 'react-router-dom'

const STEPS = ['Date', 'Heure', 'Convives', 'Coordonnées', 'Confirmation']
const TIMES = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30']
const MONTHS_FR = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']
const MONTHS_AR = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
const DAYS = ['L','M','M','J','V','S','D']

function getDaysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate() }
function getFirstDay(y: number, m: number) { return new Date(y, m, 1).getDay() || 7 }

export default function Reservation() {
  const today = new Date()
  const [step, setStep] = useState(0)
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [guests, setGuests] = useState(2)
  const [form, setForm] = useState({ name: '', email: '', phone: '', note: '' })

  const daysInMonth = getDaysInMonth(year, month)
  const blanks = getFirstDay(year, month) - 1

  const prevMonth = () => month === 0 ? (setYear(y => y - 1), setMonth(11)) : setMonth(m => m - 1)
  const nextMonth = () => month === 11 ? (setYear(y => y + 1), setMonth(0)) : setMonth(m => m + 1)

  const canNext = [
    selectedDay !== null,
    selectedTime !== null,
    guests >= 1,
    !!(form.name && form.email),
    true,
  ][step]

  return (
    <div className="bg-surface text-on-surface min-h-screen antialiased flex flex-col">

      {/* Top bar */}
      <div className="bg-[#1A3A2E]/80 backdrop-blur-xl border-b border-amber-900/20 px-8 py-4 flex items-center justify-between">
        <Link to="/" className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-amber-100/60 hover:text-amber-200 transition-colors">
          ← Retour
        </Link>
        <Link to="/" className="text-amber-500 font-display-ar italic tracking-tighter text-xl">العشّاب</Link>
        <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-amber-100/60">ع · FR · EN</span>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">

        {/* Logo */}
        <div className="mb-8">
          <span className="font-display-ar text-secondary text-4xl">العشّاب</span>
        </div>

        {/* Step progress */}
        <div className="flex items-center mb-12">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center">
              <button
                onClick={() => i < step && setStep(i)}
                className={`w-2 h-2 transition-all duration-300 ${
                  i === step ? 'bg-secondary w-3 h-3' :
                  i < step  ? 'bg-secondary/50' :
                              'border border-outline-variant bg-transparent'
                }`}
              />
              {i < STEPS.length - 1 && (
                <div className={`w-12 h-[1px] mx-1 transition-colors duration-500 ${i < step ? 'bg-secondary/40' : 'bg-outline-variant/40'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Content panel */}
        <div className="w-full max-w-lg">

          {/* STEP 0 — Date */}
          {step === 0 && (
            <div className="flex flex-col items-center gap-10">
              <p className="font-display-lat text-headline-md text-secondary italic text-center">When would you like to join us?</p>
              <div className="w-full border border-outline-variant bg-surface-container p-6">
                <div className="flex items-center justify-between mb-5">
                  <button onClick={prevMonth} className="text-on-surface-variant hover:text-secondary transition-colors text-xl px-2">‹</button>
                  <div className="text-center">
                    <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">{MONTHS_FR[month]} {year}</p>
                    <p className="font-display-ar text-sm text-secondary/60 mt-1" dir="rtl">{MONTHS_AR[month]}</p>
                  </div>
                  <button onClick={nextMonth} className="text-on-surface-variant hover:text-secondary transition-colors text-xl px-2">›</button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {DAYS.map((d, i) => (
                    <div key={i} className="font-label-sm text-[10px] text-outline uppercase tracking-widest py-2">{d}</div>
                  ))}
                  {Array.from({ length: blanks }).map((_, i) => <div key={`b${i}`} />)}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1
                    const isPast = new Date(year, month, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate())
                    return (
                      <button
                        key={day}
                        disabled={isPast}
                        onClick={() => setSelectedDay(day)}
                        className={`aspect-square flex items-center justify-center font-body-md text-sm transition-all duration-200 ${
                          selectedDay === day ? 'border border-secondary text-secondary' :
                          isPast ? 'text-outline-variant/40 cursor-default' :
                          'text-on-surface hover:border hover:border-outline-variant'
                        }`}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 1 — Heure */}
          {step === 1 && (
            <div className="flex flex-col items-center gap-10">
              <p className="font-display-lat text-headline-md text-secondary italic text-center">À quelle heure souhaitez-vous dîner?</p>
              <div className="grid grid-cols-4 gap-3 w-full">
                {TIMES.map(t => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-4 font-label-sm text-label-sm uppercase tracking-widest transition-all duration-200 ${
                      selectedTime === t
                        ? 'border border-secondary text-secondary'
                        : 'border border-outline-variant text-on-surface-variant hover:border-outline hover:text-on-surface'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 — Convives */}
          {step === 2 && (
            <div className="flex flex-col items-center gap-10">
              <p className="font-display-lat text-headline-md text-secondary italic text-center">Combien serez-vous?</p>
              <div className="flex items-center gap-12">
                <button
                  onClick={() => setGuests(g => Math.max(1, g - 1))}
                  className="w-12 h-12 border border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary transition-all text-xl flex items-center justify-center"
                >−</button>
                <div className="text-center">
                  <span className="font-display-lat text-6xl text-on-surface">{guests}</span>
                  <p className="font-label-sm text-label-sm uppercase tracking-widest text-outline mt-2">
                    {guests === 1 ? 'Convive' : 'Convives'}
                  </p>
                </div>
                <button
                  onClick={() => setGuests(g => Math.min(20, g + 1))}
                  className="w-12 h-12 border border-outline-variant text-on-surface-variant hover:border-secondary hover:text-secondary transition-all text-xl flex items-center justify-center"
                >+</button>
              </div>
              {guests > 8 && (
                <p className="font-body-md text-body-md text-outline text-center max-w-xs">
                  Pour les groupes de plus de 8 personnes, nous vous contacterons pour un menu privatif.
                </p>
              )}
            </div>
          )}

          {/* STEP 3 — Coordonnées */}
          {step === 3 && (
            <div className="flex flex-col items-center gap-10">
              <p className="font-display-lat text-headline-md text-secondary italic text-center">Vos coordonnées</p>
              <div className="grid grid-cols-1 gap-8 w-full">
                {[
                  { key: 'name',  label: 'Nom complet',    type: 'text' },
                  { key: 'email', label: 'Adresse e-mail', type: 'email' },
                  { key: 'phone', label: 'Téléphone',      type: 'tel' },
                ].map(f => (
                  <div key={f.key} className="relative">
                    <label className="font-display-lat text-sm italic text-outline mb-2 block">{f.label}</label>
                    <input
                      type={f.type}
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      className="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface font-body-md text-body-md pb-2 focus:outline-none focus:border-secondary transition-colors caret-secondary"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-display-lat text-sm italic text-outline mb-2 block">Note spéciale (optionnel)</label>
                  <textarea
                    rows={3}
                    value={form.note}
                    onChange={e => setForm(p => ({ ...p, note: e.target.value }))}
                    className="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface font-body-md text-body-md pb-2 focus:outline-none focus:border-secondary transition-colors resize-none caret-secondary"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4 — Confirmation */}
          {step === 4 && (
            <div className="flex flex-col items-center gap-8 py-8">
              <div className="w-16 h-16 border border-secondary/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>check</span>
              </div>
              <h3 className="font-display-lat text-headline-md text-on-surface italic text-center">Réservation confirmée</h3>
              <div className="border border-secondary/20 bg-surface-container-lowest p-6 w-full text-center space-y-2">
                <p className="font-display-ar text-secondary text-2xl">{selectedDay} {MONTHS_AR[month]}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                  {MONTHS_FR[month]} {year} · {selectedTime} · {guests} {guests === 1 ? 'convive' : 'convives'}
                </p>
              </div>
              <p className="font-body-md text-body-md text-outline text-center max-w-xs">
                Un email de confirmation vous sera envoyé à <span className="text-on-surface">{form.email}</span>.
              </p>
              <Link
                to="/"
                className="mt-4 px-8 py-4 border border-secondary text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em] hover:bg-secondary/10 transition-colors duration-500"
              >
                Retour à l'accueil
              </Link>
            </div>
          )}

          {/* Navigation bar */}
          {step < 4 && (
            <div className="flex items-center justify-between mt-12 pt-6 border-t border-outline-variant/30">
              {step > 0 ? (
                <button
                  onClick={() => setStep(s => s - 1)}
                  className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-outline hover:text-on-surface transition-colors"
                >
                  BACK
                </button>
              ) : <div />}
              <button
                onClick={() => canNext && setStep(s => s + 1)}
                className={`px-10 py-4 font-label-sm text-label-sm uppercase tracking-[0.2em] transition-all duration-300 ${
                  canNext
                    ? 'border border-secondary text-secondary hover:bg-secondary/10'
                    : 'border border-outline-variant/30 text-outline-variant cursor-default'
                }`}
              >
                {step === 3 ? 'CONFIRMER' : 'CONTINUE'}
              </button>
            </div>
          )}

        </div>
      </main>

    </div>
  )
}
