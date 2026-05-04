import Link from 'next/link'

export function Nav() {
  return (
    <nav>
      <Link href="/" className="nav-name">amir.dev</Link>
      <ul className="nav-links">
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#stack">Stack</Link></li>
        <li><Link href="/#projects">Projects</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>
      <div className="nav-right">
        <div className="nav-avail">
          <div className="avail-dot"></div>
          Seeking first freelance client
        </div>
      </div>
    </nav>
  )
}
