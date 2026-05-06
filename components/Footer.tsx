import Image from 'next/image'

export function Footer() {
  return (
    <footer>
      <div className="footer-sig">
        <Image src="/logo.png" alt="Amir Dev" width={48} height={48} className="footer-logo-img" />
      </div>
      <div className="footer-neroki">Amir Dev</div>
      <div className="footer-meta">© 2026 · Shah Alam, Malaysia</div>
    </footer>
  )
}
