import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ozone Machine IoT System — Amir',
}

type OzonePhotoProps = {
  src: string
  alt: string
  caption: string
}

function OzonePhoto({ src, alt, caption }: OzonePhotoProps) {
  return (
    <div className="proj-gallery-item">
      <div className="photo-frame">
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 480px) 100vw, (max-width: 1024px) 34vw, 360px"
        />
        <div className="photo-corner tl" />
        <div className="photo-corner tr" />
        <div className="photo-corner bl" />
        <div className="photo-corner br" />
      </div>
      <p className="gallery-caption">{caption}</p>
    </div>
  )
}

export default function OzonePage() {
  return (
    <>
      <div className="proj-hero">
        <div className="proj-hero-layout">
          <div className="proj-hero-inner">
            <Link href="/#projects" className="back-link">← Back to projects</Link>
            <div className="proj-hero-meta">
              <span className="proj-num-large">01</span>
              <div className="proj-status"><div className="proj-status-dot"></div>Live in production</div>
            </div>
            <h1 className="proj-title">Ozone Machine<br /><em>IoT System</em></h1>
            <p className="proj-subtitle">Retrofitting existing ozone machines with ESP32 intelligence — precise session billing, timestamped records, and live fleet visibility where there was nothing before.</p>
            <div className="proj-tags-row">
              <span className="tag">ESP32</span>
              <span className="tag">Go / Gin</span>
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">PlatformIO</span>
            </div>
          </div>
          <div className="proj-hero-illo">
            <Image
              src="/images/ozone/system-illustration.png"
              alt="Ozone machine IoT system — ESP32 firmware to Go/Gin backend to React dashboard"
              width={834}
              height={299}
              style={{ width: '100%', height: 'auto', opacity: 0.92 }}
              priority
            />
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
              <div className="sec-label">Before</div>
              <h2 className="content-heading">A machine that couldn&apos;t prove <em>it worked</em></h2>
              <p className="content-text">Before my involvement, the ozone machines ran on three Autonics electromechanical session counters — one per service tier (Basic, Standard, Premium). A session ended, a relay tripped, a counter incremented. That was the entire telematic system. No timestamps. No session IDs. No remote visibility. Billing meant someone physically reading three numeric displays and reconciling against a paper log at month-end.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>If the machine lost power mid-session, if a relay stuck, if a treatment ran over its allotted time — no system recorded it. The data was a running total, not a history. Disputes were impossible to resolve. Inaccurate billing was absorbed as a cost of doing business.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">The intervention</div>
              <h2 className="content-heading">ESP32 as the <em>brain</em></h2>
              <p className="content-text">I designed and built a retrofit hardware board around the ESP32-WROOM. It fits inside the same metal enclosure, connects to the same button inputs and relay chain the machine already had — but now the ESP32 intercepts every session event before the counter sees it. I added a relay control module, a voltage sensor for power state monitoring, and WiFi connectivity. Same machine exterior. Same cost to the client. But now every session generates a timestamped, structured record that travels over WiFi to a PostgreSQL database.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>The original Autonics counters still spin — they&apos;re now just displays. The system is upstream of them.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">Development</div>
              <h2 className="content-heading">From bench <em>to field</em></h2>
              <div className="proj-gallery">
                <OzonePhoto
                  src="/images/ozone/early-prototype.jpg"
                  alt="Early ESP32 prototype on development bench"
                  caption="Bench prototype"
                />
                <OzonePhoto
                  src="/images/ozone/hardware-board.jpg"
                  alt="Full hardware board inside the ozone machine enclosure"
                  caption="Installed board"
                />
                <OzonePhoto
                  src="/images/ozone/rnd-machine.jpg"
                  alt="R&D machine RND-02 with telematic system — BASIC / STANDARD / PREMIUM service tiers"
                  caption="Field unit — RND-02"
                />
              </div>
            </div>

            <div className="content-block">
              <div className="sec-label">Architecture</div>
              <h2 className="content-heading">Firmware to <em>frontend</em></h2>
              <p className="content-text">Three independently deployable layers — ESP32 firmware intercepting machine events, a Go/Gin backend storing and analysing records, and a React dashboard giving clients visibility they never had before.</p>
              <div className="arch-diagram">
                <div className="arch-layer">
                  <div className="arch-layer-label">Firmware (ESP32)</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">ClockSource integrity — NTP → NVS anchor fallback</div>
                    <div className="arch-item">Session tracking with hardware watchdog</div>
                    <div className="arch-item">Retry queue for offline resilience</div>
                    <div className="arch-item">POST payloads with clock_source field</div>
                    <div className="arch-item">Periodic heartbeat POST for device health tracking</div>
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
                    <div className="arch-item">Live dashboard per client</div>
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
              <p className="content-text">The system is live and billing real clients — including automotive service centres in Malaysia, with expansion into Indonesia underway. It runs unattended, survives power cycles, and handles intermittent connectivity without losing session data. The client dashboard is used daily to verify usage and generate monthly reports.</p>
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
              <div className="sidebar-val">Automotive service centres · Malaysia &amp; Indonesia</div>
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
              <div className="sidebar-val">37-test pre-production suite. Clock integrity architecture handling power-loss edge cases. Live billing replacing paper logs in production.</div>
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
