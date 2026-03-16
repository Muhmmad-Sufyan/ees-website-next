"use client";

import Link from "next/link";
import "@/styles/footer.css";

function Footer() {
  return (
    <>
      <div className="footerOuterDiv" id="footer1">
      <footer className="footer-area">
        <div className="container">
          <div className="row">

            <div className="col-lg-4 col-md-6  text-justify">
              <Link  href="/" className="footer-logo"><img className="img-fluid" src="/assets/img/footer-ogo.png"/></Link>

              <p>EHYA Education Services is established with the aim to serve the education sector in important
                arenas such as curriculum development, teachers training and school services.
                The ideology behind the initiation of this organization has been derived from the teachings of
                eminent Muslim thinkers and philosophers such as Dr. Allama Muhammad Iqbal, Dr. Muhammad Rafi ud Din,
                Hasan Askari, Saleem Ahmad and Ahmed Javed.
              </p>
            </div>
            <div className="col-lg-4 col-md-3">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/diagnosis">Diagnosis</Link></li>
                <li><Link href="/ideology">Ideology</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/resources">Resources</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-3">
              <h4>Contact Info</h4>
              <ul className="f-contact-info">
                <li>
                  <span>
                    <img className="img-fluid" src="/assets/img/location-icon.png"/>
                  </span>
                  101-N, Model Town Extension, Lahore, Pakistan
                </li>
                <li>
                  <span>
                    <img className="img-fluid" src="/assets/img/mail-icon.png"/>
                  </span>
                  info@ehya.com.pk
                </li>
                <li>
                  <span>
                    <img className="img-fluid" src="/assets/img/phone-icon.png"/>
                  </span>
                  +92 423 5164921
                </li>
                <li>+92 423 5164922</li>
              </ul>
              <br/>
              <h4>Announcements</h4>
              <ul className="f-contact-info">
                <li>
                  Expression of interest
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright-area">
            <div className="seprator"><img className="img-fluid" src="/assets/img/sep-icon.png"/></div>
            <ul className="f-socialmedia">
              <li>
                <a href="https://www.facebook.com/Ehya-Education-Services-107016442062375">
                  <img className="img-fluid" src="/assets/img/facebook.png"/>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ehyaedu">
                  <img className="img-fluid" src="/assets/img/twitter.png"/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ehyaedu">
                  <img className="img-fluid" src="/assets/img/instagram.png"/>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCeudFNeP-vMFkCtGUumC6zg">
                  <img className="img-fluid" src="/assets/img/youtube.png"/>
                </a>
              </li>
            </ul>
            <p>Copyright
              <i className="fa fa-copyright"></i>
              2022 All Rights Reserved.
            </p>
            <p>
              Designed with
              <span  className="heart-color"> &#10084; </span>
              by
              <b><a target="_blank" className="itinitial-color" href="https://itinitial.com"> ITINITIAL</a></b>
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default Footer;
