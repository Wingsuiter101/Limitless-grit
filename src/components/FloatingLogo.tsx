import Image from 'next/image'
import Link from 'next/link'

export default function FloatingLogo() {
  return (
    <div className="fixed top-0 left-12 sm:left-14 md:left-20 lg:left-28 xl:left-36 2xl:left-48 z-[60] pointer-events-auto">
      <Link href="/" aria-label="Go to home">
        <div className="relative bg-[#3a3a3a] rounded-b-3xl shadow-xl border border-black/10 h-[6.25rem] md:h-24 px-3 md:px-4 -translate-y-1 flex items-center justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/limitless-monogram.png`}
            alt="Limitless Grit Logo"
            width={68}
            height={68}
            priority
          />
        </div>
      </Link>
    </div>
  )
}
