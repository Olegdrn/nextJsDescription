import Link from 'next/link'

export default function TheHeader() {
  return (
    <header className="bg-fixed bg-gradient-to-r from-slate-400  to-slate-400 mx-auto">
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
    </header>
  )

} 