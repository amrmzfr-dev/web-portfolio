import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CCTV API Server — Amir',
}

export default function CCTVPage() {
  return (
    <>
      <div className="proj-hero">
        <div className="proj-hero-inner">
          <Link href="/#projects" className="back-link">← Back to projects</Link>
          <div className="proj-hero-meta">
            <span className="proj-num-large">02</span>
            <div className="proj-status"><div className="proj-status-dot"></div>Live in production</div>
          </div>
          <h1 className="proj-title">CCTV<br /><em>API Server</em></h1>
          <p className="proj-subtitle">Localised CCTV infrastructure API — integrated into a major Malaysian automotive brand&apos;s consumer app.</p>
          <div className="proj-tags-row">
            <span className="tag">Python</span>
            <span className="tag">Dahua NetSDK</span>
            <span className="tag">C Bindings</span>
            <span className="tag">REST</span>
            <span className="tag">Multi-tenant Auth</span>
            <span className="tag">VPS</span>
          </div>
        </div>
      </div>

      <div className="proj-body">

        <div className="proj-overview">
          <div className="overview-stat"><div className="stat-val">Live</div><div className="stat-label">Consumer app integrated</div></div>
          <div className="overview-stat"><div className="stat-val">2-layer</div><div className="stat-label">API key auth system</div></div>
          <div className="overview-stat"><div className="stat-val">C SDK</div><div className="stat-label">Native bindings wrapped</div></div>
          <div className="overview-stat"><div className="stat-val">MY</div><div className="stat-label">Infrastructure localised</div></div>
        </div>

        <div className="proj-content">
          <div className="proj-main">

            <div className="content-block">
              <div className="sec-label">The problem</div>
              <h2 className="content-heading">Bridging a <em>C SDK</em> to the web</h2>
              <p className="content-text">GACE, an AC EV charger supplier, needed their Dahua camera infrastructure localised to Malaysia — accessible via a clean REST API that an external agency could integrate into a major automotive brand&apos;s consumer-facing mobile app. The Dahua NetSDK is a C library with no native HTTP interface. Someone had to build the bridge.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">Architecture</div>
              <h2 className="content-heading">Python wrapping <em>native C</em></h2>
              <p className="content-text">The core challenge was surfacing the Dahua NetSDK — a C library — as a stable, authenticated HTTP API. I wrote Python bindings over the C library, then built a clean REST layer on top using Python&apos;s WSGI stack.</p>
              <div className="arch-diagram">
                <div className="arch-layer">
                  <div className="arch-layer-label">Consumer App (external agency)</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">Client API key authentication</div>
                    <div className="arch-item">Live stream access, camera control, clip retrieval</div>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-layer-label">CCTV API Server (Python)</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">REST API layer — camera endpoints, auth, routing</div>
                    <div className="arch-item">Dual API key layers — admin keys vs client keys, stored in DB</div>
                    <div className="arch-item">Python bindings over Dahua NetSDK C library</div>
                    <div className="arch-item">Session management and camera state tracking</div>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-layer-label">Dahua / GACE Camera Hardware</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">NetSDK C library — native camera protocol</div>
                    <div className="arch-item">Physical CCTV infrastructure, Malaysia-hosted</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-block">
              <div className="sec-label">Auth design</div>
              <h2 className="content-heading">Two-layer <em>API key system</em></h2>
              <p className="content-text">The system uses a two-tier authentication model stored in a database. Admin API keys give full access to camera management and key provisioning. Client API keys give scoped access to specific cameras and operations. Both layers are validated per-request, with keys stored securely — not hardcoded.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>This design lets the external agency operate independently with their own client key, without exposing admin-level operations. Revoking access is a single database record change.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">Outcome</div>
              <h2 className="content-heading">In production, <em>integrated and shipping</em></h2>
              <p className="content-text">The API server is live and integrated into the external agency&apos;s consumer mobile app for a major Malaysian automotive manufacturer. Camera streams, controls, and clip retrieval all flow through the API layer I built. It runs on self-managed VPS infrastructure and has been stable since deployment.</p>
            </div>

          </div>

          <div className="proj-sidebar">
            <div className="sidebar-block">
              <div className="sidebar-label">Role</div>
              <div className="sidebar-val">Solo engineer — API design, C bindings, auth, deployment</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Timeline</div>
              <div className="sidebar-val">2025 · Production</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Client</div>
              <div className="sidebar-val">GACE (AC EV charger supplier) · Major Malaysian automotive brand (end consumer)</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Stack</div>
              <div className="sidebar-val-list">
                <div>Python</div>
                <div>Dahua NetSDK (C)</div>
                <div>REST API</div>
                <div>PostgreSQL</div>
                <div>VPS · AlmaLinux</div>
              </div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Integration</div>
              <div className="sidebar-val">External agency consuming API for a major automotive brand&apos;s consumer mobile app.</div>
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
