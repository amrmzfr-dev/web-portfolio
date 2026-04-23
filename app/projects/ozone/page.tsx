import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ozone Machine IoT System — Amir',
}

export default function OzonePage() {
  return (
    <>
      <div className="proj-hero">
        <div className="proj-hero-inner">
          <Link href="/#projects" className="back-link">← Back to projects</Link>
          <div className="proj-hero-meta">
            <span className="proj-num-large">01</span>
            <div className="proj-status"><div className="proj-status-dot"></div>Live in production</div>
          </div>
          <h1 className="proj-title">Ozone Machine<br /><em>IoT System</em></h1>
          <p className="proj-subtitle">Full-stack IoT billing and management system — firmware to dashboard.</p>
          <div className="proj-tags-row">
            <span className="tag">ESP32</span>
            <span className="tag">Go / Gin</span>
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">PlatformIO</span>
          </div>
        </div>
      </div>

      <div className="proj-body">

        <div className="proj-overview">
          <div className="overview-stat"><div className="stat-val">3</div><div className="stat-label">Live client sites</div></div>
          <div className="overview-stat"><div className="stat-val">ESP32</div><div className="stat-label">Firmware layer</div></div>
          <div className="overview-stat"><div className="stat-val">Go</div><div className="stat-label">Backend API</div></div>
          <div className="overview-stat"><div className="stat-val">Real $$</div><div className="stat-label">Billing in production</div></div>
        </div>

        <div className="proj-content">
          <div className="proj-main">

            <div className="content-block">
              <div className="sec-label">The problem</div>
              <h2 className="content-heading">Managing ozone machines <em>at scale</em></h2>
              <p className="content-text">Clients using ozone machines for sanitisation needed a way to track usage per machine, bill accurately by session, and monitor device health remotely — without any existing infrastructure to build on. The system had to work reliably in automotive workshops where network conditions are inconsistent and devices may lose power mid-session.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">Architecture</div>
              <h2 className="content-heading">Firmware to <em>frontend</em></h2>
              <p className="content-text">The system is built in three distinct layers, each independently deployable and testable.</p>
              <div className="arch-diagram">
                <div className="arch-layer">
                  <div className="arch-layer-label">Firmware (ESP32)</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">ClockSource integrity — NTP → NVS anchor fallback</div>
                    <div className="arch-item">Session tracking with hardware watchdog</div>
                    <div className="arch-item">Retry queue for offline resilience</div>
                    <div className="arch-item">POST payloads with clock_source field</div>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-layer-label">Backend (Go / Gin)</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">REST API with API key auth per device</div>
                    <div className="arch-item">PostgreSQL with TIMESTAMPTZ + clock_source columns</div>
                    <div className="arch-item">Usage analytics with UTC+8 grouping</div>
                    <div className="arch-item">Monthly treatment report generation</div>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-layer-label">Frontend (React + TypeScript)</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">Real-time dashboard per client</div>
                    <div className="arch-item">Usage billing summary views</div>
                    <div className="arch-item">Device health and session history</div>
                    <div className="arch-item">Admin panel for fleet management</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-block">
              <div className="sec-label">Technical challenges</div>
              <h2 className="content-heading">Clock integrity on <em>embedded hardware</em></h2>
              <p className="content-text">The hardest part wasn&apos;t building the system — it was making it trustworthy. Ozone machines in workshops lose power unexpectedly. Without a reliable clock, billing timestamps become garbage.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>I designed a full clock integrity architecture: a <code>ClockSource</code> enum that tracks whether a timestamp came from NTP, a persisted NVS anchor, or an estimated fallback. Every session POST includes this field. The backend filters analytics accordingly and flags degraded-confidence records. 99.9% data consistency is achievable — 100% is physically impossible on wireless embedded hardware, and I was honest about that from the start.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>I wrote a 37-test pre-production suite covering power loss, clock drift, network retry, watchdog recovery, and long-run stress scenarios before going live.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">Outcome</div>
              <h2 className="content-heading">In production, <em>serving real clients</em></h2>
              <p className="content-text">The system is live and billing real clients — including staff at a major Malaysian automotive manufacturer. It runs unattended, survives power cycles, and handles intermittent connectivity without losing session data. The client dashboard is used daily to verify usage and generate monthly reports.</p>
            </div>

          </div>

          <div className="proj-sidebar">
            <div className="sidebar-block">
              <div className="sidebar-label">Role</div>
              <div className="sidebar-val">Solo engineer — firmware, backend, frontend, deployment</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Timeline</div>
              <div className="sidebar-val">2025 · Ongoing</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Client type</div>
              <div className="sidebar-val">Malaysian automotive industry</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Stack</div>
              <div className="sidebar-val-list">
                <div>ESP32 + PlatformIO</div>
                <div>Go / Gin</div>
                <div>React + TypeScript</div>
                <div>PostgreSQL</div>
                <div>VPS · AlmaLinux</div>
              </div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Key achievement</div>
              <div className="sidebar-val">37-test pre-production suite. Clock integrity architecture handling power-loss edge cases. Live billing in production.</div>
            </div>
          </div>
        </div>

        <div className="proj-nav">
          <span></span>
          <Link href="/projects/cctv" className="proj-nav-next">Next project: CCTV API Server →</Link>
        </div>

      </div>
    </>
  )
}
