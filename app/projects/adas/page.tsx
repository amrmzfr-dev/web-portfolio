import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ADAS Research System - Amir',
}

export default function ADASPage() {
  return (
    <>
      <div className="proj-hero">
        <div className="proj-hero-inner">
          <Link href="/#projects" className="back-link">← Back to projects</Link>
          <div className="proj-hero-meta">
            <span className="proj-num-large">04</span>
            <div className="proj-status wip"><div className="proj-status-dot"></div>Pilot phase</div>
          </div>
          <h1 className="proj-title">ADAS<br /><em>Research System</em></h1>
          <p className="proj-subtitle">Advanced driver assistance system - embedded hardware through backend data pipeline, currently in pilot phase.</p>
          <div className="proj-tags-row">
            <span className="tag">Rust</span>
            <span className="tag">Embedded</span>
            <span className="tag">Sensor Integration</span>
            <span className="tag">R&amp;D</span>
            <span className="tag">ADAS</span>
            <span className="tag">Pilot phase</span>
          </div>
        </div>
      </div>

      <div className="proj-body">

        <div className="proj-overview">
          <div className="overview-stat"><div className="stat-val">R&amp;D</div><div className="stat-label">Active research phase</div></div>
          <div className="overview-stat"><div className="stat-val">Rust</div><div className="stat-label">Safety-critical firmware</div></div>
          <div className="overview-stat"><div className="stat-val">Pilot</div><div className="stat-label">Pilot phase</div></div>
          <div className="overview-stat"><div className="stat-val">ADAS</div><div className="stat-label">Automotive domain</div></div>
        </div>

        <div className="proj-content">
          <div className="proj-main">

            <div className="content-block">
              <div className="sec-label">Overview</div>
              <h2 className="content-heading">Safety-critical systems <em>demand different thinking</em></h2>
              <p className="content-text">This is an advanced driver assistance system project in active R&amp;D and pre-pilot phase with supplier confirmation. Unlike the other projects in my portfolio, this one is safety-critical by nature - the kind of system where firmware bugs have real-world consequences.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>That&apos;s precisely why I chose Rust for the embedded layer. Memory safety guarantees, no garbage collector pauses, and a type system that catches entire classes of bugs at compile time make it the right tool for this domain.</p>

              <div className="confidential-note">
                <p><strong>Note on confidentiality:</strong> Technical specifics, sensor configurations, detection algorithms, and supplier details for this project are kept confidential as part of the pre-pilot agreement. What I can share is the engineering approach and the challenges I&apos;m working through.</p>
              </div>
            </div>

            <div className="content-block">
              <div className="sec-label">Engineering approach</div>
              <h2 className="content-heading">Embedded to <em>cloud pipeline</em></h2>
              <p className="content-text">The system architecture spans from physical sensor hardware through embedded processing to a backend data pipeline. Each layer has distinct reliability and latency requirements that shape the design decisions.</p>
              <div className="arch-diagram">
                <div className="arch-layer">
                  <div className="arch-layer-label">Sensor / Hardware layer</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">Physical sensor integration and signal acquisition</div>
                    <div className="arch-item">Hardware interface layer in Rust</div>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-layer-label">Embedded processing (Rust)</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">Real-time signal processing with hard latency constraints</div>
                    <div className="arch-item">Safety-critical logic with no dynamic allocation</div>
                    <div className="arch-item">Deterministic error handling - no panics in production paths</div>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-layer-label">Backend data pipeline</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">Telemetry ingestion and storage</div>
                    <div className="arch-item">R&amp;D data analysis for pilot evaluation</div>
                    <div className="arch-item">Performance metrics and incident logging</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-block">
              <div className="sec-label">Why Rust</div>
              <h2 className="content-heading">The right tool for <em>safety-critical work</em></h2>
              <p className="content-text">For embedded systems where a bug could affect a moving vehicle, I&apos;m not willing to trade safety for developer convenience. Rust&apos;s ownership model eliminates use-after-free, data races, and null pointer dereferences at compile time - entire categories of bugs that have caused real automotive safety incidents.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>The <code>no_std</code> embedded Rust ecosystem has matured enough to be a genuine option for this class of problem. The compile-time guarantees are worth the steeper learning curve - and I&apos;ve put in that curve.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">Status</div>
              <h2 className="content-heading">Pre-pilot, <em>moving toward field testing</em></h2>
              <p className="content-text">The project is in active R&amp;D with the supplier confirmed for the pilot phase. The focus right now is on validating the core detection pipeline before moving to field testing. More details will be available post-pilot.</p>
            </div>

          </div>

          <div className="proj-sidebar">
            <div className="sidebar-block">
              <div className="sidebar-label">Role</div>
              <div className="sidebar-val">R&amp;D engineer - embedded firmware, sensor integration, backend pipeline</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Timeline</div>
              <div className="sidebar-val">2025 · Pre-pilot phase</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Domain</div>
              <div className="sidebar-val">Automotive - Advanced Driver Assistance Systems</div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Stack</div>
              <div className="sidebar-val-list">
                <div>Rust (no_std embedded)</div>
                <div>Sensor hardware interfaces</div>
                <div>Backend data pipeline</div>
                <div>PostgreSQL</div>
              </div>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-label">Why it matters</div>
              <div className="sidebar-val">Safety-critical embedded systems where software correctness is non-negotiable. Rust chosen specifically for compile-time safety guarantees.</div>
            </div>
          </div>
        </div>

        <div className="proj-nav">
          <Link href="/projects/ev" className="proj-nav-prev">← EV Charger Platform</Link>
          <Link href="/#contact" className="proj-nav-next">Get in touch →</Link>
        </div>

      </div>
    </>
  )
}
