function IconPhone() {
  return (
    <svg className="ozone-hero-diagram__ico" viewBox="0 0 20 20" aria-hidden>
      <rect x="6" y="2.5" width="8" height="15" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="10" cy="14.8" r="0.8" fill="currentColor" />
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

export function EvInstallationHeroDiagram() {
  return (
    <div
      className="ozone-hero-diagram"
      role="img"
      aria-label="Field installer React app talks REST to Go Gin backend and PostgreSQL; admin dashboard for operations."
    >
      <div className="hero-diagram-scroll">
        <div className="ozone-hero-diagram__row">
          <div className="ozone-hero-diagram__panel ozone-hero-diagram__panel--hw">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Field</div>
                <div className="ozone-hero-diagram__panel-sub">React + TypeScript</div>
              </div>
              <div className="ozone-hero-diagram__panel-icons">
                <IconPhone />
                <span className="ozone-hero-diagram__ts-mark" aria-hidden>FLD</span>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Mobile-first installer view</li>
              <li>Site survey and photo capture</li>
              <li>Installation and commissioning steps</li>
              <li>Role-scoped actions only</li>
            </ul>
          </div>

          <DiagramConnector labelTop="HTTPS" labelBottom="REST + JSON" />

          <div className="ozone-hero-diagram__panel ozone-hero-diagram__panel--be">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Backend</div>
                <div className="ozone-hero-diagram__panel-sub">Go / Gin</div>
              </div>
              <div className="ozone-hero-diagram__panel-icons">
                <IconServer />
                <span className="ozone-hero-diagram__go-mark" aria-hidden>GO</span>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>REST API and workflow engine</li>
              <li>PostgreSQL enums and constraints</li>
              <li>Job state machine and audit trail</li>
              <li>JWT and role based access</li>
            </ul>
          </div>

          <DiagramConnector labelTop="REST API" labelBottom="" />

          <div className="ozone-hero-diagram__panel ozone-hero-diagram__panel--fe">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Admin</div>
                <div className="ozone-hero-diagram__panel-sub">React + TypeScript</div>
              </div>
              <div className="ozone-hero-diagram__panel-icons">
                <IconMonitor />
                <span className="ozone-hero-diagram__ts-mark" aria-hidden>OPS</span>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Fleet view of all install jobs</li>
              <li>Installer workload and status</li>
              <li>Reporting and CSV export</li>
              <li>Single source of truth for GACE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
