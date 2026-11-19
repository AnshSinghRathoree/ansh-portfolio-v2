import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  {
    id: 'job-radar',
    number: '01',
    status: 'IN PROGRESS',
    title: 'Job Radar Agent',
    kicker: 'AI JOB HUNTING & OUTREACH AGENT',
    year: '2026',
    stack: 'Python · JobSpy · LLMs · Automation',
    image: '/images/', // Replace with a screenshot of your Job Radar pipeline when ready
    url: 'https://github.com/AnshSinghRathoree',
    description: 'An automated daily job-discovery and application assistant built to scrape 50–60 targeted roles, tailor resumes per JD, and streamline morning outreach.',
    bullets: [
      'Aggregates fresh software & AI engineering postings daily using JobSpy with deduplication and role filtering.',
      'Tailors resume bullet points against each job description and extracts recruiter/HR contact metadata.',
      'Designed as a lightweight local CLI/dashboard workflow to run cleanly on an 8GB RAM machine.'
    ]
  },
  {
    id: 'sqlx',
    number: '02',
    title: 'SQL_X',
    kicker: 'AI DATA ANALYTICS COPILOT',
    year: '2026',
    stack: 'React · FastAPI · Groq · SQLite · ChromaDB',
    image: '/images/sqlx-preview.jpg',
    url: 'https://sql-x-nine.vercel.app/',
    description: 'A natural-language analytics workspace that turns uploaded CSV data into queryable, explainable insights.',
    bullets: [
      'Schema-aware prompting converts natural-language questions into SQL.',
      'RAG with ChromaDB retrieves relevant schema and dataset context.',
      'FastAPI powers profiling, SQL generation, explanations, insights and auto-fix.',
      'React + SQLite/sql.js handles execution, charts, history and CSV export.'
    ]
  },
  {
    id: 'rr-selector',
    number: '03',
    title: 'SupeRR Selector',
    kicker: 'SPORTS ANALYTICS · IPL 2027',
    year: '2026',
    stack: 'Python · Empirical Bayes · React · Data Modeling',
    image: '/images/rr-preview.jpg.png', // Save your RR dashboard screenshot as public/images/rr-preview.jpg
    url: 'https://github.com/AnshSinghRathore/RR_dashboard',
    description: 'Delivery-level cricket analytics engine modeling 200,999 balls across 867 matches to optimize Rajasthan Royals’ IPL 2027 auction strategy.',
    bullets: [
      'Engineered a Delivery-Level Pressure Index (PI) and Empirical Bayes shrinkage model across 2022–2026 T20 data.',
      'Modeled ₹130 Cr salary cap constraints (₹102.95 Cr committed, ₹27.05 Cr purse) and filtered 182 retained/traded players.',
      'Built an interactive auction scouting dashboard and submitted a full technical selection report for SupeRR Selector Season 2.'
    ]
  },
  {
    id: 'krishi',
    number: '04',
    title: 'KrishiDoot',
    kicker: 'SMART FARMING PLATFORM',
    year: '2025',
    stack: 'React · Flask · APIs · IoT',
    image: '/images/krishi-preview.jpg',
    url: 'https://krishi-doot-nine.vercel.app/predict',
    description: 'A farming decision platform combining live environmental and soil inputs to recommend suitable crops.',
    bullets: [
      'Integrated weather, NPK, moisture and light-intensity inputs.',
      'Generated crop recommendations from API and sensor inputs.',
      'Achieved a 95+ Lighthouse score with responsive deployment.'
    ]
  },
  {
    id: 'deep',
    number: '05',
    title: 'Deep Origin',
    kicker: 'BIODIVERSITY / ML',
    year: '2025',
    stack: 'Python · Machine Learning',
    image: '/images/deep-preview.jpg',
    url: 'https://deep-origin.vercel.app/',
    description: 'An environmental-DNA analysis workflow built around biodiversity classification and taxonomy exploration.',
    bullets: [
      'Analyzed 10,000+ environmental DNA sequences.',
      'Streamlined feature extraction to reduce processing time by 40%.',
      'Visualized taxonomy insights across datasets through dashboards.'
    ]
  }
];

const hackathons = [
  {
    title: 'Hackspire',
    year: '2024',
    result: 'FINAL ROUND · TOP 10 / 70+ TEAMS',
    intro: 'My first hackathon — a 30-hour build at Inderprastha Engineering College that pushed me from learning syntax to solving an unfamiliar problem with a team.',
    detail: '27–28 December 2024. Reached the Final Round (Top 10 out of 70+ competing teams) building under a 30-hour clock.',
    cert: '/images/hackspire-cert.jpg',
    type: 'HACKATHON · 30 HOURS'
  },
  {
    title: "Google's TechSprint 2K25",
    year: '2025',
    result: '3RD PLACE · TEAM NULLVOID',
    intro: 'An open-innovation hackathon focused on data-driven problem solving and collaborative building.',
    detail: 'Secured 3rd position in Open Innovation as Team NullVoid, recognized for Data Science, Machine Learning, and collaborative engineering.',
    cert: '/images/google-techsprint-cert.jpg',
    type: 'HACKATHON · OPEN INNOVATION'
  },
  {
    title: 'IdeaLabX 3.0',
    year: '2025',
    result: '2ND PLACE · KRISHIDOOT',
    intro: 'An ideathon where KrishiDoot turned a real-world farming problem into a working product concept.',
    detail: 'Runner-up among 40+ teams for KrishiDoot, recognized for practical innovation and impact.',
    cert: '/images/idealabx-cert.jpg',
    type: 'IDEATHON'
  },
  {
    title: 'Smart India Hackathon',
    year: '2025',
    result: 'COLLEGE ROUND CLEARED',
    intro: 'A major checkpoint in the journey — taking Deep Origin into the Smart India Hackathon internal selection process.',
    detail: 'Deep Origin was selected at the college-round evaluation for SIH 2025.',
    cert: null,
    type: 'HACKATHON'
  }
];

const achievements = [
  ['BIS Ideathon', '1ST POSITION · BIS STANDARD CLUB', '2025'],
  ['Engineers Day 2025', '3RD POSITION · ENGINEERING EXHIBITION', '2025'],
  ['Bharat Shiksha Expo', 'TOP 6 · 200+ TEAMS', '2025']
];

const certificates = [
  { title: 'AI Deployment & Automation', issuer: 'EduSkills / AICTE', year: '2026', image: '/images/ai-deployment-cert.jpg', tag: 'AI · DEPLOYMENT' },
  { title: 'Data Analytics Job Simulation', issuer: 'Deloitte × Forage', year: '2025', image: '/images/deloitte-cert.jpg', tag: 'DATA · FORENSIC TECH' },
  { title: 'AWS Academy Cloud Foundations', issuer: 'AWS Academy', year: '2025', image: '/images/aws-cert.jfif', tag: 'CLOUD · AWS' },
  { title: 'Data Analytics Essentials', issuer: 'Cisco Networking Academy', year: '2025', image: '/images/cisco-data.jfif', tag: 'DATA ANALYTICS' },
  { title: 'Introduction to MongoDB', issuer: 'MongoDB', year: '2025', image: '/images/mongo-cert.jfif', tag: 'DATABASE' },
  { title: 'C++ & DSA Bootcamp', issuer: 'SMARTED', year: '2025', image: '/images/cpp-dsa.jfif', tag: 'DSA · C++' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', year: '2025', image: '/images/cisco-cyber.jfif', tag: 'CYBERSECURITY' },
  { title: 'Gen AI Workshop 2025', issuer: 'TECHhelp4U', year: '2025', image: '/images/genai-cert.jfif', tag: 'GENERATIVE AI' },
  { title: 'HTML Certification', issuer: 'C# Corner', year: '2024', image: '/images/html-cert.jfif', tag: 'HTML · 8/10' },
  { title: 'Prompt To Design', issuer: 'Think AI Club · IPEC', year: '2025', image: '/images/prompt-cert.jfif', tag: 'AI · DESIGN' }
];

const arenaGallery = [
  ['/images/kho-kho-action.jpg', 'KHO-KHO · JERSEY #7 IN ACTION'],
  ['/images/sports-dive.jpg', 'SPORTS FEST · SQUAD & CERTIFICATES'],
  ['/images/trophy.jpg', 'KHO-KHO · TOURNAMENT RUNNER-UP'],
  ['/images/sports-officials.jpg', 'IPEC · FACULTY & TEAM'],
  ['/images/sports-team.jpg', 'TEAM · IPEC'],
  ['/images/sports-group.jpg', 'COMPETITION · SQUAD'],
  ['/images/sports-7.jpg', 'KHO-KHO · MATCH DAY'],
  ['/images/sports-team2.jpg', 'TOURNAMENT · LINEUP']
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.06 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function App() {
  useReveal();
  const [activeProject, setActiveProject] = useState(null);
  const [activeCert, setActiveCert] = useState(null);
  const [activeHack, setActiveHack] = useState(null);
  const [palette, setPalette] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const anyModalOpen = Boolean(activeProject || activeCert || activeHack || palette);

  useEffect(() => {
    document.body.style.overflow = anyModalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [anyModalOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    const onPointer = e => {
      const dot = document.getElementById('cursorDot');
      if (dot) {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
      }
    };
    const onKey = e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPalette(v => !v);
      }
      if (e.key === 'Escape') {
        setPalette(false);
        setActiveProject(null);
        setActiveCert(null);
        setActiveHack(null);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointermove', onPointer, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  const jump = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setPalette(false);
  };

  return (
    <>
      <div className="grain" />
      <div className="cursor-dot" id="cursorDot" />
      <Nav scrolled={scrolled} onCommand={() => setPalette(true)} />
      <main>
        <Hero onWork={() => jump('work')} />
        <About />
        <Journey />
        <Projects onOpen={setActiveProject} />
        <Hackathons onOpen={setActiveHack} />
        <Experience />
        <Skills />
        <Achievements />
        <Arena />
        <Certifications onOpen={setActiveCert} />
        <BeyondCode />
        <Contact />
      </main>
      <footer className="footer">
        <div>ANSH SINGH RATHORE</div>
        <div>SOFTWARE ENGINEER · DELHI NCR</div>
        <div>© {new Date().getFullYear()}</div>
      </footer>
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      {activeHack && <HackathonModal item={activeHack} onClose={() => setActiveHack(null)} />}
      {activeCert && <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />}
      {palette && <CommandPalette jump={jump} close={() => setPalette(false)} />}
    </>
  );
}

function Nav({ scrolled, onCommand }) {
  const items = [
    ['work', 'WORK'],
    ['hackathons', 'HACKATHONS'],
    ['experience', 'EXPERIENCE'],
    ['about', 'ABOUT'],
    ['contact', 'CONTACT']
  ];
  return (
    <header className={`nav ${scrolled ? 'nav-solid' : ''}`}>
      <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ASR<span>.</span>
      </button>
      <nav>
        {items.map(([id, label]) => (
          <a key={id} href={'#' + id}>{label}</a>
        ))}
      </nav>
      <button className="command" onClick={onCommand} aria-label="Open command menu">
        <span>⌘</span>K
      </button>
    </header>
  );
}

function Hero({ onWork }) {
  return (
    <section className="hero section-pad" id="top">
      <div className="hero-inner">
        <div className="hero-meta reveal">
          <span>DELHI NCR, INDIA</span>
          <span>SOFTWARE ENGINEER</span>
          <span>AI · BACKEND · WEB</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow reveal">ANSH SINGH RATHORE / 2026</p>
            <h1 className="hero-title">
              <span className="line reveal delay-1">I LEARN WHAT</span>
              <span className="line offset reveal delay-2">THE PROBLEM</span>
              <span className="line reveal delay-3">DEMANDS.</span>
              <span className="line accent-line reveal delay-4">THEN I BUILD.</span>
            </h1>
            <div className="hero-bottom reveal delay-4">
              <p>I build software around the problem in front of me — learning the stack, testing the idea, and staying with the build until it works.</p>
              <div className="hero-actions">
                <button className="btn btn-dark" onClick={onWork}>VIEW WORK <span>↘</span></button>
                <a className="btn btn-outline" href="/Ansh-Singh-Rathore-Resume.pdf" target="_blank" rel="noreferrer">RESUME ↗</a>
              </div>
            </div>
          </div>
          <div className="hero-photo-wrap reveal delay-2">
            <div className="photo-label">CURIOUS BY DEFAULT<br /><b>COMMITTED TO THE BUILD</b></div>
            <img className="hero-photo" src="/images/hero.jpg" alt="Ansh Singh Rathore holding a trophy" />
            <div className="hero-stamp">BUILD<br />LEARN<br />ADAPT</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ index, eyebrow, title, copy, id }) {
  return (
    <div className="section-head reveal" id={id}>
      <span className="section-index">{index}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="section dark-section about section-pad full-section" id="about">
      <SectionHead
        index="01"
        eyebrow="MY STORY"
        title={<>I LIKE BUILDING THINGS<br /><em>I DON'T ALREADY KNOW</em><br />HOW TO BUILD.</>}
        copy="I started with HTML, CSS and JavaScript. The more projects I built, the more I wanted to understand what happens behind the interface — APIs, data, systems, and now AI."
      />
      <div className="about-layout">
        <div className="manifesto reveal">
          <span>RESEARCH</span><i>→</i><span>EXPERIMENT</span><i>→</i><span>BUILD</span><i>→</i><span>SHIP</span>
        </div>
        <div className="about-text reveal delay-1">
          <p>Hackathons pushed me from simply learning syntax to solving unfamiliar problems under a deadline. Today, my focus is software engineering with AI — LLMs, RAG, agents, backend APIs and the systems needed to make them useful.</p>
          <p>I’m also learning MCP and going deeper into ML and deployment. The common thread is simple: <strong>learn what the problem demands, then make something real.</strong></p>
        </div>
        <div className="about-stats reveal delay-2">
          <div><b>250+</b><span>LEETCODE</span></div>
          <div><b>5–6</b><span>PAID WEBSITES</span></div>
          <div><b>10+</b><span>HACKATHONS / COMPETITIONS</span></div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    ['2024', 'STARTED BUILDING', 'HTML · CSS · JAVASCRIPT', 'The first phase was about making things work — websites, interfaces and my first hackathon: Hackspire.'],
    ['2025', 'STARTED COMPETING', 'REACT · PYTHON · ML · APIs', 'Hackathons became a laboratory. KrishiDoot and Deep Origin pushed me into real-world data and ML problems.'],
    ['2026', 'BUILDING WITH AI & ANALYTICS', 'LLMs · RAG · AGENTS · FASTAPI · BAYESIAN MODELS', 'Shipped SQL_X (AI analytics copilot), modeled 200k+ T20 deliveries for SupeRR Selector, and building an automated Job Radar agent.']
  ];
  return (
    <section className="journey section-pad full-section">
      <SectionHead
        index="02"
        eyebrow="THE JOURNEY"
        title="FROM MAKING PAGES TO BUILDING SYSTEMS"
        copy="A timeline of what changed — not just the technologies, but the kinds of problems I wanted to solve."
      />
      <div className="timeline">
        {steps.map((s, i) => (
          <div className="timeline-row reveal" key={s[0]}>
            <div className="timeline-year">{s[0]}</div>
            <div className="timeline-dot">0{i + 1}</div>
            <div className="timeline-content">
              <h3>{s[1]}</h3>
              <div className="tagline">{s[2]}</div>
              <p>{s[3]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects({ onOpen }) {
  return (
    <section className="projects section-pad full-section" id="work">
      <SectionHead
        index="03"
        eyebrow="SELECTED WORK"
        title="THINGS I'VE BUILT."
        copy="Active builds and shipped products across AI agents, natural-language analytics, statistical modeling, and full-stack web."
      />
      <div className="project-grid">
        {projects.map(p => (
          <article className="project-card reveal" key={p.id} onClick={() => onOpen(p)}>
            <div className="project-image">
              <img src={p.image} alt={p.title} />
              {p.status && <span className="status-badge">{p.status}</span>}
              <div className="image-overlay">OPEN CASE STUDY ↗</div>
            </div>
            <div className="project-card-meta">
              <div>
                <div className="project-kicker-row">
                  <span>{p.number} · {p.year}</span>
                  {p.status && <span className="status-pill">{p.status}</span>}
                </div>
                <h3>{p.title}</h3>
              </div>
              <p>{p.description}</p>
            </div>
            <div className="project-stack">{p.stack}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Hackathons({ onOpen }) {
  return (
    <section className="hackathons section-pad full-section dark-section" id="hackathons">
      <SectionHead
        index="04"
        eyebrow="HACKATHONS & COMPETITIONS"
        title="BUILT UNDER PRESSURE."
        copy="This is the competition trail — separate from leadership, speaking and sports. Each entry has the event context, the result, and the certificate when documented."
      />
      <div className="hack-grid">
        {hackathons.map((h, i) => (
          <article className="hack-card reveal" key={h.title} onClick={() => onOpen(h)}>
            <div className="hack-top">
              <span>0{i + 1}</span>
              <span>{h.year}</span>
            </div>
            <div className="hack-cert">
              {h.cert ? (
                <img src={h.cert} alt={`${h.title} certificate`} />
              ) : (
                <div className="hack-no-cert">SIH<br /><b>COLLEGE ROUND</b></div>
              )}
            </div>
            <div className="hack-body">
              <p className="eyebrow">{h.type}</p>
              <h3>{h.title}</h3>
              <strong>{h.result}</strong>
              <p>{h.intro}</p>
              <button>VIEW CERTIFICATE / STORY ↗</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const exp = [
    ['01', 'Open-Source Contributor & Evaluator', 'UnvibeCode Engineering Challenge · Remote', 'NOV 2026', 'Evaluated UnvibeCode v0.4.0 across open-source repositories (Flask, FastAPI, Authlib), filed GitHub Issue #819 on Client.__init__ token configuration, and proposed an automated PR diff guard workflow.'],
    ['02', 'Freelance Web Developer', 'Self Employed · Remote', '2024 — PRESENT', '5–6 paid websites across legal, automobile and business domains. Client revisions, deployments and post-launch updates from build to delivery.'],
    ['03', 'Web Developer Intern', 'Yugtronics India Pvt Ltd · India', 'NOV — DEC 2025', 'Translated 15+ business requirements into UI workflows, structured ERP flows across 8+ departments, designed 150+ Figma mobile screens and supported 10+ modules.'],
    ['04', 'AI Deployment & Automation', 'EduSkills / AICTE Virtual Internship', '2026', 'Explored FastAPI, Docker/CI-CD, cloud AI deployment, GenAI serving, agents, advanced RAG and monitoring.']
  ];
  return (
    <section className="dark-section experience section-pad full-section" id="experience">
      <SectionHead
        index="05"
        eyebrow="WHERE I'VE WORKED"
        title="LEARNED BY SHIPPING."
        copy="Different environments, same habit: take the requirement, understand the system, and make the thing work."
      />
      <div className="experience-list">
        {exp.map(e => (
          <div className="experience-row reveal" key={e[0]}>
            <div className="exp-num">{e[0]}</div>
            <div className="exp-title">
              <h3>{e[1]}</h3>
              <span>{e[2]}</span>
            </div>
            <div className="exp-date">{e[3]}</div>
            <p>{e[4]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    ['AI / ML', 'LLMs · RAG · Embeddings · Vector Databases · LangChain · Agentic AI · Prompt Engineering · OpenAI / Groq APIs · MCP (learning)'],
    ['Backend', 'Python · FastAPI · REST APIs · Pydantic · API Integration · JSON · SQLite'],
    ['Frontend', 'React.js · JavaScript · HTML5 · CSS3 · Bootstrap · Chart.js'],
    ['Languages', 'C++ · Python · JavaScript · SQL'],
    ['CS Fundamentals', 'DSA · OOP · DBMS · Operating Systems · Software Testing'],
    ['Cloud / Learning', 'AWS EC2 / S3 basics · Docker / deployment exposure · currently learning DevOps']
  ];
  return (
    <section className="skills section-pad full-section">
      <SectionHead
        index="06"
        eyebrow="TECH STACK"
        title="WHAT I WORK WITH."
        copy="No percentage bars. Just the tools I actually use, plus the areas I’m deliberately learning next."
      />
      <div className="skills-grid">
        {groups.map((g, i) => (
          <div className={`skill-card reveal ${i === 0 ? 'skill-featured' : ''}`} key={g[0]}>
            <span>0{i + 1}</span>
            <h3>{g[0]}</h3>
            <p>{g[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="dark-section achievements section-pad full-section">
      <SectionHead
        index="07"
        eyebrow="OTHER RESULTS"
        title="BEYOND THE HACKATHON."
        copy="Selected recognitions that belong outside the dedicated hackathon trail."
      />
      <div className="achievement-grid">
        {achievements.map((a, i) => (
          <div className="achievement reveal" key={a[0]}>
            <span className="achievement-no">0{i + 1}</span>
            <h3>{a[0]}</h3>
            <p>{a[1]}</p>
            <time>{a[2]}</time>
          </div>
        ))}
      </div>
    </section>
  );
}

function Arena() {
  return (
    <section className="arena section-pad full-section">
      <SectionHead
        index="08"
        eyebrow="IN THE ARENA"
        title="THE OTHER SIDE OF THE SCREEN."
        copy="Kho-Kho, teams, tournaments and the moments where competition became a habit. Leadership and speaking are kept separate in the next section."
      />
      <div className="masonry">
        {arenaGallery.map(([src, cap], i) => (
          <figure className={`gallery-item g${i + 1} reveal`} key={src}>
            <img src={src} alt={cap} />
            <figcaption>
              <span>{cap}</span>
              <i>↗</i>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Certifications({ onOpen }) {
  return (
    <section className="certifications section-pad full-section">
      <SectionHead
        index="09"
        eyebrow="LEARNING BEYOND THE BUILD"
        title="CERTIFICATES, NOT A COLLECTION."
        copy="Credentials I used to explore data, cloud, AI, security and development beyond whatever I was building at the time."
      />
      <div className="cert-featured">
        {certificates.slice(0, 4).map(c => (
          <button className="cert-card reveal" key={c.title} onClick={() => onOpen(c)}>
            <div className="cert-image"><img src={c.image} alt={c.title} /></div>
            <div className="cert-meta">
              <span>{c.tag}</span>
              <b>{c.title}</b>
              <small>{c.issuer} · {c.year}</small>
            </div>
          </button>
        ))}
      </div>
      <div className="cert-strip">
        {certificates.slice(4).map(c => (
          <button key={c.title} onClick={() => onOpen(c)}>
            {c.title}<span>{c.year} ↗</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function BeyondCode() {
  return (
    <section className="dark-section beyond section-pad full-section" id="leadership">
      <SectionHead
        index="10"
        eyebrow="LEADERSHIP & SPEAKING"
        title={<>LEAD.<br /><em>SPEAK.</em><br />TAKE RESPONSIBILITY.</>}
        copy="This is the people side of the story — school leadership, debates, representation and student-facing responsibilities. No hackathon results here."
      />
      <div className="lead-grid">
        <div className="lead-copy reveal">
          <div className="big-word">LEAD</div>
          <p><strong>Head Boy</strong> for one year — nominated by teachers and voted by students. Debates, house representation, BIS representation, sports coordination and student-facing responsibilities shaped the way I work with people.</p>
          <div className="micro-list">
            <span>HEAD BOY</span>
            <span>DEBATES</span>
            <span>HOUSE REPRESENTATIVE</span>
            <span>BIS REPRESENTATIVE</span>
            <span>RUSSIAN CLUB</span>
            <span>SPORTS COORDINATION</span>
          </div>
        </div>
        <div className="lead-photo-grid reveal delay-1">
          <figure>
            <img src="/images/school-speak.jpg" alt="School speaking" />
            <figcaption>DEBATES · SPEAKING</figcaption>
          </figure>
          <figure>
            <img src="/images/school-group.jpg" alt="School group" />
            <figcaption>SCHOOL · COMMUNITY</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section-pad full-section" id="contact">
      <div className="contact-kicker reveal">11 / CONTACT</div>
      <div className="contact-title reveal delay-1">LET'S BUILD<br /><em>SOMETHING.</em></div>
      <div className="contact-bottom reveal delay-2">
        <p>For software engineering opportunities, interesting projects, or conversations around AI and building products.</p>
        <div className="contact-links">
          <a href="mailto:sansh8690@gmail.com">EMAIL ↗</a>
          <a href="https://www.linkedin.com/in/ansh-singh-rathore-125829304" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
          <a href="https://github.com/AnshSinghRathoree" target="_blank" rel="noreferrer">GITHUB ↗</a>
          <a href="https://leetcode.com/u/Anshrathoreeeee/" target="_blank" rel="noreferrer">LEETCODE ↗</a>
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal project-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>CLOSE ×</button>
        <img src={project.image} alt={project.title} />
        <div className="modal-body">
          <p className="eyebrow">
            {project.kicker} · {project.year} {project.status ? `· ${project.status}` : ''}
          </p>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <ul>{project.bullets.map(b => <li key={b}>{b}</li>)}</ul>
          <a className="btn btn-dark" href={project.url} target="_blank" rel="noreferrer">LIVE / REPO ↗</a>
        </div>
      </div>
    </div>
  );
}

function HackathonModal({ item, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal hack-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>CLOSE ×</button>
        {item.cert && <img src={item.cert} alt={`${item.title} certificate`} />}
        <div className="modal-body">
          <p className="eyebrow">{item.type} · {item.year}</p>
          <h2>{item.title}</h2>
          <h4>{item.result}</h4>
          <p>{item.intro}</p>
          <p>{item.detail}</p>
        </div>
      </div>
    </div>
  );
}

function CertModal({ cert, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal cert-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>CLOSE ×</button>
        <img src={cert.image} alt={cert.title} />
        <div className="modal-body">
          <p className="eyebrow">{cert.tag}</p>
          <h2>{cert.title}</h2>
          <p>{cert.issuer} · {cert.year}</p>
        </div>
      </div>
    </div>
  );
}

function CommandPalette({ jump, close }) {
  const items = useMemo(() => [
    ['work', 'Selected Work'],
    ['hackathons', 'Hackathons & Competitions'],
    ['experience', 'Experience'],
    ['about', 'About'],
    ['leadership', 'Leadership & Speaking'],
    ['contact', 'Contact']
  ], []);
  return (
    <div className="palette-backdrop" onClick={close}>
      <div className="palette" onClick={e => e.stopPropagation()}>
        <div className="palette-top"><span>JUMP TO</span><kbd>ESC</kbd></div>
        {items.map(([id, l]) => (
          <button key={id} onClick={() => jump(id)}>{l}<span>↗</span></button>
        ))}
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);