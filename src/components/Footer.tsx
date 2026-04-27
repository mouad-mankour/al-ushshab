export default function Footer() {
  return (
    <footer className="bg-[#0F2820] w-full relative overflow-hidden border-t border-amber-900/30 opacity-80 hover:opacity-100 transition-opacity duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-32 gap-y-16 px-12 md:px-32 py-24 max-w-full">
        <div className="col-span-1 md:col-span-3">
          <span className="text-4xl font-display-ar text-amber-500 mb-8 block">العشّاب</span>
        </div>
        <div className="flex flex-col gap-4 font-display-lat italic text-sm text-amber-100/40">
          <a className="text-amber-100/50 hover:text-amber-200 transition-colors duration-700" href="#">Address &amp; Hours</a>
          <a className="text-amber-100/50 hover:text-amber-200 transition-colors duration-700" href="#">Map Location</a>
          <a className="text-amber-100/50 hover:text-amber-200 transition-colors duration-700" href="#">Terms of Ceremony</a>
          <a className="text-amber-100/50 hover:text-amber-200 transition-colors duration-700" href="#">Privacy</a>
        </div>
        <div className="md:col-start-3 flex items-end justify-start md:justify-end">
          <span className="font-display-lat italic text-sm text-amber-100/40">© AL-ʿUSHSHĀB — RITUALS OF THE MAGHREB</span>
        </div>
      </div>
    </footer>
  )
}
