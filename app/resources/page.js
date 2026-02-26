"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import "@/styles/resources.css";

const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

export default function Resources() {
  return (
    <>
      <WaterWave className="resources-ripple">
        {(methods) => (
          <div className="page-title resources-image ripple-effect">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <h1>Resources</h1>
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><i className="fa fa-angle-right"></i></li>
                        <li className="active">Resources</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </WaterWave>
      <section id="services" className="resources home-services-area services-area ptb-80">
        <div className="container">
          <div className="section-title" data-aos="fade-down" data-aos-duration="1000">
            <h2>Our <span>Resources</span></h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-services">
                <div className="services-img">
                  <img src="/assets/img/resources/icon-blog.png" alt="Blogs"/>
                </div>
                <div className="services-content">
                  <h3>Blogs</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-services mt-20 sec-ser">
                <div className="services-img">
                  <img src="/assets/img/resources/icon-article.png" alt="Articles"/>
                </div>
                <div className="services-content">
                  <h3>Articles</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-services">
                <div className="services-img">
                  <img src="/assets/img/resources/icon-guide.png" alt="Teacher's Guide"/>
                </div>
                <div className="services-content">
                  <h3>Teacher&#39;s Guide</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-services mt-20 sec-ser">
                <div className="services-img">
                  <img src="/assets/img/resources/icon-AudioVideo-Library.png" alt="Audio/Video Library"/>
                </div>
                <div className="services-content">
                  <h3>Audio/Video Library</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
