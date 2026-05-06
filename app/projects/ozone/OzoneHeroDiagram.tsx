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
      className="ozone-hero-diagram cctv-hero-diagram cctv-hero-diagram--simple"
      role="img"
      aria-label="Ozone machine ESP32 posts sessions to a Go Gin backend and PostgreSQL, served by a React TypeScript dashboard."
    >
      <div className="hero-diagram-scroll">
        <div className="cctv-hero-diagram__grid">
          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--cam cctv-hero-diagram__node--cam">
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

          <div className="cctv-hero-diagram__node--c1">
            <DiagramConnector labelTop="POST /session" />
          </div>

          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--api cctv-hero-diagram__node--api">
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

          <div className="cctv-hero-diagram__node--c2">
            <DiagramConnector labelTop="REST API" />
          </div>

          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--app cctv-hero-diagram__node--app">
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
