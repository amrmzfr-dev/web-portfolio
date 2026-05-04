function IconCamera() {
  return (
    <svg className="ozone-hero-diagram__ico" viewBox="0 0 20 20" aria-hidden>
      <rect x="3" y="7" width="10" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M13 9l4-2v6l-4-2z" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <circle cx="8" cy="10" r="1.4" fill="none" stroke="currentColor" strokeWidth="1" />
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

function IconPhone() {
  return (
    <svg className="ozone-hero-diagram__ico" viewBox="0 0 20 20" aria-hidden>
      <rect x="6" y="2.5" width="8" height="15" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="10" cy="14.8" r="0.8" fill="currentColor" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg className="ozone-hero-diagram__ico" viewBox="0 0 20 20" aria-hidden>
      <path d="M10 2.5l6 2.3v4.2c0 4-2.3 6.6-6 8.5-3.7-1.9-6-4.5-6-8.5V4.8z" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M7.2 10l1.8 1.8L13 8" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
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

export function CctvHeroDiagram() {
  return (
    <div
      className="ozone-hero-diagram cctv-hero-diagram"
      role="img"
      aria-label="CCTV camera registers to Python API server with three-layer auth, serving consumer app and admin panel."
    >
      <div className="hero-diagram-scroll">
        <div className="ozone-hero-diagram__row">
          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--cam">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Camera</div>
                <div className="ozone-hero-diagram__panel-sub">Dahua hardware</div>
              </div>
              <div className="ozone-hero-diagram__panel-icons">
                <IconCamera />
                <span className="ozone-hero-diagram__chip" aria-hidden>C</span>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>NetSDK C, active registration</li>
              <li>WiFi via Bluetooth SDK</li>
              <li>QR credential binding</li>
              <li>Auto reconnect state machine</li>
            </ul>
          </div>

          <DiagramConnector labelTop="Register" labelBottom="NAT-safe" />

          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--api">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">CCTV API Server</div>
                <div className="ozone-hero-diagram__panel-sub">Python, Flask, Gunicorn</div>
              </div>
              <div className="ozone-hero-diagram__panel-icons">
                <IconServer />
                <span className="ozone-hero-diagram__go-mark" aria-hidden>PY</span>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>ctypes over dhnetsdk.dll</li>
              <li>Three-layer auth chain</li>
              <li>AES-256-GCM + lockout</li>
              <li>MySQL, SQLAlchemy pool</li>
            </ul>
          </div>

          <DiagramConnector labelTop="REST API" labelBottom="Keys + tokens" />

          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--app">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Consumer App</div>
                <div className="ozone-hero-diagram__panel-sub">External agency</div>
              </div>
              <div className="ozone-hero-diagram__panel-icons">
                <IconPhone />
                <span className="ozone-hero-diagram__ts-mark" aria-hidden>APP</span>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Client key + stream token</li>
              <li>Live stream and playback</li>
              <li>Device status and controls</li>
              <li>Token rotation</li>
            </ul>
          </div>

          <DiagramConnector labelTop="Admin ops" labelBottom="" />

          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--admin">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Admin Panel</div>
                <div className="ozone-hero-diagram__panel-sub">GACE internal</div>
              </div>
              <div className="ozone-hero-diagram__panel-icons">
                <IconShield />
                <span className="ozone-hero-diagram__chip" aria-hidden>ADM</span>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>X-Admin-Key + bcrypt users</li>
              <li>Fleet view and diagnostics</li>
              <li>Reset, restart, time sync</li>
              <li>Client key and token revoke</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
