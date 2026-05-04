type ConnectorProps = {
  labelTop: string
  labelBottom?: string
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
      className="ozone-hero-diagram cctv-hero-diagram cctv-hero-diagram--simple"
      role="img"
      aria-label="CCTV flow: camera to API to consumer app, with admin panel below."
    >
      <div className="hero-diagram-scroll">
        <div className="cctv-hero-diagram__grid">
          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--cam cctv-hero-diagram__node--cam">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Camera</div>
                <div className="ozone-hero-diagram__panel-sub">Edge device</div>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Stream source</li>
            </ul>
          </div>

          <div className="cctv-hero-diagram__node--c1">
            <DiagramConnector labelTop="Register" />
          </div>

          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--api cctv-hero-diagram__node--api">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">API</div>
                <div className="ozone-hero-diagram__panel-sub">Backend</div>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Auth + routing</li>
            </ul>
          </div>

          <div className="cctv-hero-diagram__node--c2">
            <DiagramConnector labelTop="REST" />
          </div>

          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--app cctv-hero-diagram__node--app">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Consumer app</div>
                <div className="ozone-hero-diagram__panel-sub">Agency build</div>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Live view</li>
            </ul>
          </div>

          <div className="cctv-hero-diagram__node--drop">
            <span className="ozone-hero-diagram__connector-top">Admin ops</span>
            <div className="cctv-hero-diagram__arrow-down" aria-hidden />
          </div>

          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--admin cctv-hero-diagram__node--admin">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Admin Panel</div>
                <div className="ozone-hero-diagram__panel-sub">Internal</div>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Diagnostics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
