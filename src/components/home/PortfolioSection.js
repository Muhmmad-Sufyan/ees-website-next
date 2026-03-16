"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const portfolioItems = [
  {
    id: 1,
    iconSvg: "/assets/img/svgicon/book1.svg",
    iconColor: "#F59E0B",
    iconBg: "#F59E0B1A",
    title: "Ehya Publications",
    subtitle: "Redefining Educational Content",
    description:
      "We have developed textbooks according to the actual need of our society. Our publications aim to redefine and realign the meaning, purpose and methodology of education in Islamic paradigm.",
    bullets: [
      "Indigenous thought & values",
      "Modern world view integration",
      "Academic excellence focus",
    ],
    image: "/assets/img/pages/home/portfolio.png",
    cta: { label: "EXPLORE COLLECTION", link: "/products" },
    stats: [
      { value: "25+", label: "BOOKS" },
      { value: "100+", label: "SCHOOLS" },
      { value: "50k", label: "STUDENTS" },
    ],
  },
  {
    id: 2,
    iconSvg: "/assets/img/svgicon/sitemap.svg",
    iconColor: "#0D9488",
    iconBg: "#0D94881A",
    title: "Itisaal PK",
    subtitle: "Networking & Connectivity",
    description:
      "A peer-reviewed, open access, quarterly publication connecting academic researchers, educational philosophers, and institutional leaders through comparative pedagogy and traditional epistemologies.",
    bullets: [
      "Comparative pedagogy",
      "Traditional epistemologies",
      "Curriculum structuralism",
    ],
    image: "/assets/img/pages/home/portfolio.png",
    cta: { label: "LEARN MORE", link: "/research" },
    stats: [
      { value: "06", label: "VOLUMES" },
      { value: "50+", label: "ARTICLES" },
      { value: "100+", label: "AUTHORS" },
    ],
  },
  {
    id: 3,
    iconSvg: "/assets/img/svgicon/award.svg",
    iconColor: "#EA580C",
    iconBg: "#FFEDD5",
    title: "Teacher Training Program",
    subtitle: "Empowering Educators",
    description:
      "Converting educated persons into professional teachers with a focus on mentoring and role modeling capabilities. Our program bridges the gap between academic theory and classroom excellence.",
    bullets: [
      "Professional development",
      "Mentoring & role modeling",
      "Classroom excellence",
    ],
    image: "/assets/img/pages/home/portfolio.png",
    cta: { label: "VIEW PROGRAM", link: "/services" },
    stats: [
      { value: "500+", label: "TEACHERS" },
      { value: "50+", label: "WORKSHOPS" },
      { value: "30+", label: "SCHOOLS" },
    ],
  },
  {
    id: 4,
    iconSvg: "/assets/img/svgicon/home.svg",
    iconColor: "#2563EB",
    iconBg: "#DBEAFE",
    title: "Home Study Initiative",
    subtitle: "Flexible Learning Environments",
    description:
      "Supporting homeschooling families with curriculum selection, parent capacity building, systematic assessment, and consistency assurance for effective home-based education.",
    bullets: [
      "Curriculum selection",
      "Parent capacity building",
      "Systematic assessment",
    ],
    image: "/assets/img/pages/home/portfolio.png",
    cta: { label: "GET STARTED", link: "/services" },
    stats: [
      { value: "200+", label: "FAMILIES" },
      { value: "15+", label: "COURSES" },
      { value: "95%", label: "SATISFACTION" },
    ],
  },
  {
    id: 5,
    iconSvg: "/assets/img/svgicon/book2.svg",
    iconColor: "#9333EA",
    iconBg: "#F3E8FF",
    title: "Curriculum Design",
    subtitle: "Islamic Paradigm Integration",
    description:
      "A comprehensive curriculum based on Islamic worldview that encourages student exploration, connects tradition with modern knowledge, and develops aesthetics and critical thinking.",
    bullets: [
      "Islamic worldview based",
      "Critical thinking focus",
      "Holistic development",
    ],
    image: "/assets/img/pages/home/portfolio.png",
    cta: { label: "EXPLORE CURRICULUM", link: "/services" },
    stats: [
      { value: "12+", label: "SUBJECTS" },
      { value: "K-12", label: "GRADES" },
      { value: "100+", label: "LESSONS" },
    ],
  },
];

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
const listRef = useRef(null);

const activeItem = portfolioItems[activeIndex];

const handlePrev = () => {
  setActiveIndex((prev) =>
    prev === 0 ? portfolioItems.length - 1 : prev - 1
  );
};

const handleNext = () => {
  setActiveIndex((prev) =>
    prev === portfolioItems.length - 1 ? 0 : prev + 1
  );
};

// ✅ Auto Slide
useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prev) =>
      prev === portfolioItems.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(interval);
}, [portfolioItems.length]);

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <span className="portfolio-label">OUR PORTFOLIO</span>
          <h2 className="portfolio-title">
            RETHINK, REFINE, <span>REVIVE</span>
          </h2>
        </div>

        <div className="portfolio-wrapper">
          {/* Left Side - Tab Navigation */}
          <div className="portfolio-tabs">
            <div className="portfolio-tab-list" ref={listRef}>
              {portfolioItems.map((item, index) => (
                <button
                  key={item.id}
                  className={`portfolio-tab-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div
                    className="portfolio-tab-icon"
                    style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                  >
                    {item.iconSvg ? (
                      <img src={item.iconSvg} alt={item.title} style={{ width: "24px", height: "24px" }} />
                    ) : (
                      <i className={`fa ${item.icon} `} ></i>
                    )}
                  </div>
                  <div className="portfolio-tab-text">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="portfolio-tab-arrows">
              <button className="arrow-btn" onClick={handlePrev} aria-label="Previous">
                <i className="fa fa-angle-up"></i>
              </button>
              <button className="arrow-btn" onClick={handleNext} aria-label="Next">
                <i className="fa fa-angle-down"></i>
              </button>
            </div>
          </div>

          {/* Right Side - Content Display */}
          <div className="portfolio-content">
            <div className="portfolio-content-inner">
              <div className="portfolio-content-text">
                <h3>{activeItem.title}</h3>
                <p>{activeItem.description}</p>
                <ul className="portfolio-bullets">
                  {activeItem.bullets.map((bullet, i) => (
                    <li key={i}>
                      <i className="fa fa-check-circle"></i>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a href={activeItem.cta.link} className="portfolio-cta-btn">
                  {activeItem.cta.label}
                </a>
              </div>
              <div className="portfolio-content-image">
                <Image
                  width={500}
                  height={300}
                  src={activeItem.image}
                  alt={activeItem.title}
                />
              </div>
            </div>
            <div className="portfolio-stats">
              {activeItem.stats.map((stat, i) => (
                <div className="portfolio-stat" key={i}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
