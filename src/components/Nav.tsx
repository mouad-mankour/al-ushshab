import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Origin',   to: '/' },
  { label: 'Map',      to: '/carte' },
  { label: 'Ritual',   to: '#' },
  { label: 'Workshop', to: '#' },
  { label: 'Elixirs',  to: '#' },
  { label: 'Art',      to: '#' },
  { label: 'Journal',  to: '#' },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <nav className="bg-[#1A3A2E]/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-amber-900/20 transition-opacity duration-1000 delay-100">
      <div className="flex justify-between items-center px-8 md:px-16 py-6 w-full">
        <Link to="/" className="text-amber-500 font-display-ar italic tracking-tighter text-xl">
          العشّاب
        </Link>
        <div className="hidden md:flex space-x-8">
          {links.map(l => {
            const active = l.to === '/' ? pathname === '/' : pathname.startsWith(l.to) && l.to !== '#'
            return (
              <Link
                key={l.label}
                to={l.to}
                className={`font-label-sm text-label-sm uppercase tracking-[0.2em] leading-relaxed transition-all duration-1000 ease-in-out ${
                  active
                    ? 'text-amber-400 border-b border-amber-400/50 pb-1'
                    : 'text-amber-100/60 hover:text-amber-200 hover:tracking-[0.25em]'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>
        <div className="flex items-center space-x-6">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-amber-100/60 hidden sm:block">ع · FR · EN</span>
          <Link
            to="/reservation"
            className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-amber-400/90 hover:text-amber-200 hover:tracking-[0.25em] transition-all duration-1000 ease-in-out border border-amber-900/40 px-4 py-2"
          >
            Reserve
          </Link>
        </div>
      </div>
    </nav>
  )
}
