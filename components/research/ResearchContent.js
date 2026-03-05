"use client";

import Link from "next/link";

export default function ResearchContent() {
  return (
    <>
      {/* ===== Ehya Publications Section ===== */}
      <section className="publications-section">
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <span className="research-subtitle">Project 01</span>
            <div className="project-title">
              <h2>EHYA PUBLICATIONS</h2>
            </div>
            <p className="publications-desc">
              Bridging the gap between theoretical research and practical
              educational application through two distinct publication
              categories.
            </p>
          </div>

          <div className="row">
            {/* Advanced Textbooks Card */}
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="publication-card">
                <div
                  className="publication-card-img"
                >
                  <div className="pub-icon">
                    <img src="/assets/img/research/cap.svg" style={{width:"27px",height:'22px'}} alt="book" />
                  </div>
                  <img
                    src="/assets/img/research/project1.png"
                    alt="Advanced Textbooks"
                    
                    style={{borderRadius:'22px'}}
                  />
                </div>
                <div className="publication-card-body">
                  <span className="pub-series">Scholarly Series</span>
                  <h3>Advanced Textbooks</h3>
                  <p>
                    Peer-reviewed academic materials designed for higher
                    education &amp; professional teacher training. Our textbooks
                    focus on structural inquiry and curriculum alignment with
                    professional typography.
                  </p>
                  <ul className="pub-features">
                    <li>
                     <img src="/assets/img/research/detail.svg" alt="Check" 
                       style={{width:"15px",height:'13px'}}/> Rigorous Academic
                      Frameworks
                    </li>
                    <li>
                      <img src="/assets/img/research/campus.svg" alt="Check" 
                       style={{width:"8px",height:'13px'}}/> Structural Knowledge
                      Design
                    </li>
                  </ul>
                  <Link href="/products" className="pub-btn">
                    BROWSE TEXTBOOKS
                  </Link>
                </div>
              </div>
            </div>

            {/* Children's Literature Card */}
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="publication-card">
                <div
                  className="publication-card-img"
                >
                  <div className="pub-icon" style={{ background: "#fca20b" }}>
                    <img
                      src="/assets/img/research/book.svg"
                      alt="Children's book"
                       style={{width:"27px",height:'22px'}}
                    />
                  </div>
                  <img
                    src="/assets/img/research/project2.png"
                    alt="Children's Literature"
                    style={{borderRadius:'22px'}}
                  />
                </div>
                <div className="publication-card-body">
                  <span className="pub-series">Vibrant Series</span>
                  <h3>Inspiring Children&apos;s Literature</h3>
                  <p>
                    Engaging, illustrated narratives that nurture character
                    building and intellectual curiosity. Playful yet
                    professional designs that make traditional wisdom accessible
                    to the next generation.
                  </p>
                  <ul className="pub-features">
                    <li>
                      <img src="/assets/img/svgicon/starts.svg" alt="Check" 
                       style={{width:"16px",height:'16px'}}/>Nurturing Moral
                      Imagination
                    </li>
                    <li>
                      <img src="/assets/img/research/sun.svg" alt="Check" 
                       style={{width:"16px",height:'16px'}}/> Value-Driven Storytelling
                    </li>
                  </ul>
                  <Link href="/products"  className="pub-btn">
                    VIEW CHILDREN&apos;S BOOKS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Itessal Journal Section ===== */}
      <section className="journal-section">
        <div className="container">
          <div
            className="journal-preview"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="row align-items-center">
              <img
                src="/assets/img/research/certif.png"
                className="col-lg-6 col-md-7"
                alt="itesal image"
              />
              <div className="col-lg-6 col-md-5">
                <div className="journal-info">
                  <span className="research-subtitle">
                    Project 02: Itessal Journal
                  </span>
                  <h3>Of Disconnecting Discourses</h3>
                  <p>
                    The Itessal Journal serves as a premier platform for
                    critical educational theory. It explores the intersections
                    between traditional wisdom and modern pedagogy.
                  </p>
                  <div className="journal-badges">
                    <span className="journal-badge">
                      <img
                        src="/assets/img/svgicon/verify.svg"
                        alt="Peer-Reviewed"
                      />{" "}
                      Peer-Reviewed
                    </span>
                    <span className="journal-badge">
                      <img
                        src="/assets/img/svgicon/lock.svg"
                        alt="Open Access"
                      />{" "}
                      Open Access
                    </span>
                    <span className="journal-badge">
                      <img
                        src="/assets/img/svgicon/calendar.svg"
                        alt="Quarterly"
                      />{" "}
                      Quarterly
                    </span>
                  </div>
                  <Link href="/resources" className="pub-btn">
                    EXPLORE ARCHIVES
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Journal Details Section ===== */}
      <section className="journal-details-section">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-duration="800">
            <div className="col-lg-4 col-md-4">
              <div className="journal-detail-card">
                <h5>Our Vision</h5>
                <p>
                  To provide a scholarly sanctuary for discourses that challenge
                  conventional educational boundaries and propose transformative
                  insights.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="journal-detail-card">
                <h5>Key Themes</h5>
                <ul>
                  <li>Comparative Pedagogy</li>
                  <li>Traditional Epistemologies</li>
                  <li>Curriculum Structuralism</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="journal-detail-card">
                <h5>Audience</h5>
                <p>
                  Academic researchers, educational philosophers, and
                  institutional leaders committed to deep structural inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Empowering Institutions Section ===== */}
      <section className="empowering-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="empowering-content">
                <span className="research-subtitle">
                  Project 03: Ehyaa Services
                </span>
                <h3>Empowering Institutions</h3>
                <p>
                  Ehya provides comprehensive support to educational
                  institutions through specialized guides and customized
                  training sessions. We partner with school leaders to foster
                  holistic academic environments.
                </p>
                <div className="empowering-features">
                  <div className="empowering-feature">
                    <div className="empowering-feature-icon">
                      <img src="/assets/img/svgicon/book-re.svg" alt="book" />
                    </div>
                    <span>Teacher Guides</span>
                  </div>
                  <div className="empowering-feature">
                    <div className="empowering-feature-icon">
                      <img
                        src="/assets/img/svgicon/recover.svg"
                        alt="In-School Trainings"
                      />
                    </div>
                    <span>
                      In-School
                      <br />
                      Trainings
                    </span>
                  </div>
                </div>
                <Link href="/contact" className="pub-btn">
                  PARTNER WITH US
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="empowering-img">
                <img
                  src="/assets/img/research/research-sec.png"
                  alt="Empowering Institutions"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Professional Learning Section ===== */}
      <section className="professional-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 col-md-5"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="empowering-img">
                <img
                  src="/assets/img/research/lang.png"
                  alt="Professional Learning"
                />
              </div>
            </div>
            <div
              className="col-lg-7 col-md-7"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="professional-content">
                <span className="research-subtitle">
                  Project 04: Itessal PL
                </span>
                <h3>Professional Learning &amp; Teacher Development</h3>
                <p>
                  Itessal PL empowers educators through research-based training.
                  We bridge training. We bridge the gap between academic theory
                  and classroom excellence. Itessal PL empowers educators
                  through research-based training. We bridge the gap between
                  academic theory and classroom excellence.
                </p>
                <div className="professional-icons">
                  <div className="professional-icon-item">
                    <div className="professional-icon-circle">
                      <img
                        src="/assets/img/svgicon/comunity.svg"
                        style={{ width: "24px" }}
                        alt="Mans Groups"
                      />
                    </div>
                    <span>Workshops</span>
                  </div>
                  <div className="professional-icon-item">
                    <div className="professional-icon-circle">
                      <img
                        src="/assets/img/svgicon/certifcation.svg"
                        alt="Certifications"
                      />
                    </div>
                    <span>Certifications</span>
                  </div>
                  <div className="professional-icon-item">
                    <div className="professional-icon-circle">
                      <img
                        src="/assets/img/svgicon/mans-groups.svg"
                        style={{ width: "24px" }}
                        alt="Community"
                      />
                    </div>
                    <span>Community</span>
                  </div>
                </div>
                <Link href="/contact" className="pub-btn">
                  JOIN PL PROGRAMS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
