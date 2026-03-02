"use client";

import Link from "next/link";

const languages = ["Urdu", "English", "Arabic", "Sindhi", "Punjabi"];

const subjects = ["Mathematics", "Biology", "Physics", "Chemistry", "Computer Science", "English"];

const features = [
  {
    icon: "/assets/img/svgicon/sitemap.svg",
    title: "AI Tutoring",
    description: "24/7 personalized AI support to explain complex concepts in simple terms.",
    color: "#eef6ff",
  },
  {
    icon: "/assets/img/svgicon/book2.svg",
    title: "Practice Tests",
    description: "Get ready with mock exams simulations with detailed answer explanations.",
    color: "#fef0f0",
  },
  {
    icon: "/assets/img/svgicon/home.svg",
    title: "School Management",
    description: "Tools for schools to manage student performance and digital curriculum.",
    color: "#eef9f0",
  },
  {
    icon: "/assets/img/svgicon/award.svg",
    title: "Progress Analytics",
    description: "Real-time tracking of strengths and areas that need improvement.",
    color: "#fff8ee",
  },
];

const recommendedVideos = [
  { title: "Space Explorers: The Red Planet Adventure", category: "Story Kids Digital", views: "456K views", color: "#e74c3c" },
  { title: "Under the Sea: Meet the Giant Blue Whale", category: "Nature Series", views: "1.2M views", color: "#2980b9" },
  { title: "Forest Friends: A Day in the Wild Jungle", category: "Story Time", views: "890K views", color: "#27ae60" },
  { title: "Math Magic: Numbers are Everywhere!", category: "Learning Lab", views: "1.5M views", color: "#f39c12" },
  { title: "Little Scientists: DIY Volcano at Home", category: "Science Lab", views: "2.3M views", color: "#8e44ad" },
];

export default function DigitalInitiativesContent() {
  return (
    <>
      {/* ===== AlifLaila Section ===== */}
      <section className="di-aliflaila">
        <div className="container">
          <div className="text-center" >
            <span className="di-label di-label--red">PAKISTAN&apos;S 1ST KIDS DIGITAL LIBRARY</span>
            <h2 className="di-aliflaila__title">
              AlifLaila <span>Kids Digital Library</span>
            </h2>
          </div>

          {/* Language Tabs */}
          <div className="di-lang-tabs" >
            {languages.map((lang, index) => (
              <button
                key={index}
                className={`di-lang-tab ${index === 1 ? "di-lang-tab--active" : ""}`}
              >
                <span className="di-lang-dot"></span> {lang}
              </button>
            ))}
          </div>

          {/* Content Row */}
          <div className="row align-items-center di-aliflaila__content">
            <div className="col-lg-6 col-md-6">
              <div className="di-aliflaila__img-wrap">
                <div className="di-aliflaila__placeholder">
                  <div className="di-aliflaila__placeholder-inner">
                    <img src="/assets/img/svgicon/book1.svg" alt="" className="di-placeholder-icon" />
                    <div className="di-aliflaila__placeholder-kids">
                      <div className="di-kid di-kid--1"></div>
                      <div className="di-kid di-kid--2"></div>
                    </div>
                    <p>Interactive Reading Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6" >
              <div className="di-aliflaila__info">
                <div className="di-aliflaila__stats">
                  <div className="di-aliflaila__logo-placeholder">
                    <img src="/assets/img/svgicon/book1.svg" alt="" />
                    <span>AlifLaila</span>
                  </div>
                  <div className="di-aliflaila__stat">
                    <h3>2,000+</h3>
                    <span>BOOKS</span>
                  </div>
                </div>
                <p>
                  Unlock a universe of knowledge and adventure. Our premium digital library
                  provides high-quality, interactive reading experiences designed specifically
                  for young Pakistani minds.
                </p>
                <ul className="di-check-list">
                  <li><i className="fa fa-check-circle"></i> Web, Tablets &amp; Mobile Access</li>
                  <li><i className="fa fa-check-circle"></i> Curated for ages 3 to 14</li>
                </ul>
                <Link href="/resources" className="di-btn di-btn--primary">
                  EXPLORE THE LIBRARY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Ehya Classmate Section ===== */}
      <section className="di-classmate">
        <div className="container">
          <div className="text-center" >
            <div className="di-classmate__icon-wrap">
              <img src="/assets/img/svgicon/award.svg" alt="" className="di-classmate__award" />
            </div>
            <span className="di-label di-label--gold">EMPOWERING MATRIC STUDENTS</span>
            <h2 className="di-classmate__title">
              Master Your Exams With<br />
              <span>Ehya Classmate</span>
            </h2>
            <p className="di-classmate__desc">
              The AI-powered companion for matriculation students to excel in
              exams and for schools to manage classrooms effortlessly.
            </p>
            <Link href="/resources" className="di-btn di-btn--primary">
              GET STARTED
            </Link>
          </div>

          {/* Subject Tags */}
          <div className="di-subject-tags" >
            {subjects.map((subject, index) => (
              <span key={index} className="di-subject-tag">
                <i className="fa fa-star"></i> {subject}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Phone Mockups Section ===== */}
      <section className="di-mockups">
        <div className="container">
          <div className="di-mockups__wrap" >
            <div className="di-mockups__phones">
              {/* Phone 1 - AI Tutor */}
              <div className="di-mockup-phone di-mockup-phone--left">
                <div className="di-mockup-phone__notch"></div>
                <div className="di-mockup-phone__screen">
                  <div className="di-mockup-phone__header">
                    <div className="di-mockup-phone__header-dot"></div>
                    <span className="di-mockup-phone__label">AI Tutor Assistant</span>
                  </div>
                  <div className="di-mockup-phone__body">
                    <div className="di-chat-bubble di-chat-bubble--bot">
                      <p>Hi! I&apos;m your AI tutor. How can I help you today?</p>
                    </div>
                    <div className="di-chat-bubble di-chat-bubble--user">
                      <p>Explain photosynthesis</p>
                    </div>
                    <div className="di-chat-bubble di-chat-bubble--bot">
                      <p>Photosynthesis is the process by which plants convert sunlight into energy using chlorophyll...</p>
                    </div>
                    <div className="di-chat-input">
                      <span>Type a message...</span>
                      <i className="fa fa-paper-plane"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - Dashboard */}
              <div className="di-mockup-phone di-mockup-phone--right">
                <div className="di-mockup-phone__notch"></div>
                <div className="di-mockup-phone__screen">
                  <div className="di-mockup-phone__header di-mockup-phone__header--dark">
                    <span className="di-mockup-phone__small-label">DASHBOARD</span>
                    <span className="di-mockup-phone__label">Your Progress</span>
                  </div>
                  <div className="di-mockup-phone__body">
                    <div className="di-progress-item">
                      <div className="di-progress-item__top">
                        <span>Overall Progress</span>
                        <span className="di-progress-item__pct">70%</span>
                      </div>
                      <div className="di-progress-bar">
                        <div className="di-progress-bar__fill" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div className="di-stats-row">
                      <div className="di-stat-box di-stat-box--blue">
                        <span className="di-stat-box__num">85</span>
                        <span className="di-stat-box__label">Score</span>
                      </div>
                      <div className="di-stat-box di-stat-box--green">
                        <span className="di-stat-box__num">12</span>
                        <span className="di-stat-box__label">Tests</span>
                      </div>
                      <div className="di-stat-box di-stat-box--orange">
                        <span className="di-stat-box__num">4h</span>
                        <span className="di-stat-box__label">Study</span>
                      </div>
                    </div>
                    <div className="di-mini-chart">
                      <div className="di-mini-chart__bar" style={{ height: "40%" }}></div>
                      <div className="di-mini-chart__bar" style={{ height: "65%" }}></div>
                      <div className="di-mini-chart__bar" style={{ height: "50%" }}></div>
                      <div className="di-mini-chart__bar" style={{ height: "80%" }}></div>
                      <div className="di-mini-chart__bar" style={{ height: "60%" }}></div>
                      <div className="di-mini-chart__bar" style={{ height: "90%" }}></div>
                      <div className="di-mini-chart__bar" style={{ height: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Excellence Section ===== */}
      <section className="di-excellence">
        <div className="container">
          <div className="text-center" >
            <h2 className="di-excellence__title">Excellence in Every Subject</h2>
            <p className="di-excellence__desc">
              Master complex concepts with tools designed to help you succeed in your
              matriculation journey.
            </p>
          </div>
          <div className="row" >
            {features.map((feature, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                <div className="di-feature-card">
                  <div className="di-feature-card__icon" style={{ backgroundColor: feature.color }}>
                    <img src={feature.icon} alt={feature.title} className="di-feature-card__svg" />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Ehya Kids TV Section ===== */}
      <section className="di-kidstv">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="di-kidstv__info">
                <div className="di-kidstv__logo-wrap">
                  <img src="/assets/img/svgicon/book2.svg" alt="" className="di-kidstv__logo-icon" />
                  <span className="di-kidstv__logo-badge">KIDS</span>
                </div>
                <h2 className="di-kidstv__title">Ehya Kids TV</h2>
                <div className="di-kidstv__stats-row">
                  <span className="di-kidstv__stat-item"><strong>2000+</strong></span>
                  <span className="di-kidstv__stat-item"><i className="fa fa-eye"></i> <strong>5k+</strong> Views</span>
                  <span className="di-kidstv__stat-item"><i className="fa fa-play-circle"></i> <strong>100+</strong> Videos</span>
                </div>
                <p>
                  Safe, curriculum-aligned edutainment designed to spark
                  wonder in every child. From science experiments to
                  historical journeys, we turn screen time into learning
                  time.
                </p>
                <div className="di-kidstv__actions">
                  <Link href="/resources" className="di-btn di-btn--primary">
                    EXPLORE EPISODES
                  </Link>
                  <Link href="/resources" className="di-btn di-btn--outline">
                    <i className="fa fa-play-circle"></i> WATCH TRAILER
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6" >
              <div className="di-kidstv__featured">
                <div className="di-kidstv__featured-top">
                  <span className="di-kidstv__featured-label">TOP WATCH</span>
                  <span className="di-kidstv__featured-badge-top">Jungle Adventures</span>
                </div>
                <div className="di-kidstv__featured-card">
                  <div className="di-kidstv__featured-placeholder">
                    <i className="fa fa-play-circle"></i>
                    <span>Featured Video</span>
                  </div>
                </div>
                <div className="di-kidstv__featured-sub">
                  <span className="di-kidstv__featured-sub-label">TOP WATCH</span>
                  <span className="di-kidstv__featured-sub-title">Moral Stories</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Videos */}
          <div className="di-recommended" >
            <div className="di-recommended__header">
              <h4>Recommended for you</h4>
              <Link href="/resources" className="di-view-all">
                View All <i className="fa fa-arrow-right"></i>
              </Link>
            </div>
            <div className="di-recommended__grid">
              {recommendedVideos.map((video, index) => (
                <div className="di-recommended__card" key={index}>
                  <div className="di-recommended__thumb" style={{ background: `linear-gradient(135deg, ${video.color}, ${video.color}dd)` }}>
                    <div className="di-recommended__play">
                      <i className="fa fa-play"></i>
                    </div>
                  </div>
                  <div className="di-recommended__info">
                    <h5>{video.title}</h5>
                    <span>{video.category} &middot; {video.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
