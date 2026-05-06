type ConnectorProps = {
  labelTop: string
}

function DiagramConnector({ labelTop }: ConnectorProps) {
  return (
    <div className="ozone-hero-diagram__connector">
      <span className="ozone-hero-diagram__connector-top">{labelTop}</span>
      <div className="ozone-hero-diagram__arrow" aria-hidden />
    </div>
  )
}

export function EvInstallationHeroDiagram() {
  return (
    <div
      className="ozone-hero-diagram ozone-hero-diagram--compact cctv-hero-diagram--simple"
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
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Mobile-first installer view</li>
            </ul>
          </div>

          <DiagramConnector labelTop="HTTPS" />

          <div className="ozone-hero-diagram__panel ozone-hero-diagram__panel--be">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Backend</div>
                <div className="ozone-hero-diagram__panel-sub">Go / Gin</div>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Job state machine</li>
            </ul>
          </div>

          <DiagramConnector labelTop="REST API" />

          <div className="ozone-hero-diagram__panel ozone-hero-diagram__panel--fe">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Admin</div>
                <div className="ozone-hero-diagram__panel-sub">React + TypeScript</div>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Fleet view of all installs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
