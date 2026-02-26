"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const collapseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header-sticky");
      if (!header) return;
      if (window.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("is-sticky");
      } else {
        header.classList.remove("is-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    const collapse = collapseRef.current;
    if (collapse && collapse.classList.contains("show")) {
      const bsCollapse = window.bootstrap?.Collapse.getInstance(collapse);
      if (bsCollapse) {
        bsCollapse.hide();
      } else {
        collapse.classList.remove("show");
      }
    }
  };

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

            <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={collapseRef}>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className={`nav-link ${pathname == '/' ? 'active' : ''}`} href="/" onClick={handleNavLinkClick}>Home</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pathname == '/diagnosis' ? 'active' : ''}`} href="/diagnosis" onClick={handleNavLinkClick}>Diagnosis</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pathname == '/ideology' ? 'active' : ''}`} href="/ideology" onClick={handleNavLinkClick}>Ideology</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pathname == '/services' ? 'active' : ''}`} href="/services" onClick={handleNavLinkClick}>Services</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pathname == '/products' ? 'active' : ''}`} href="/products" onClick={handleNavLinkClick}>Products</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pathname == '/resources' ? 'active' : ''}`} href="/resources" onClick={handleNavLinkClick}>Resources</Link></li>
                <li className="nav-item"><Link className={`nav-link ${pathname == '/contact' ? 'active' : ''}`} href="/contact" onClick={handleNavLinkClick}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
