"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import "@/styles/contact.css";

const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

export default function Contact() {
  return (
    <>
      <WaterWave className="contact-ripple">
        {(methods) => (
          <div className="page-title contact-image ripple-effect jquery-ripples">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <h1>Contact</h1>
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><i className="fa fa-angle-right"></i></li>
                        <li className="active">Contact</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </WaterWave>

      <section id="contact" className="contact-area ptb-80 bg-f6f6f6">
        <div className="container">
          <div className="section-title">
            <h4>Get in Touch</h4>
            <h2>Contact<span> Us</span></h2>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108950.1229980908!2d74.1793420042038!3d31.42262905445019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919039cf37437b5%3A0xd861e6fa11574794!2sEhya%20Education%20Services!5e0!3m2!1sen!2s!4v1646648869315!5m2!1sen!2s"
                  width="600" height="482" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
              </div>

              <div className="contact-info">
                <ul>
                  <li><i className="fa fa-map-marker"></i> 101 N, Block N Model Town, Lahore, Punjab</li>
                  <li><i className="fa fa-envelope"></i> <a href="#"><span className="__cf_email__">info@ehya.com.pk</span></a></li>
                  <li><i className="fa fa-phone"></i> <a href="#">+92 423 5164921-22</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
