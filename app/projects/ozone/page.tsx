import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { OzoneHeroDiagram } from '@/components/OzoneHeroDiagram'

export const metadata: Metadata = {
  title: 'Ozone Machine IoT System · Amir',
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
            <p className="proj-subtitle">Retrofitting existing ozone machines with ESP32 intelligence: precise session billing, timestamped records, and live fleet visibility where there was nothing before.</p>
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
            <OzoneHeroDiagram />
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
              <p className="content-text">There was already a system. The machines had a PHP based backend that tracked session counts via an optocoupler wired to the session relay. On paper, it worked. In practice, it had two problems that made the data untrustworthy.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>The optocoupler was sensitive to electrical noise from the relay switching. A single session trigger would bounce, and the system would register it as two or three separate treatments. Billing was overcounting by design flaw. The second problem was worse: the system had no local clock. It timestamped sessions at server receive time, not when events actually occurred. If a machine went offline for a week and reconnected, every session from that week would land in the database with today&apos;s date. A week of real treatments collapsed into a single day&apos;s record. The data was structurally useless for any time-based reporting.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">The intervention</div>
              <h2 className="content-heading">ESP32 as the <em>brain</em></h2>
              <p className="content-text">Before retrofit, pressing start brought the ozone generator up first and the legacy electronics only nudged the ESP32 afterwards through an optocoupler. The machine could run a treatment even if logging disagreed: the board was a note taker on a noisy line, not a gate.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>I designed and built a retrofit board around the ESP32 WROOM module inside the same enclosure, still wired to the same buttons and relay chain. Now the ESP32 is the brain. A press is handled in firmware first: it timestamps the session, enables the generator path on purpose, and sends structured data over WiFi to PostgreSQL. Nothing starts without the ESP32 committing that state, which removes phantom counts structurally instead of only filtering chatter on a passive tap. I added a relay control module, a voltage sensor for power state monitoring, and WiFi connectivity. Same exterior for the client, different control order. The Autonics counters still spin as displays, downstream of the new logic.</p>
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
                  alt="R&amp;D machine RND 02 running the telematic system, BASIC STANDARD PREMIUM service tiers"
                  caption="Field unit RND 02"
                />
              </div>
            </div>

            <div className="content-block">
              <div className="sec-label">Architecture</div>
              <h2 className="content-heading">Firmware to <em>frontend</em></h2>
              <p className="content-text">Three independently deployable layers: ESP32 firmware that gates each session and telemetry, a Go/Gin backend storing and analysing records, and a React dashboard giving clients visibility they never had before.</p>
              <div className="arch-diagram">
                <div className="arch-layer">
                  <div className="arch-layer-label">Firmware (ESP32)</div>
                  <div className="arch-layer-items">
                    <div className="arch-item">ClockSource integrity: NTP to NVS anchor fallback</div>
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
              <h2 className="content-heading">Data integrity on <em>unreliable hardware</em></h2>
              <p className="content-text">The core challenge wasn&apos;t keeping the hardware running. It was making every record trustworthy. Two problems had to be solved independently before the system could be considered reliable for billing.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>First: phantom counts. The old stack listened at an optocoupler after relay chatter. One real treatment could look like two or three pulses to software. Debouncing a passive tap could not fix the deeper problem, because the generator could already be running while firmware caught up. After the retrofit the ESP32 owns the start decision: it validates a press, commits the record, and only then energises the generator path. One intentional firmware start lines up with one physical treatment.</p>
              <p className="content-text" style={{ marginTop: '1rem' }}>Second: timestamp accuracy. The previous system timestamped sessions at server receive time. Machines in workshops lose WiFi regularly: a power cut, a router reboot, or a dead spot. When connectivity restored, the server received all buffered sessions simultaneously, stamping every one with the reconnection time. A week&apos;s data would appear as a single day. I solved this by having the ESP32 timestamp each session at the moment it occurs and persist that timestamp to NVS flash before any network attempt. When the device reconnects after days offline, each session carries the time it actually happened. The <code>ClockSource</code> enum tracks whether each record is NTP synced, NVS anchored, or an estimated fallback, and that tells the backend the confidence level of each timestamp, so the analytics layer can handle edge cases explicitly rather than silently accepting bad data.</p>
            </div>

            <div className="content-block">
              <div className="sec-label">Outcome</div>
              <h2 className="content-heading">In production, <em>serving real clients</em></h2>
              <p className="content-text">The system is live and billing real clients, including automotive service centres in Malaysia, with expansion into Indonesia underway. It runs unattended, survives power cycles, and handles intermittent connectivity without losing session data. The client dashboard is used daily to verify usage and generate monthly reports.</p>
            </div>

          </div>

          <div className="proj-sidebar">
            <div className="sidebar-block">
              <div className="sidebar-label">Role</div>
              <div className="sidebar-val">Solo engineer: firmware, backend, frontend, deployment</div>
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
              <div className="sidebar-val">Clock integrity architecture with timestamps persisted in NVS. ESP32 gated session starts so phantom counts cannot occur structurally. Live billing in production.</div>
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
