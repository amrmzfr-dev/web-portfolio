import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EV Charger Platform — Amir',
}

export default function EVPage() {
  return (
    <>
      <div className="proj-hero">
        <div className="proj-hero-inner">
          <Link href="/#projects" className="back-link">← Back to projects</Link>
          <div className="proj-hero-meta">
            <span className="proj-num-large">03</span>
            <div className="proj-status"><div className="proj-status-dot"></div>Live in production</div>
          </div>
          <h1 className="proj-title">EV Charger<br /><em>Installation Platform</em></h1>
          <p className="proj-subtitle">End-to-end installation management system for an AC EV charger supplier — from field assignment to commissioning sign-off.</p>
          <div className="proj-tags-row">
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Go / Gin</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">REST API</span>
            <span className="tag">VPS</span>
          </div>
        </div>
      </div>

      <div className="proj-body">

        <div className="proj-overview">
          <div className="overview-stat"><div className="stat-val">Live</div><div className="stat-label">Active production use</div></div>
          <div className="overview-stat"><div className="stat-val">Full</div><div className="stat-label">Workflow end-to-end</div></div>
          <div className="overview-stat"><div className="stat-val">Go</div><div className="stat-label">Backend API</div></div>
          <div className="overview-stat"><div className="stat-val">React</div><div className="stat-label">Dashboard + Admin</div></div>
        </div>

        <div className="proj-content">
          <div className="proj-main">

            <div className="content-block">
              <div className="sec-label">The problem</div>
              <h2 className="content-heading">Installing chargers <em>without chaos</em></h2>
              <p className="content-text">GACE, an AC EV charger supplier, was managing installations manually — spreadsheets, WhatsApp, phone calls. As their install volume grew, tracking which installer was assigned to which site, whether site surveys had been done, and whether commissioning was completed became a real operational problem. They needed a system that gave visibility across the full installation lifecycle.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">What I built</div>
              <h2 className="content-heading">A complete <em>operations platform</em></h2>
              <p className="content-text">The platform covers the full installation workflow from initial customer request through to final commissioning sign-off. Every stage is tracked, timestamped, and assigned to a responsible party.</p>
              <div className="arch-diagram">
                <div className="arch-layer">
                  <div className="arch-layer-label">Customer request intake</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">New installation job creation with site details</div>
                    <div className="arch-item">Customer info, location, charger model specification</div>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-layer-label">Site survey workflow</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">Installer assignment and scheduling</div>
                    <div className="arch-item">Survey checklist completion and photo upload</div>
                    <div className="arch-item">Approval gate before installation proceeds</div>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-layer-label">Installation and commissioning</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">Field installer progress tracking</div>
                    <div className="arch-item">Commissioning checklist and sign-off</div>
                    <div className="arch-item">Final documentation generation</div>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-layer-label">Admin dashboard</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">Fleet overview — all jobs, statuses, installer workload</div>
                    <div className="arch-item">Reporting and export for operations team</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-block">
              <div className="sec-label">Technical decisions</div>
              <h2 className="content-heading">Built to <em>scale operationally</em></h2>
              <p className="content-text">The backend is Go with Gin — fast, statically typed, and straightforward to reason about. PostgreSQL handles the workflow state machine cleanly with enum-typed status columns and foreign key constraints enforcing valid transitions.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>The React frontend is split into two views: an admin panel for ops team management and a field view optimised for installers on mobile. Role-based auth controls what each user can see and do. All state lives in the database — the frontend is purely display and input.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">Outcome</div>
              <h2 className="content-heading">Replaced spreadsheets, <em>now fully in use</em></h2>
              <p className="content-text">The system replaced the previous WhatsApp and spreadsheet workflow entirely. GACE&apos;s operations team now has a single source of truth for every installation job. The platform has been in active production use since deployment with no major incidents.</p>
            </div>

          </div>

          <div className="proj-sidebar">
            <div className="sidebar-block">
              <div className="sidebar-label">Role</div>
              <div className="sidebar-val">Solo engineer — architecture, backend, frontend, deployment</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Timeline</div>
              <div className="sidebar-val">2025 · Production</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Client</div>
              <div className="sidebar-val">GACE — AC EV charger supplier, Malaysia</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Stack</div>
              <div className="sidebar-val-list">
                <div>React + TypeScript</div>
                <div>Go / Gin</div>
                <div>PostgreSQL</div>
                <div>REST API</div>
                <div>VPS · AlmaLinux</div>
              </div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Impact</div>
              <div className="sidebar-val">Replaced manual spreadsheet + WhatsApp workflow with a tracked, auditable installation pipeline.</div>
            </div>
          </div>
        </div>

        <div className="proj-nav">
          <Link href="/projects/cctv" className="proj-nav-prev">← CCTV API Server</Link>
          <Link href="/projects/adas" className="proj-nav-next">Next: ADAS Research System →</Link>
        </div>

      </div>
    </>
  )
}
