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

export function OzoneHeroDiagram() {
  return (
    <div
      className="ozone-hero-diagram cctv-hero-diagram--simple"
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
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Session tracking</li>
            </ul>
          </div>

          <DiagramConnector labelTop="POST /session" />

          <div className="ozone-hero-diagram__panel ozone-hero-diagram__panel--be">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Backend</div>
                <div className="ozone-hero-diagram__panel-sub">Go / Gin</div>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>API key auth</li>
            </ul>
          </div>

          <DiagramConnector labelTop="REST API" />

          <div className="ozone-hero-diagram__panel ozone-hero-diagram__panel--fe">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Frontend</div>
                <div className="ozone-hero-diagram__panel-sub">React + TypeScript</div>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Per client dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
