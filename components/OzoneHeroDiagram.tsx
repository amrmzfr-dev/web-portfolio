function IconWifi() {
  return (
    <svg className="ozone-hero-diagram__ico" viewBox="0 0 20 20" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        d="M10 14h.01M6.5 11a5 5 0 017 0M3.5 8a9 9 0 0113 0M1 5a12 12 0 0118 0"
      />
    </svg>
  )
}

function IconServer() {
  return (
    <svg className="ozone-hero-diagram__ico" viewBox="0 0 20 20" aria-hidden>
      <rect x="4" y="3" width="12" height="4" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <rect x="4" y="8" width="12" height="4" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <rect x="4" y="13" width="12" height="4" rx="0.5" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="14" cy="5" r="0.8" fill="currentColor" />
      <circle cx="14" cy="10" r="0.8" fill="currentColor" />
      <circle cx="14" cy="15" r="0.8" fill="currentColor" />
    </svg>
  )
}

function IconDb() {
  return (
    <svg className="ozone-hero-diagram__ico" viewBox="0 0 20 20" aria-hidden>
      <ellipse cx="10" cy="4" rx="6" ry="2" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4 4v4c0 1.1 2.7 2 6 2s6-.9 6-2V4" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4 8v4c0 1.1 2.7 2 6 2s6-.9 6-2V8" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4 12v3c0 1.1 2.7 2 6 2s6-.9 6-2v-3" fill="none" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg className="ozone-hero-diagram__ico" viewBox="0 0 20 20" aria-hidden>
      <circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M10 6.5V10l3 2" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}

function IconMonitor() {
  return (
    <svg className="ozone-hero-diagram__ico" viewBox="0 0 20 20" aria-hidden>
      <rect x="3" y="4" width="14" height="9" rx="1" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M7 16h6M10 13v3" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}

type ConnectorProps = {
  labelTop: string
  labelBottom: string
}

function DiagramConnector({ labelTop, labelBottom }: ConnectorProps) {
  return (
    <div className="ozone-hero-diagram__connector">
      <span className="ozone-hero-diagram__connector-top">{labelTop}</span>
      <div className="ozone-hero-diagram__arrow" aria-hidden />
      {labelBottom ? (
        <span className="ozone-hero-diagram__connector-bottom">{labelBottom}</span>
      ) : null}
    </div>
  )
}

export function OzoneHeroDiagram() {
  return (
    <div
      className="ozone-hero-diagram"
      role="img"
      aria-label="Ozone machine ESP32 posts sessions over WiFi to a Go Gin backend and PostgreSQL, then a React TypeScript dashboard per client."
    >
      <div className="hero-diagram-scroll">
        <div className="ozone-hero-diagram__row">
        <div className="ozone-hero-diagram__panel ozone-hero-diagram__panel--hw">
          <div className="ozone-hero-diagram__panel-head">
            <div>
              <div className="ozone-hero-diagram__panel-title">Ozone Machine</div>
              <div className="ozone-hero-diagram__panel-sub">ESP32</div>
            </div>
            <div className="ozone-hero-diagram__panel-icons">
              <IconWifi />
              <span className="ozone-hero-diagram__chip" aria-hidden>O3</span>
            </div>
          </div>
          <ul className="ozone-hero-diagram__list">
            <li>NTP, NVS, fallback clock integrity</li>
            <li>Session tracking</li>
            <li>Offline retry queue</li>
          </ul>
        </div>

        <DiagramConnector labelTop="POST /session" labelBottom="WiFi · REST" />

        <div className="ozone-hero-diagram__panel ozone-hero-diagram__panel--be">
          <div className="ozone-hero-diagram__panel-head">
            <div>
              <div className="ozone-hero-diagram__panel-title">Backend</div>
              <div className="ozone-hero-diagram__panel-sub">Go / Gin</div>
            </div>
            <div className="ozone-hero-diagram__panel-icons">
              <IconServer />
              <span className="ozone-hero-diagram__go-mark" aria-hidden>G</span>
            </div>
          </div>
          <ul className="ozone-hero-diagram__list">
            <li>API key auth</li>
            <li>Validate and store</li>
            <li className="ozone-hero-diagram__li-with-ico">
              <IconDb /> PostgreSQL
            </li>
            <li className="ozone-hero-diagram__li-with-ico">
              <IconClock /> Analytics UTC+8
            </li>
          </ul>
        </div>

        <DiagramConnector labelTop="REST API" labelBottom="" />

        <div className="ozone-hero-diagram__panel ozone-hero-diagram__panel--fe">
          <div className="ozone-hero-diagram__panel-head">
            <div>
              <div className="ozone-hero-diagram__panel-title">Frontend</div>
              <div className="ozone-hero-diagram__panel-sub">React + TypeScript</div>
            </div>
            <div className="ozone-hero-diagram__panel-icons">
              <IconMonitor />
              <span className="ozone-hero-diagram__ts-mark" aria-hidden>TS</span>
            </div>
          </div>
          <ul className="ozone-hero-diagram__list">
            <li>Per client dashboard</li>
            <li>Billing summary</li>
            <li>Device health and session log</li>
            <li>Admin panel (fleet)</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}
