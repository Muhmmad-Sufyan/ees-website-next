"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  return (
    <>
      <header className="header-sticky" id="header1">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container">
            <Link className="navbar-brand  logo-light" href="/">
              <img className="img-fluid" src="/assets/img/logo.png" alt="EES"/>
            </Link>
            <Link className="navbar-brand logo-dark" href="/">
              <img className="img-fluid " src="/assets/img/logo-dark.png" alt="EES"/>
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className={`nav-link ${pathname == '/' ? 'active' : ''}`} href="/">Home</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pathname == '/diagnosis' ? 'active' : ''}`} href="/diagnosis">Diagnosis</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pathname == '/ideology' ? 'active' : ''}`} href="/ideology">Ideology</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pathname == '/services' ? 'active' : ''}`} href="/services">Services</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pathname == '/products' ? 'active' : ''}`} href="/products">Products</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pathname == '/resources' ? 'active' : ''}`} href="/resources">Resources</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pathname == '/contact' ? 'active' : ''}`} href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
