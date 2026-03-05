"use client";

import Link from "next/link";

const languages = ["Urdu", "English", "Arabic", "Sindhi", "Punjabi"];

const subjects = [
  { subject: 'Mathematics', color: '#F97316' },
  { subject: 'Biology', color: '#0D9488' },
  { subject: 'Physics', color: '#10B981' },
  { subject: 'Chemistry', color: '#6366F1' },
  { subject: 'Computer Science', color: '#A855F7' },
  { subject: 'English', color: '#F97316' }
]

const features = [
  {
    icon: "/assets/img/svgicon/magic.png",
    title: "AI Tutoring",
    description: "24/7 personalized AI support to explain complex concepts in simple terms.",
    bgColor: "#0D94881A",
    color: "#0D9488",
  },
  {
    icon: "/assets/img/svgicon/tickline.png",
    title: "Practice Tests",
    description: "Get ready with mock exams simulations with detailed answer explanations.",
    bgColor: "#F973161A",
    color: "#F97316",
  },
  {
    icon: "/assets/img/svgicon/cap.png",
    title: "School Management",
    description: "Tools for schools to manage student performance and digital curriculum.",
    bgColor: "#DBEAFE80",
    color: "#DBEAFE",
  },
  {
    icon: "/assets/img/svgicon/progress.png",
    title: "Progress Analytics",
    description: "Real-time tracking of strengths and areas that need improvement.",
    bgColor: "#D1FAE580",
    color: "#D1FAE5",
  },
];

const recommendedVideos = [
  {imgUrl:'/assets/img/digital-initiatives/vid (1).png', title: "Space Explorers: The Red Planet Adventure", category: "Story Kids Digital", views: "456K views", color: "#e74c3c" },
  {imgUrl:'/assets/img/digital-initiatives/vid (2).png', title: "Under the Sea: Meet the Giant Blue Whale", category: "Nature Series", views: "1.2M views", color: "#2980b9" },
  {imgUrl:'/assets/img/digital-initiatives/vid (3).png', title: "Forest Friends: A Day in the Wild Jungle", category: "Story Time", views: "890K views", color: "#27ae60" },
  {imgUrl:'/assets/img/digital-initiatives/vid (4).png', title: "Math Magic: Numbers are Everywhere!", category: "Learning Lab", views: "1.5M views", color: "#f39c12" },
  {imgUrl:'/assets/img/digital-initiatives/vid (5).png', title: "Little Scientists: DIY Volcano at Home", category: "Science Lab", views: "2.3M views", color: "#8e44ad" },
];

export default function DigitalInitiativesContent() {
  return (
    <>
      {/* ===== AlifLaila Section ===== */}
      <section className="di-aliflaila">
        <div className="container">
          <div className="text-center" >
            <span className="main-label">
              <img src="/assets/img/svgicon/starts.svg" alt="starts" className="stars"/>
               PAKISTAN&apos;S 1ST KIDS DIGITAL LIBRARY</span>
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
          <div className="row  di-aliflaila__content">
            <div className="col-lg-8 col-md-6">
                <div className="di-aliflaila__placeholder">
                    <img src="/assets/img/digital-initiatives/digitalInitiatives1.png" alt="" className="di-placeholder-icon" />
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-4 mt-0" >
              <div className="di-aliflaila__info">
                <div className="di-aliflaila__stats">
                  <div className="di-aliflaila__logo-placeholder">
                    <img src="/assets/img/digital-initiatives/aliflaila-logo.png" alt="" />
                  </div>
                  <div className="di-aliflaila__stat">
                    <h3>2,000+</h3>
                    <span>Children&apos;s Books</span>
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
        <img src="/assets/img/Overlay+Blur.png" alt="Overlay Blur" className="di-aliflaila__overlay" />
      </section>

      {/* ===== Ehya Classmate Section ===== */}
      <section className="di-classmate">
        <div className="container">
          <div className="text-center" >
            <span className="main-label">
              <img src="/assets/img/svgicon/starts.svg" alt="starts" className="stars"/>
              EMPOWERING MATRIC STUDENTS</span>
            <div className="di-classmate__title-wrap">
            <img className="main-label-icon" src="/assets/img/digital-initiatives/classmate-logo.png" alt="starts" />
            <h2 className="di-classmate__title">
              Master Your Exams With<br />
              <span>Ehya Classmate</span>
            </h2>
            </div>
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
                <div className="dot" style={{ backgroundColor: subject.color }}></div> {subject.subject}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Phone Mockups Section ===== */}
      <section className="di-mockups">
        <img src="/assets/img/digital-initiatives/tabmobline.png" alt="Phone Mockups" />
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
                  <div className="di-feature-card__icon" style={{ backgroundColor: feature.bgColor }}>
                    <img src={feature.icon} alt={feature.title} />
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
                  <img src="/assets/img/digital-initiatives/tvlogo.jpg" alt="" className="di-kidstv__logo-icon" />
                </div>
                <h2 className="di-kidstv__title">Ehya Kids TV</h2>
                <div className="di-kidstv__stats-row">
                  <span className="di-kidstv__stat-item"><img src="/assets/img/svgicon/mans.svg" alt="Subscribers" /> 200K+ Subscribers</span>
                  <span className="di-kidstv__stat-item"><img src="/assets/img/svgicon/eye.svg" alt="Views" /> 1M+ Views</span>
                  <span className="di-kidstv__stat-item"><img src="/assets/img/svgicon/video.svg" alt="Videos" /> 150+ Videos</span>
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
                  <Link href="/resources" className="di-btn di-btn--secondary">
                    <i className="fa fa-play-circle"></i> WATCH TRAILER
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6" >
            <img src="/assets/img/digital-initiatives/videomain.png" alt="Ehya Kids TV"/>
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
                  <div className="di-recommended__thumb">
                 <img src={video.imgUrl} alt={video.title} className="di-recommended__thumb-img" />
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
