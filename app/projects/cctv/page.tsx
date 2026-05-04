import type { Metadata } from 'next'
import Link from 'next/link'
import { CctvHeroDiagram } from '@/components/CctvHeroDiagram'

export const metadata: Metadata = {
  title: 'CCTV API Server · Amir',
}

export default function CCTVPage() {
  return (
    <>
      <div className="proj-hero">
        <div className="proj-hero-layout">
          <div className="proj-hero-inner">
            <Link href="/#projects" className="back-link">← Back to projects</Link>
            <div className="proj-hero-meta">
              <span className="proj-num-large">02</span>
              <div className="proj-status"><div className="proj-status-dot"></div>Live in production</div>
            </div>
            <h1 className="proj-title">CCTV<br /><em>API Server</em></h1>
            <p className="proj-subtitle">REST bridge over Dahua&apos;s C NetSDK for in-charger CCTV, consumed by PERODUA&apos;s P Circle app (via an external agency).</p>
            <div className="proj-tags-row">
              <span className="tag">Python</span>
              <span className="tag">Dahua NetSDK</span>
              <span className="tag">C Bindings</span>
              <span className="tag">REST</span>
              <span className="tag">Multi-tenant Auth</span>
              <span className="tag">AWS</span>
            </div>
          </div>
          <div className="proj-hero-illo">
            <CctvHeroDiagram />
          </div>
        </div>
      </div>

      <div className="proj-body">

        <div className="proj-overview">
          <div className="overview-stat"><div className="stat-val">Live</div><div className="stat-label">P Circle integrated</div></div>
          <div className="overview-stat"><div className="stat-val">3-layer</div><div className="stat-label">Auth system</div></div>
          <div className="overview-stat"><div className="stat-val">C SDK</div><div className="stat-label">Native bindings wrapped</div></div>
          <div className="overview-stat"><div className="stat-val">MY</div><div className="stat-label">Infrastructure localised</div></div>
        </div>

        <div className="proj-content">
          <div className="proj-main">

            <div className="content-block">
              <div className="sec-label">The problem</div>
              <h2 className="content-heading">Bridging a <em>C SDK</em> to the web</h2>
              <p className="content-text">An AC EV charger supplier ships Dahua-based CCTV on their chargers. They needed that camera stack localised to Malaysia and reachable through a clean REST API an external agency could wire into PERODUA&apos;s P Circle consumer app (the EV unit includes this camera; this project is the CCTV side). The Dahua NetSDK is a C library with no native HTTP interface. Someone had to build the bridge.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">Architecture</div>
              <h2 className="content-heading">Python wrapping <em>native C</em>, on AWS</h2>
              <p className="content-text">The core challenge was surfacing the Dahua NetSDK as a stable, authenticated HTTP API. I integrated Dahua&apos;s NetSDK Python package (ctypes bindings over the C DLL), then built a REST layer on top: Flask routes, Gunicorn workers, Nginx reverse proxy with TLS termination via Let&apos;s Encrypt. The server runs in Listen Server mode: cameras actively register inbound connections rather than the server polling them. That is what makes the system work without opening firewall rules on the camera side.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>The API server runs on AWS EC2. The database is AWS RDS MySQL 8.0, reached from EC2 over a private endpoint with security group rules restricting access. Credentials and secrets load from environment variables via a systemd service and are never committed to version control.</p>
              <div className="arch-diagram">
                <div className="arch-layer">
                  <div className="arch-layer-label">Consumer app · P Circle (PERODUA)</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">Delivered by an external agency; consumes this REST API</div>
                    <div className="arch-item">Client API key plus stream token authentication</div>
                    <div className="arch-item">Live stream access, camera control, clip retrieval</div>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-layer-label">CCTV API server · AWS EC2</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">Nginx (TLS) → Gunicorn → Flask</div>
                    <div className="arch-item">Three-layer auth: admin key (env), client API keys (RDS), stream tokens (RDS, per user × device)</div>
                    <div className="arch-item">NetSDK Python package: ctypes bindings over Dahua&apos;s C DLL</div>
                    <div className="arch-item">Listen Server mode: cameras register inbound; no inbound firewall rules on the camera</div>
                    <div className="arch-item">Camera state machine, auto-reconnect, credential retry</div>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-layer-label">AWS RDS · MySQL 8.0</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">devices, stream_tokens, client_api_keys, device_credentials tables</div>
                    <div className="arch-item">AES-256-GCM at rest for camera credentials</div>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-layer-label">Dahua camera hardware (on-charger CCTV)</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">Active registration: camera initiates connection to the EC2 server</div>
                    <div className="arch-item">WiFi provisioned via Bluetooth SDK; credentials bound via QR scan</div>
                    <div className="arch-item">Malaysia-hosted field units</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-block">
              <div className="sec-label">Auth design</div>
              <h2 className="content-heading">Three-layer <em>auth system</em></h2>
              <p className="content-text">The auth model has three layers, each scoped differently. The admin key (X-Admin-Key header) is a single secret stored as an environment variable with IP-based brute-force lockout: five failed attempts triggers a fifteen-minute block. Client API keys (X-Client-Key header) live in RDS and authenticate the external agency globally, granting access to the API. Stream tokens (X-Stream-Token header) sit above that: they are issued per user per device, stored in the stream_tokens table with expiry and rotation, and gate the actual stream and playback endpoints.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>Revoking a client key is a single database record change (is_active = FALSE). Revoking the admin key requires rotating the environment variable. Stream tokens expire automatically and can be invalidated individually.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">Outcome</div>
              <h2 className="content-heading">In production, <em>integrated and shipping</em></h2>
              <p className="content-text">The API server is live on AWS EC2 and integrated into the external agency&apos;s build of PERODUA&apos;s P Circle app. Camera streams, controls, and clip retrieval all flow through the API layer I built. Infrastructure work (EC2, RDS provisioning, security groups, Nginx TLS, systemd) was handled in-house alongside the application code.</p>
            </div>

          </div>

          <div className="proj-sidebar">
            <div className="sidebar-block">
              <div className="sidebar-label">Role</div>
              <div className="sidebar-val">Solo engineer: API design, C bindings, auth, deployment</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Timeline</div>
              <div className="sidebar-val">2025 · Production</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Client</div>
              <div className="sidebar-val">AC EV charger supplier (hardware) · PERODUA P Circle (consumer app via agency)</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Stack</div>
              <div className="sidebar-val-list">
                <div>Python · Flask · Gunicorn</div>
                <div>Dahua NetSDK (C)</div>
                <div>REST API</div>
                <div>AWS RDS MySQL 8.0</div>
                <div>AWS EC2 · AlmaLinux · systemd</div>
                <div>Nginx · Let&apos;s Encrypt TLS</div>
              </div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Integration</div>
              <div className="sidebar-val">External agency ships P Circle; consumes this API for in-charger CCTV features.</div>
            </div>
          </div>
        </div>

        <div className="proj-nav">
          <Link href="/projects/ozone" className="proj-nav-prev">← Ozone Machine IoT System</Link>
          <Link href="/projects/ev" className="proj-nav-next">Next: EV Charger Platform →</Link>
        </div>

      </div>
    </>
  )
}
