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
        <div className="cctv-hero-diagram__grid">
          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--cam cctv-hero-diagram__node--cam">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Camera</div>
                <div className="ozone-hero-diagram__panel-sub">Dahua hardware</div>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Active device registration</li>
              <li>NAT-safe reconnect loop</li>
            </ul>
          </div>

          <div className="cctv-hero-diagram__node--c1">
            <DiagramConnector labelTop="Register" labelBottom="NAT-safe" />
          </div>

          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--api cctv-hero-diagram__node--api">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">API</div>
                <div className="ozone-hero-diagram__panel-sub">Python backend</div>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Auth and stream token issue</li>
              <li>Camera status + controls</li>
            </ul>
          </div>

          <div className="cctv-hero-diagram__node--c2">
            <DiagramConnector labelTop="REST API" labelBottom="Keys + tokens" />
          </div>

          <div className="ozone-hero-diagram__panel cctv-hero-diagram__panel--app cctv-hero-diagram__node--app">
            <div className="ozone-hero-diagram__panel-head">
              <div>
                <div className="ozone-hero-diagram__panel-title">Consumer App</div>
                <div className="ozone-hero-diagram__panel-sub">External agency</div>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Live stream + playback</li>
              <li>Device status view</li>
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
                <div className="ozone-hero-diagram__panel-sub">GACE internal</div>
              </div>
            </div>
            <ul className="ozone-hero-diagram__list">
              <li>Fleet diagnostics</li>
              <li>Restart and credential revoke</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
