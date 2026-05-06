import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="hero">
        <div className="hero-v2-grid-lines" />
        <div className="hero-v2-dot" style={{ top: '15%', left: '5%' }} />
        <div className="hero-v2-dot" style={{ top: '72%', left: '8%' }} />
        <div className="hero-v2-dot" style={{ top: '30%', left: '48%' }} />
        <div className="hero-v2-dot" style={{ top: '85%', left: '42%' }} />
        <div className="hero-v2-dot" style={{ top: '20%', right: '8%' }} />
        <div className="hero-v2-divider" />

        <div className="hero-v2-left">
          <span className="hero-v2-eyebrow">Hey, I&apos;m</span>
          <h1 className="hero-v2-name">Amir</h1>
          <p className="hero-v2-role">Full Stack Developer</p>
          <p className="hero-v2-meta">Based in Malaysia (GMT+8)</p>
          <p className="hero-v2-desc">
            I build <strong>complete systems</strong>, from ESP32 firmware on hardware to production dashboards used in real environments. I work across <strong>backend, frontend, DevOps, and embedded</strong>.
            <br /><br />
            I care about building things that ship, scale, and stay reliable in production.
          </p>
          <div className="hero-v2-ctas">
            <Link href="#projects" className="btn-primary">See my work</Link>
            <Link href="#contact" className="btn-ghost">Get in touch</Link>
          </div>
          <div className="hero-v2-stack-row">
            <span className="hero-v2-chip">go</span>
            <span className="hero-v2-chip">rust</span>
            <span className="hero-v2-chip">react</span>
            <span className="hero-v2-chip">typescript</span>
            <span className="hero-v2-chip">esp32</span>
            <span className="hero-v2-chip">psql</span>
            <span className="hero-v2-chip">docker</span>
            <span className="hero-v2-chip">axum</span>
          </div>
        </div>

        <div className="hero-v2-right">
          <div className="hero-v2-portrait-frame">
            <div className="hero-v2-portrait-accent-bar" />
            <img
              className="hero-v2-portrait-img"
              src="/hero-portrait.png"
              alt="Amir portrait"
            />
            <div className="hero-v2-portrait-badge">
              <div className="hero-v2-badge-label">Live in production</div>
              <div className="hero-v2-badge-stat">3 ✓</div>
              <div className="hero-v2-badge-sub">+ 1 pilot phase</div>
            </div>
            <div className="hero-v2-portrait-code">
              <div><span className="hero-v2-code-key">$ whoami</span></div>
              <div><span className="hero-v2-code-val">amir</span> · full stack + iot</div>
              <div><span className="hero-v2-code-key">loc</span> · shah alam, my</div>
              <div><span className="hero-v2-code-key">open</span> · <span className="hero-v2-code-val">first freelance client ✓</span> <span className="hero-v2-code-cursor" /></div>
            </div>
          </div>
        </div>

        <div className="hero-v2-scroll-hint">
          <div className="hero-v2-scroll-line" />
          scroll
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="sec-label fade-up">About me</div>
        <div className="about-layout">
          <div>
            <h2 className="sec-heading fade-up" style={{ '--delay': '0.08s' } as React.CSSProperties}>I build things<br />that <em>actually ship</em></h2>
            <div className="story-text fade-up" style={{ '--delay': '0.16s' } as React.CSSProperties}>
              <p>I graduated with a Computer Science degree (Netcentric Computing) and started my career in a startup environment, where I had to learn quickly and take ownership of what I built.</p>
              <p>I&apos;ve worked across the stack, building web applications, APIs, and systems that interact with real hardware. I choose tools based on what fits the problem and I&apos;m comfortable picking up new technologies when needed.</p>
              <p>I work fast and often use modern tools, including AI, to speed things up, but I stay careful with what I ship, making sure it&apos;s stable and maintainable.</p>
              <p>I enjoy thinking through systems end to end and also getting into the details to make things work.</p>
              <p>Currently, I&apos;m looking for my first part time freelance projects in full stack development, IoT systems, or internal tools.</p>
              <p>Outside of coding, I spend time on games, random IoT ideas, and probably too much coffee.</p>
            </div>
          </div>
          <div>
            <div className="sec-label fade-up" style={{ marginBottom: '1.25rem' }}>Timeline</div>
            <div className="timeline fade-up" style={{ '--delay': '0.12s' } as React.CSSProperties}>
              <div className="tl-item">
                <div className="tl-year">2025 → Present</div>
                <div>
                  <div className="tl-role">IT Engineer, Full Stack &amp; IoT</div>
                  <div className="tl-where">C Zero Sdn Bhd · Malaysian Tech Startup</div>
                  <div className="tl-desc">Working across the full stack, building and maintaining production systems spanning web platforms, APIs, and embedded/IoT devices.</div>
                  <div className="tl-desc">Delivered multiple end to end systems including internal tools, IoT based machine platforms, and infrastructure for EV related projects, covering frontend, backend, deployment, and system design.</div>
                  <div className="tl-desc">Comfortable owning systems end to end, from architecture decisions to production deployment and iteration.</div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-year">2024</div>
                <div>
                  <div className="tl-role">Bachelor of Computer Science (Netcentric Computing)</div>
                  <div className="tl-where">Universiti Teknologi MARA (UiTM) · Jasin, Melaka</div>
                  <div className="tl-desc">Built a foundation in web and software development through HTML, JavaScript, Python, PHP, and Java, while gaining exposure to embedded systems.</div>
                  <div className="tl-desc">Later picked up Go and Rust to focus on building more efficient, high performance backend systems.</div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-year">Earlier</div>
                <div>
                  <div className="tl-role">Diploma in Computer Science</div>
                  <div className="tl-where">Universiti Teknologi MARA (UiTM) · Raub, Pahang</div>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-year">Side Track</div>
                <div>
                  <div className="tl-role">Freelance, open to opportunities (part time)</div>
                  <div className="tl-where">Remote · MY timezone</div>
                  <div className="tl-desc">Actively looking for my first freelance client, part time, alongside my full time role. Focus areas: full stack development, IoT systems, and internal tools.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack">
        <svg className="section-decor" style={{ bottom: 32, right: 32, width: 110, height: 96 } as React.CSSProperties} viewBox="0 0 110 96" fill="none" aria-hidden="true">
          <line x1="14" y1="74" x2="54" y2="26" stroke="#F55D00" strokeWidth="0.5" opacity="0.1" />
          <line x1="54" y1="26" x2="94" y2="66" stroke="#F55D00" strokeWidth="0.5" opacity="0.1" />
          <circle cx="14" cy="74" r="2.5" fill="#F55D00" opacity="0.25" />
          <circle cx="54" cy="26" r="3"   fill="#F55D00" opacity="0.3" />
          <circle cx="94" cy="66" r="2"   fill="#F55D00" opacity="0.22" />
        </svg>
        <div className="sec-label fade-up">Tech stack</div>
        <h2 className="sec-heading fade-up" style={{ '--delay': '0.08s' } as React.CSSProperties}>What I <em>work with</em></h2>
        <div className="stack-categories">
          <div className="stack-cat fade-up" style={{ '--delay': '0s' } as React.CSSProperties}>
            <div className="stack-cat-label">Frontend</div>
            <div className="stack-items">
              <div className="stack-item"><div className="stack-dot"></div><span>React + TypeScript</span></div>
              <div className="stack-item"><div className="stack-dot"></div><span>Next.js</span></div>
              <div className="stack-item"><div className="stack-dot"></div><span>Tailwind CSS</span></div>
              <div className="stack-item"><div className="stack-dot"></div><span>Tauri (Desktop)</span></div>
            </div>
          </div>
          <div className="stack-cat fade-up" style={{ '--delay': '0.08s' } as React.CSSProperties}>
            <div className="stack-cat-label">Backend</div>
            <div className="stack-items">
              <div className="stack-item"><div className="stack-dot"></div><span>Go / Gin</span></div>
              <div className="stack-item"><div className="stack-dot"></div><span>Rust / Axum</span></div>
              <div className="stack-item"><div className="stack-dot"></div><span>REST APIs</span></div>
              <div className="stack-item"><div className="stack-dot"></div><span>PostgreSQL</span></div>
            </div>
          </div>
          <div className="stack-cat fade-up" style={{ '--delay': '0.16s' } as React.CSSProperties}>
            <div className="stack-cat-label">IoT / Embedded</div>
            <div className="stack-items">
              <div className="stack-item"><div className="stack-dot"></div><span>ESP32</span></div>
              <div className="stack-item"><div className="stack-dot"></div><span>PlatformIO</span></div>
              <div className="stack-item"><div className="stack-dot"></div><span>Rust (embedded)</span></div>
              <div className="stack-item"><div className="stack-dot"></div><span>Firmware design</span></div>
            </div>
          </div>
          <div className="stack-cat fade-up" style={{ '--delay': '0.24s' } as React.CSSProperties}>
            <div className="stack-cat-label">Infra</div>
            <div className="stack-items">
              <div className="stack-item"><div className="stack-dot"></div><span>VPS / AlmaLinux</span></div>
              <div className="stack-item"><div className="stack-dot"></div><span>Docker</span></div>
              <div className="stack-item"><div className="stack-dot"></div><span>Redis</span></div>
              <div className="stack-item"><div className="stack-dot"></div><span>CSF / LFD</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="sec-label fade-up">Selected work</div>
        <h2 className="sec-heading fade-up" style={{ '--delay': '0.08s' } as React.CSSProperties}>Things I&apos;ve <em>built &amp; shipped</em></h2>
        <div className="projects-grid">

          <Link href="/projects/ozone" className="proj-card fade-up" style={{ '--delay': '0s' } as React.CSSProperties}>
            <div className="proj-card-num">01</div>
            <div className="proj-status"><div className="proj-status-dot"></div>Live in production</div>
            <div className="proj-card-name">Ozone Machine IoT System</div>
            <div className="proj-card-desc">Full stack IoT system for ozone machine management: ESP32 firmware through Go backend to React dashboard, serving real automotive industry clients.</div>
            <div className="proj-card-tags">
              <span className="tag">ESP32</span>
              <span className="tag">Go</span>
              <span className="tag">React</span>
              <span className="tag">PostgreSQL</span>
            </div>
            <div className="proj-card-cta">View case study →</div>
          </Link>

          <Link href="/projects/cctv" className="proj-card fade-up" style={{ '--delay': '0.1s' } as React.CSSProperties}>
            <div className="proj-card-num">02</div>
            <div className="proj-status"><div className="proj-status-dot"></div>Live in production</div>
            <div className="proj-card-name">CCTV API Server</div>
            <div className="proj-card-desc">Perodua Q VE programme: mostly supplier integration support; CCTV API was hands-on, Python REST over Dahua NetSDK (C), into P Circle via agency.</div>
            <div className="proj-card-tags">
              <span className="tag">Python</span>
              <span className="tag">NetSDK</span>
              <span className="tag">REST</span>
              <span className="tag">Auth</span>
            </div>
            <div className="proj-card-cta">View case study →</div>
          </Link>

          <Link href="/projects/ev" className="proj-card fade-up" style={{ '--delay': '0.2s' } as React.CSSProperties}>
            <div className="proj-card-num">03</div>
            <div className="proj-status"><div className="proj-status-dot"></div>Live in production</div>
            <div className="proj-card-name">EV Charger Installation Platform</div>
            <div className="proj-card-desc">End to end installation management system for internal operations at C Zero Sdn Bhd. Tracks installers, site surveys, and commissioning workflows.</div>
            <div className="proj-card-tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Go</span>
              <span className="tag">PostgreSQL</span>
            </div>
            <div className="proj-card-cta">View case study →</div>
          </Link>

          {/* ADAS card hidden — page not ready
          <Link href="/projects/adas" className="proj-card fade-up" style={{ '--delay': '0.3s' } as React.CSSProperties}>
            <div className="proj-card-num">04</div>
            <div className="proj-status wip"><div className="proj-status-dot"></div>Pilot phase</div>
            <div className="proj-card-name">ADAS Research System</div>
            <div className="proj-card-desc">Advanced driver assistance system in pilot phase: embedded systems, sensor integration, and backend data pipeline.</div>
            <div className="proj-card-tags">
              <span className="tag">Rust</span>
              <span className="tag">Embedded</span>
              <span className="tag">R&amp;D</span>
              <span className="tag">ADAS</span>
            </div>
            <div className="proj-card-cta">View case study →</div>
          </Link>
          */}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <svg className="section-decor" style={{ top: 36, right: 36, width: 120, height: 100 } as React.CSSProperties} viewBox="0 0 120 100" fill="none" aria-hidden="true">
          <line x1="20" y1="18" x2="68" y2="56" stroke="#F55D00" strokeWidth="0.5" opacity="0.1" />
          <line x1="68" y1="56" x2="100" y2="20" stroke="#F55D00" strokeWidth="0.4" opacity="0.08" />
          <line x1="68" y1="56" x2="80"  y2="88" stroke="#F55D00" strokeWidth="0.4" opacity="0.08" />
          <circle cx="20"  cy="18" r="2"   fill="#F55D00" opacity="0.22" />
          <circle cx="68"  cy="56" r="3"   fill="#F55D00" opacity="0.3" />
          <circle cx="100" cy="20" r="1.5" fill="#F55D00" opacity="0.18" />
          <circle cx="80"  cy="88" r="2"   fill="#F55D00" opacity="0.2" />
        </svg>
        <div className="contact-layout">
          <div className="contact-left fade-up">
            <div className="sec-label">Get in touch</div>
            <h2 className="sec-heading">Let&apos;s work<br /><em>together</em></h2>
            <p className="contact-note">I&apos;m looking for my first freelance clients for full stack web apps, IoT systems, and internal tooling. If you have something to build and want someone who can own it end to end, reach out.</p>
            <div className="contact-links-stack">
              <a href="mailto:amr.mzfr.dev@outlook.com" className="contact-email-link">amr.mzfr.dev@outlook.com</a>
              <a href="tel:+60129693454" className="contact-phone-link">+6012 969 3454</a>
            </div>
          </div>
          <div className="contact-right fade-up" style={{ '--delay': '0.12s' } as React.CSSProperties}>
            <div className="sec-label" style={{ marginBottom: '1.25rem' }}>Find me on</div>
            <div className="social-list">
              <a href="https://github.com/amrmzfr-dev" target="_blank" rel="noreferrer" className="social-item">
                <span className="social-name">GitHub</span>
                <span className="social-handle">@amrmzfr-dev</span>
                <span className="social-arrow">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/muzaffar-amir-ab-jalal-25b834406/" target="_blank" rel="noopener noreferrer" className="social-item">
                <span className="social-name">LinkedIn</span>
                <span className="social-handle">Amir · Full Stack Engineer</span>
                <span className="social-arrow">↗</span>
              </a>
              <a href="#" className="social-item">
                <span className="social-name">WhatsApp</span>
                <span className="social-handle">Quick chat · MY timezone</span>
                <span className="social-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
