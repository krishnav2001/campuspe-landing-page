"use client";

import { useState } from "react";

const opportunities = [
    ["I", "IIM Bangalore", "MBA", "Bengaluru", "3L+", "Top College", "View Details"],
    ["G", "Product Intern", "Internship", "Bengaluru · Hybrid", "₹35K/mo", "Internship", "Apply Now"],
    ["N", "Marketing Gig", "Freelance", "Remote", "₹10K - ₹25K", "Freelance", "View Details"],
];
const collegeCards = [
    [
        "01",
        "VERIFIED PROFILE",
        "Build your college profile",
        "Showcase courses, fees, campus, placements and achievements in one structured profile.",
        "NAAC A++ Ready",
    ],
    [
        "02",
        "DIRECT ENROLL",
        "Students discover and connect",
        "Students explore courses and fees, then connect directly with your admission team.",
        "Direct Enquiries",
    ],
    [
        "03",
        "CAMPUS RECRUITING",
        "Recruiters discover your College",
        "Companies discover your talent and connect with your placement team.",
        "500+ Hiring Partners",
    ],
    [
        "04",
        "LIVE HUB",
        "Track placements in real time",
        "Track students, interviews and offers from one centralized dashboard.",
        "LIVE PLACEMENTS",
    ],
];
const hiringSteps = [
    [
        "01",
        "Post a role in minutes",
        "Reach the right students with your job, internship, gig or event.",
        "Easy posting",
    ],
    [
        "02",
        "Discover a matched shortlist",
        "Review candidates matched by skills, experience and goals.",
        "AI-powered matches",
    ],
    [
        "03",
        "Connect with candidates directly",
        "Message, schedule and move great candidates forward.",
        "All in one place",
    ],
    [
        "04",
        "Reduce your time-to-hire",
        "Track applications, interviews and offers from one dashboard.",
        "Live tracking",
    ],
];
const discoverySteps = [
    ["01", "Set your preferences", "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.", "Smart Phone"],
    ["02", "Discover relevant opportunities", "Explore colleges and career opportunities matched to your profile, interests and goals.", "AI Ranked"],
    ["03", "Get notified when something fits", "Get notified when a relevant college or new opportunity is found, so you can act early.", "Instant Alerts"],
];

function ButtonLink({ children, href, secondary = false }) {
    return (
        <a
            className={`button${secondary ? " button-secondary" : ""}`}
            href={href}
        >
            {children}
            <span aria-hidden="true">→</span>
        </a>
    );
}
function SectionLabel({ children }) {
    return (
        <span className="section-label">
            <i />
            {children}
        </span>
    );
}
function Header() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <header className="site-header">
            <a className="wordmark" href="#home" onClick={close} aria-label="CampusPe home">
                <span className="brand-symbol"><i />C</span>
                <span className="brand-lockup"><b>CampusPe<sup>®</sup></b><small>Connecting Students, Institutions &amp; Companies</small></span>
            </a>
            <button
                className="menu-toggle"
                type="button"
                aria-label={open ? "Close navigation" : "Open navigation"}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                <span />
                <span />
            </button>
            <nav
                className={`main-nav${open ? " is-open" : ""}`}
                aria-label="Main navigation"
            >
                <a href="#colleges" onClick={close}>
                    Colleges
                </a>
                <a href="#employers" onClick={close}>
                    Employers
                </a>
                <a href="#students" onClick={close}>
                    Jobs
                </a>
                <a href="#get-started" onClick={close}>
                    Blogs
                </a>
            </nav>
            <div className="header-actions">
                <a className="login-link" href="#get-started">
                    Sign In
                </a>
                <a className="button" href="#get-started">Sign Up</a>
            </div>
        </header>
    );
}
function OpportunityBoard() {
    return (
        <div
            className="opportunity-board"
            aria-label="Sample matched opportunities"
        >
            <div className="board-topline">
                <span className="feed-bolt">ϟ</span><span><b>CampusPe Opportunity Feed</b><small>Colleges &amp; opportunities matched to you</small></span>
                <span className="board-filter"><i /> 12 new matches today</span>
            </div>
            <div className="board-tabs">
                <span className="active-tab">All</span>
                <span>Colleges</span><span>Jobs</span><span>Internships</span><span>Freelance</span><span>Part-time</span>
            </div>
            <div className="board-list">
                {opportunities.map(([mark, role, category, place, pay, badge, action]) => (
                    <article className="opportunity-row" key={role}>
                        <span
                            className={`company-mark ${category.toLowerCase()}`}
                        >
                            {mark}
                        </span>
                        <div className="opportunity-copy">
                            <strong>{role} <em className={`feed-tag ${category.toLowerCase()}`}>{badge}</em></strong>
                            <span>{category === "MBA" ? "♧ MBA　⌖ Bengaluru" : `⌖ ${place}`}　{pay}</span>
                            <small>{category === "MBA" ? "India's premier management institute with global exposure..." : category === "Internship" ? "Work on real products, learn from top engineers and build..." : "Create content and help with social media campaigns for..."}</small>
                        </div>
                        <a className="feed-action" href="#get-started">{action}</a>
                    </article>
                ))}
            </div>
            <a className="board-link" href="#students">
                View all matched opportunities <span>→</span><small>Curated for you · Updated daily</small>
            </a>
        </div>
    );
}
function StudentDiscoverySection() {
    return (
        <section className="discovery-section" id="students">
            <div className="discovery-copy">
                <SectionLabel>01 · OPPORTUNITY DISCOVERY</SectionLabel>
                <h2>Stop searching.<br /><span>Start getting matched.</span></h2>
                <p className="discovery-lede">Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.</p>
                <div className="discovery-steps">
                    {discoverySteps.map(([number, title, description, badge]) => (
                        <article className="discovery-step" key={number}>
                            <span className="discovery-number">{number}</span>
                            <div><h3>{title}</h3><p>{description}</p></div>
                            <span className="discovery-badge">{badge}</span>
                        </article>
                    ))}
                </div>
                <ButtonLink href="#resume">Explore opportunities</ButtonLink>
            </div>
            <div className="discovery-visual"><OpportunityBoard /></div>
            <p className="discovery-note">A mix of colleges, jobs,<br />internships and gigs — all in one place.</p>
        </section>
    );
}
function ResumeUpload() {
    const [fileName, setFileName] = useState("");
    return (
        <section className="resume-section" id="resume">
            <SectionLabel>
                TRY IT LIVE <span className="version-tag">v2.4 AI Engine</span>
            </SectionLabel>
            <h2>
                Upload your resume.
                <br />
                <span>Find jobs that fit.</span>
            </h2>
            <p className="center-copy">
                Upload once. CampusPe reads your skills, experience, and
                preferences —<br className="desktop-break" /> then finds
                relevant jobs across 1,000+ sources.
            </p>
            <label className="upload-card" htmlFor="resume-file">
                <input
                    id="resume-file"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(event) =>
                        setFileName(event.target.files?.[0]?.name || "")
                    }
                />
                <span className="upload-icon">↑</span>
                <strong>{fileName || "Upload your resume"}</strong>
                <small>
                    {fileName
                        ? "Your resume is ready to be matched"
                        : "PDF, DOC, or DOCX · Up to 10MB · We'll use it to understand your skills and experience."}
                </small>
                <span className="upload-button">
                    {fileName ? "Resume selected" : "Choose a file"} →
                </span>
                <span className="drop-hint">
                    or drag and drop your file here
                </span>
                <span className="file-types">
                    <i>PDF</i>
                    <i>DOC</i>
                    <i>DOCX</i>
                </span>
                <span className="ats-note">
                    <b>◈ &nbsp; ATS Compliant</b>
                    <small>Standardized parser</small>
                </span>
            </label>
            <div className="proof-row">
                {[
                    ["✓", "Resume analyzed", "Ready in 4s"],
                    ["✳", "Skills matched", "Deep taxonomy"],
                    ["↗", "Experience matched", "Contextual similarity"],
                    ["1k+", "sources searched", "Real-time aggregators"],
                ].map(([icon, title, sub]) => (
                    <div className="proof-item" key={title}>
                        <span>{icon}</span>
                        <b>
                            {title}
                            <small>{sub}</small>
                        </b>
                    </div>
                ))}
            </div>
        </section>
    );
}
function CollegesSection() {
    return (
        <section className="split-section college-section" id="colleges">
            <div className="section-intro">
                <SectionLabel>02 · FOR COLLEGES</SectionLabel>
                <h2>
                    Get discovered
                    <br />
                    by{" "}
                    <span>
                        Students and
                        <br />
                        Recruiters.
                    </span>
                </h2>
                <p>
                    Put your college in front of students searching for the
                    right course and recruiters looking for the right talent.
                    CampusPe helps you build your presence, attract enquiries
                    and connect with opportunities.
                </p>
                <ButtonLink href="#get-started">List Your College</ButtonLink>
            </div>
            <div className="info-card-stack">
                {collegeCards.map(([n, label, title, text, badge]) => (
                    <article className="info-card" key={n}>
                        <div className="info-card-main">
                            <span className="card-eyebrow">
                                <b>{n}</b> {label}
                            </span>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </div>
                        <span className="badge">{badge}</span>
                    </article>
                ))}
            </div>
        </section>
    );
}
function EmployersSection() {
    return (
        <section className="split-section employers-section" id="employers">
            <div className="section-intro">
                <SectionLabel>03 · FOR EMPLOYERS</SectionLabel>
                <h2>
                    Stop running
                    <br />
                    campus drives.
                    <br />
                    <span>Start hiring the right people.</span>
                </h2>
                <p>
                    Post a role to interns and recent graduates, meet the right
                    candidates faster, and reduce your time-to-hire. CampusPe
                    helps you discover, match and connect with talent from
                    colleges all around you.
                </p>
                <ButtonLink href="#get-started">Hire with CampusPe</ButtonLink>
            </div>
            <div className="hiring-list">
                {hiringSteps.map(([n, title, text, badge]) => (
                    <article className="hiring-card" key={n}>
                        <span className="hiring-number">{n}</span>
                        <div>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </div>
                        <span className="hiring-badge">{badge}</span>
                    </article>
                ))}
            </div>
        </section>
    );
}
function AppSection() {
    const [activeScreen, setActiveScreen] = useState(2);
    return (
        <section className="app-section" id="app">
            <div className="app-showcase-heading">
                <h2>Checkout Our App Interface Look</h2>
                <p>Experience the power of a unified campus ecosystem right in your pocket. <b>CampusPe</b> offers a tailored<br className="desktop-break" /> interface for every user: students can explore trending courses, colleges can showcase their campus life,<br className="desktop-break" /> and companies can post job vacancies directly to a pool of qualified candidates.</p>
            </div>
            <div className="app-carousel" aria-label="CampusPe app interface previews">
                {[
                    ["discover", "Discover", "Recommended Jobs"],
                    ["profile", "Post a Job", "Build your resume"],
                    ["college", "Discover", "Trending Colleges"],
                    ["applications", "My Application", "Applied · Interview"],
                    ["courses", "Discover", "Courses"],
                ].map(([screen, title, subtitle], index) => (
                    <div className={`app-device device-${index + 1}${index === activeScreen ? " is-active" : ""}`} key={screen} aria-hidden="true">
                        <div className="device-status"><span>9:41</span><i /></div>
                        <div className="device-content">
                            <div className="device-brand">Hi, Amit Kumar <span>♧　●</span></div>
                            <b>{title}</b><small>{subtitle}</small>
                            <div className="device-tabs"><i /><i /><i /></div>
                            {screen === "profile" ? <div className="device-form">{[1, 2, 3, 4, 5].map(item => <i key={item} />)}</div> : <>
                                <div className="device-banner"><b>{screen === "college" ? "Top Colleges" : "Find your next opportunity"}</b><small>Explore more on CampusPe</small></div>
                                <b className="device-subhead">{screen === "applications" ? "Your applications" : screen === "courses" ? "Popular courses" : "Trending Colleges"}</b>
                                {[1, 2, 3].map(item => <div className="device-listing" key={item}><i /><span><b>{screen === "applications" ? "Software Engineer" : screen === "courses" ? "B.Tech Course" : "Victory College"}</b><small>✦ Top rated · Apply now</small></span></div>)}
                            </>}
                        </div>
                        <div className="device-home" />
                    </div>
                ))}
            </div>
            <div className="carousel-dots" role="tablist" aria-label="Choose app screen preview">
                {[0, 1, 2, 3, 4].map(index => <button key={index} type="button" role="tab" aria-label={`Show app screen ${index + 1}`} aria-selected={activeScreen === index} className={activeScreen === index ? "active" : ""} onClick={() => setActiveScreen(index)} />)}
            </div>
            <div className="app-download">
                <div className="app-download-copy">
                    <h3>Download App Now</h3>
                    <p>Elevate your academic journey with Campuspe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you&apos;re a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, Campuspe streamlines the connection. Your career doesn&apos;t start at graduation — it starts here.</p>
                    <div className="store-buttons">
                        <a className="store-button" href="https://play.google.com/store/search?q=CampusPe&c=apps" target="_blank" rel="noreferrer"><span>▶</span><small>GET IT ON<strong>Google Play</strong></small></a>
                        <a className="store-button" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer"><span>●</span><small>Download on the<strong>App Store</strong></small></a>
                    </div>
                </div>
                <div className="download-devices" aria-label="CampusPe app shown on two phones"><div className="download-phone download-phone-back"><div className="download-screen"><b>Hi, Amit Kumar</b><div className="download-card" /><i /><i /><i /></div></div><div className="download-phone download-phone-front"><div className="download-screen"><b>CampusPe　●</b><div className="download-card" /><strong>Trending Colleges</strong><i /><i /><i /></div></div></div>
            </div>
        </section>
    );
}
function Footer() {
    return (
        <footer className="site-footer" id="get-started">
            <div className="support-panel">
                <h2>Still have questions?</h2>
                <p>Our support team is here to help you succeed. Get in<br className="desktop-break" /> touch anytime.</p>
                <div><a className="support-button" href="mailto:contactus@campuspe.com">Contact Support <span>↗</span></a><a className="support-button support-secondary" href="tel:+916362606464">Schedule a Call <span>◉</span></a></div>
            </div>
            <div className="footer-ready">
                <div><h2>Ready for what&apos;s next?</h2><p>Discover colleges, find opportunities, list your<br /> institution, or start hiring with CampusPe.</p></div>
                <nav aria-label="Quick actions"><a href="#colleges">Explore Colleges →</a><a href="#students">Find Opportunities →</a><a className="quick-outline" href="#colleges">List Your College →</a><a className="quick-outline" href="#employers">Post a Job →</a></nav>
            </div>
            <div className="footer-main">
                <div className="footer-about"><a className="wordmark" href="#home"><span className="brand-symbol"><i />C</span><span className="brand-lockup"><b>CampusPe<sup>®</sup></b><small>Connecting Students, Institutions &amp; Companies</small></span></a><p>From choosing a college to finding your next opportunity.</p><p>CampusPe connects students, colleges and employers in one place.</p></div>
                <div className="footer-column"><h3>For Students</h3><a href="#colleges">Explore Colleges</a><a href="#students">Find Opportunities</a><a href="#students">Internships</a><a href="#students">Full-time Jobs</a><a href="#students">Part-time &amp; Gig</a><a href="#resume">Application Tracker</a></div>
                <div className="footer-column"><h3>For Colleges</h3><a href="#colleges">List Your College</a><a href="#colleges">Admissions</a><a href="#colleges">Fee Collection</a><a href="#colleges">Placements</a></div>
                <div className="footer-column"><h3>For Employers</h3><a href="#employers">Post a Job</a><a href="#employers">Find Talent</a><a href="#employers">Campus Hiring</a></div>
                <div className="footer-column"><h3>Company</h3><a href="#home">About Us</a><a href="mailto:contactus@campuspe.com">Contact Us</a><a href="#home">Blogs</a><a href="#home">Careers</a></div>
                <div className="footer-column footer-legal"><h3>Legal &amp; Policies</h3><a href="#get-started">Privacy Policy</a><a href="#get-started">Terms &amp; Conditions</a><a href="#get-started">Refund &amp; Cancellation Policy</a><a href="#get-started">Cookie Policy</a><a href="#get-started">Grievance Redressal</a><a href="#get-started">Job &amp; Internship Disclaimer</a><a className="all-policies" href="#get-started">View all policies →</a><small>Separate user, institution and employer terms can live inside the full Policies page.</small></div>
            </div>
            <div className="footer-contact"><a href="mailto:contactus@campuspe.com">▣ &nbsp; contactus@campuspe.com</a><a href="tel:+916362606464">▣ &nbsp; +91 6362606464</a><span><i /> Students · Colleges · Employers</span></div>
            <div className="footer-bottom"><span>2026 CampusPe Technologies</span><nav aria-label="Social links"><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a><a href="https://www.instagram.com/" aria-label="Instagram">◎</a><a href="https://www.youtube.com/" aria-label="YouTube">▶</a></nav></div>
        </footer>
    );
}
export default function Home() {
    return (
        <main id="home">
            <Header />
            <section className="hero-section">
                <div className="hero-float hero-whatsapp"><b>◉ &nbsp; WhatsApp Alert</b><strong>Get notified on whatsapp</strong><small>You’ll get all important updates on your whatsapp</small></div>
                <div className="hero-float hero-assistant"><b>▣ &nbsp; AI-Powered Campus Assistant</b></div>
                <div className="hero-float hero-resume"><b>ϟ &nbsp; Resume Builder</b><strong>Build Your Resume</strong><small>Our resume builder gives you dynamic options to build better &amp; faster resume that get you hired</small></div>
                <div className="hero-float hero-students"><span>AK</span><span>PR</span><span>SN</span><b>✦ 142 students matched today</b><small>Just now · IIT, BITS, VIT</small></div>
                <div className="hero-float hero-radiant"><b>▣ &nbsp; Radiant Info</b><span>shortlisted 8 interns</span><small>● Verified recruiter · 2 days ago</small></div>
                <div className="hero-intro">
                    <SectionLabel>AI-POWERED CAMPUS ASSISTANT</SectionLabel>
                    <h1>
                        Connect <span>10X Faster.</span>
                    </h1>
                    <p>
                        One platform connecting students, colleges &amp; employers — faster.
                    </p>
                    <h2 className="hero-question"><span>✦</span> What are you looking for? <span>✦</span></h2>
                </div>
                <div className="hero-pillar-grid">
                    <a className="hero-pillar college-pillar" href="#get-started">
                        <span className="pillar-top"><b>♙</b><i>Coming Soon</i></span>
                        <h2>College</h2>
                        <p>Explore colleges, courses, fees,<br />placements &amp; more</p>
                        <ul><li>Search by course, location, fees</li><li>Connect directly with colleges</li><li>Improve student placements</li></ul>
                        <span className="pillar-cta">Join Waitlist ♧</span>
                    </a>
                    <a className="hero-pillar jobs-pillar" href="#resume">
                        <span className="pillar-top"><b>◆</b><i>Available Now</i></span>
                        <h2>I&apos;m Looking for a Job</h2>
                        <p>Upload your resume. We&apos;ll find jobs<br />that fit you.</p>
                        <ul><li>Jobs from 1000+ sources</li><li>AI powered matching</li><li>WhatsApp &amp; email alerts</li></ul>
                        <span className="resume-art"><i /><i /><i /><i /><b>⌕</b></span>
                        <span className="pillar-cta">Explore Jobs <span>→</span></span>
                    </a>
                    <a className="hero-pillar hiring-pillar" href="#get-started">
                        <span className="pillar-top"><b>▣</b><i>Coming Soon</i></span>
                        <h2>I&apos;m Hiring</h2>
                        <p>Connect with colleges and find<br />candidates — from students to graduates.</p>
                        <ul><li>Connect directly with colleges</li><li>Find the right candidates</li><li>Simplify your hiring</li></ul>
                        <span className="pillar-cta">Join Waitlist ♧</span>
                    </a>
                </div>
                <div className="hero-stats">
                    <div><span className="stat-icon violet">♧</span><b>800+<small>Students</small></b></div><i />
                    <div><span className="stat-icon blue">▦</span><b>130+<small>colleges</small></b></div><i />
                    <div><span className="stat-icon green">▢</span><b>100+<small>jobs &amp; internships</small></b></div><i />
                    <div><span className="stat-icon orange">◈</span><b>100%<small>Safe &amp; Trusted</small></b></div>
                </div>
            </section>
            <div className="trust-strip">
                <span>Trusted by partners across India</span>
                <div className="partner-logos"><b className="partner-ginserv">◉ GINSERV<small>Nurturing Ventures</small></b><b className="partner-talent">✣ TALENTSOF...<small>OPIFY</small></b><b className="partner-radiant">RADIANT <strong>◉</strong></b><b className="partner-gov">♛ &nbsp; #S</b></div>
            </div>
            <StudentDiscoverySection />
            <ResumeUpload />
            <CollegesSection />
            <EmployersSection />
            <AppSection />
            <Footer />
        </main>
    );
}
