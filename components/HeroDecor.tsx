export function HeroDecor() {
  return (
    <div className="hero-decor" aria-hidden="true">
      {/* Slowly rotating square outlines */}
      <div className="decor-geo decor-sq-1" />
      <div className="decor-geo decor-sq-2" />

      {/* Top-right node constellation */}
      <svg
        className="decor-nodes"
        style={{ top: 48, right: 8, width: 170, height: 215 }}
        viewBox="0 0 170 215"
        fill="none"
      >
        <line x1="118" y1="24" x2="150" y2="76" stroke="#F55D00" strokeWidth="0.5" className="dl" />
        <line x1="150" y1="76" x2="120" y2="142" stroke="#F55D00" strokeWidth="0.4" className="dl" />
        <line x1="120" y1="142" x2="146" y2="192" stroke="#F55D00" strokeWidth="0.35" className="dl" />
        <circle cx="118" cy="24"  r="3"   fill="#F55D00" className="dn1" />
        <circle cx="150" cy="76"  r="2"   fill="#F55D00" className="dn2" />
        <circle cx="120" cy="142" r="2.5" fill="#F55D00" className="dn3" />
        <circle cx="146" cy="192" r="1.5" fill="#F55D00" className="dn4" />
      </svg>

      {/* Bottom-left node cluster */}
      <svg
        className="decor-nodes"
        style={{ bottom: 44, left: 44, width: 130, height: 110 }}
        viewBox="0 0 130 110"
        fill="none"
      >
        <line x1="18" y1="84" x2="62" y2="40" stroke="#F55D00" strokeWidth="0.4" className="dl" />
        <line x1="62" y1="40" x2="108" y2="78" stroke="#F55D00" strokeWidth="0.4" className="dl" />
        <circle cx="18"  cy="84" r="2"   fill="#F55D00" className="dn5" />
        <circle cx="62"  cy="40" r="2.5" fill="#F55D00" className="dn6" />
        <circle cx="108" cy="78" r="2"   fill="#F55D00" className="dn7" />
      </svg>
    </div>
  )
}
