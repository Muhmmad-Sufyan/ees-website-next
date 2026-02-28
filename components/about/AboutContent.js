"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutContent() {
  return (
    <>
      <section className="founders-section ptb-80">
        <div className="container">
          <div className="founder-title text-center">
            <span className="founders-subtitle">VISIONARY LEADERSHIP</span>
            <h2>
              Founders <span className="spa">&amp; Leadership Message</span>
            </h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-5 col-md-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="founder-card">
                <div className="founder-header">
                  <div className="founder-avatar">
                    <Image
                      width={150}
                      height={150}
                      src="/assets/img/f2.jpg"
                      alt="Ahmed Hassan Chaudhary"
                    />
                  </div>
                  <div className="founder-info">
                    <h4>Ahmed Hassan Chaudhary</h4>
                    <span className="founder-role">CHIEF EXECUTIVE OFFICER</span>
                  </div>
                </div>
                <div className="founder-message">
                  <p>
                    &ldquo;Our mission is to ignite a lifelong passion for
                    learning by providing educators and students with the highest
                    quality literary resources. Together, we are bridging the gap
                    between potential and achievement.&rdquo;
                  </p>
                </div>
                <div className="founder-bio">
                  <p>
                    Dr. Thorne has dedicated over 20 years to educational reform
                    and literacy. Her vision guides EduPublish toward a future
                    where every student has the tools to succeed.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="founder-card">
                <div className="founder-header">
                  <div className="founder-avatar">
                    <Image
                      src="/assets/img/f1.jpg"
                      alt="Dr. Muhammad Awais Shaukat"
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="founder-info">
                    <h4>Dr. Muhammad Awais Shaukat</h4>
                    <span className="founder-role">DIRECTOR ACADEMICS</span>
                  </div>
                </div>
                <div className="founder-message">
                  <p>
                    &ldquo;Our mission is to ignite a lifelong passion for
                    learning by providing educators and students with the highest
                    quality literary resources. Together, we are bridging the gap
                    between potential and achievement.&rdquo;
                  </p>
                </div>
                <div className="founder-bio">
                  <p>
                    Dr. Thorne has dedicated over 20 years to educational reform
                    and literacy. Her vision guides EduPublish toward a future
                    where every student has the tools to succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta-section ptb-80">
        <div className="container">
          <div className="text-center">
            <h2 className="cta-heading">
              Shape the <span>Future</span> of Education With Us
            </h2>
            <p className="cta-text">
              Whether you are an educator, author, or partner, let&apos;s build
              something transformative together. Our doors are open to those who
              share our passion for knowledge.
            </p>
            <div className="cta-buttons">
              <Link href="/resources" className="btn btn-primary" style={{minWidth:'200px'}}>
                READ MORE
              </Link>
              <Link href="/contact" className="btn btn-black-outlined">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
