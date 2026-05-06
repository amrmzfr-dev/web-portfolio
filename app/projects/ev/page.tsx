import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { EvInstallationHeroDiagram } from './EvInstallationHeroDiagram'

export const metadata: Metadata = {
  title: 'EV Charger Platform · Amir',
}

export default function EVPage() {
  return (
    <>
      <div className="proj-hero">
        <div className="proj-hero-layout">
          <div className="proj-hero-inner">
            <Link href="/#projects" className="back-link">← Back to projects</Link>
            <div className="proj-hero-meta">
              <span className="proj-num-large">03</span>
              <div className="proj-status"><div className="proj-status-dot"></div>Live in production</div>
            </div>
            <h1 className="proj-title">EV Charger<br /><em>Installation Platform</em></h1>
            <p className="proj-subtitle">End to end installation management system for C Zero Sdn Bhd, from field assignment to commissioning sign off.</p>
            <div className="proj-tags-row">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Go / Gin</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Redis</span>
              <span className="tag">Cloudflare R2</span>
              <span className="tag">REST API</span>
              <span className="tag">VPS</span>
            </div>
          </div>
          <div className="proj-hero-illo">
            <EvInstallationHeroDiagram />
          </div>
        </div>
      </div>

      <div className="proj-body">

        <div className="proj-overview">
          <div className="overview-stat"><div className="stat-val">Live</div><div className="stat-label">Active production use</div></div>
          <div className="overview-stat"><div className="stat-val">Full</div><div className="stat-label">Workflow end to end</div></div>
          <div className="overview-stat"><div className="stat-val">Go</div><div className="stat-label">Backend API</div></div>
          <div className="overview-stat"><div className="stat-val">React</div><div className="stat-label">Dashboard + Admin</div></div>
        </div>

        <div className="proj-content">
          <div className="proj-main">

            <div className="content-block">
              <div className="sec-label">The problem</div>
              <h2 className="content-heading">Installing chargers <em>without chaos</em></h2>
              <p className="content-text">At C Zero Sdn Bhd, installations were managed manually through spreadsheets, WhatsApp, and phone calls. As volume grew across hundreds of outsourced installers registered under us, tracking assignment, site survey completion, and commissioning status became a real operational problem. We needed a system that gave clear visibility across the full installation lifecycle.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">What I built</div>
              <h2 className="content-heading">A complete <em>operations platform</em></h2>
              <p className="content-text">The platform covers the full installation workflow from initial customer request through to final commissioning sign off. Every stage is tracked, timestamped, and assigned to a responsible party.</p>
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
                    <div className="arch-item">Commissioning checklist and sign off</div>
                    <div className="arch-item">Final documentation generation</div>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-layer-label">Admin dashboard</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">Fleet overview: all jobs, statuses, installer workload</div>
                    <div className="arch-item">Reporting and export for operations team</div>
                  </div>
                </div>
              </div>
              <div className="proj-dashboard-capture">
                <div className="photo-frame">
                  <Image
                    src="/images/ev/dashboard.png"
                    alt="EV installation platform admin dashboard showing jobs, completion rate, and live activity"
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 900px) 100vw, min(52rem, 90vw)"
                  />
                  <div className="photo-corner tl" />
                  <div className="photo-corner tr" />
                  <div className="photo-corner bl" />
                  <div className="photo-corner br" />
                </div>
                <p className="gallery-caption">Admin dashboard: job overview, monthly performance, and live activity feed</p>
              </div>
              <div className="proj-dashboard-capture" style={{ marginTop: '1.5rem' }}>
                <div className="photo-frame">
                  <Image
                    src="/images/ev/new-installation.png"
                    alt="Create new installation form with map, customer details, and recommended installers"
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 900px) 100vw, min(52rem, 90vw)"
                  />
                  <div className="photo-corner tl" />
                  <div className="photo-corner tr" />
                  <div className="photo-corner bl" />
                  <div className="photo-corner br" />
                </div>
                <p className="gallery-caption">New installation form: site map, customer details, and installer recommendation</p>
              </div>
            </div>

            <div className="content-block">
              <div className="sec-label">Technical decisions</div>
              <h2 className="content-heading">Built to <em>scale operationally</em></h2>
              <p className="content-text">The backend is Go with Gin: fast, statically typed, and straightforward to reason about. PostgreSQL handles the workflow state machine cleanly with enum typed status columns and foreign key constraints enforcing valid transitions. Redis handles session caching and rate limiting at the API layer.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>Survey photos and commissioning documents are stored in Cloudflare R2, served via a public custom domain URL. Using R2 over a traditional object store keeps egress costs at zero while giving the ops team direct access to files without hitting the API.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>The React frontend is split into two views: an admin panel for ops team management and a field view optimised for installers on mobile. Role based auth controls what each user can see and do. All state lives in the database. The frontend is purely display and input.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">Outcome</div>
              <h2 className="content-heading">Replaced spreadsheets, <em>now fully in use</em></h2>
              <p className="content-text">The system replaced the previous WhatsApp and spreadsheet workflow entirely. Our operations team now has a single source of truth for every installation job, including field progress by outsourced installers. The platform has been in active production use since deployment with no major incidents.</p>
            </div>

          </div>

          <div className="proj-sidebar">
            <div className="sidebar-block">
              <div className="sidebar-label">Role</div>
              <div className="sidebar-val">Solo engineer: architecture, backend, frontend, deployment</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Timeline</div>
              <div className="sidebar-val">2025 · Production</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Organisation</div>
              <div className="sidebar-val">C Zero Sdn Bhd, internal operations platform, Malaysia</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Stack</div>
              <div className="sidebar-val-list">
                <div>React + TypeScript</div>
                <div>Go / Gin</div>
                <div>PostgreSQL</div>
                <div>Redis</div>
                <div>Cloudflare R2</div>
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
        </div>

      </div>
    </>
  )
}
