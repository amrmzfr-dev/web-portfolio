import React from 'react'

const LINES: { delay: string; cls: string; text: string }[] = [
  { delay: '0.4s',  cls: 'cmd', text: '$ cat stack.txt' },
  { delay: '0.75s', cls: 'out', text: 'go · rust · react · ts' },
  { delay: '1.05s', cls: 'out', text: 'esp32 · psql · docker · axum' },
  { delay: '1.6s',  cls: 'cmd', text: '$ ls ./projects' },
  { delay: '1.95s', cls: 'out', text: '3 live in production · 1 pilot phase' },
  { delay: '2.5s',  cls: 'cmd', text: '$ status' },
  { delay: '2.85s', cls: 'out', text: 'seeking first freelance client ✓' },
]

export function HeroIllustration() {
  return (
    <div className="hero-terminal">
      <div className="terminal-topbar">
        <span className="terminal-topbar-label">amir@neroki:~</span>
      </div>

      {/* Portrait + metadata */}
      <div className="terminal-profile">
        <div className="terminal-photo">
          {/* Drop your portrait photo at /public/photo.jpg to replace this */}
          <div className="terminal-photo-empty">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            <span>photo.jpg</span>
          </div>
        </div>
        <div className="terminal-info">
          <div className="ti-row">
            <span className="ti-key">name</span>
            <span className="ti-sep">:</span>
            <span className="ti-val">Amir</span>
          </div>
          <div className="ti-row">
            <span className="ti-key">role</span>
            <span className="ti-sep">:</span>
            <span className="ti-val">full stack + iot</span>
          </div>
          <div className="ti-row">
            <span className="ti-key">loc</span>
            <span className="ti-sep">:</span>
            <span className="ti-val">shah alam, my</span>
          </div>
          <div className="ti-row">
            <span className="ti-key">exp</span>
            <span className="ti-sep">:</span>
            <span className="ti-val">1yr · startup</span>
          </div>
          <div className="ti-row">
            <span className="ti-key">open</span>
            <span className="ti-sep">:</span>
            <span className="ti-val avail">first freelance ✓</span>
          </div>
        </div>
      </div>

      {/* Terminal lines */}
      <div className="terminal-body">
        {LINES.map((line, i) => (
          <div
            key={i}
            className={`tl ${line.cls}`}
            style={{ animationDelay: line.delay } as React.CSSProperties}
          >
            {line.text}
          </div>
        ))}
        <div
          className="terminal-caret-wrap"
          style={{ animationDelay: '3.2s' } as React.CSSProperties}
        >
          <span className="terminal-caret" />
        </div>
      </div>
    </div>
  )
}
