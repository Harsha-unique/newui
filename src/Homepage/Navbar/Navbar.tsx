
import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isMobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [isDesktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [isDesktopSolutionsOpen, setDesktopSolutionsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const servicesRef = useRef<HTMLLIElement>(null);
  const solutionsRef = useRef<HTMLLIElement>(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileSolutionsOpen(false);
    setDesktopServicesOpen(false);
    setDesktopSolutionsOpen(false);
  };

  const getLinkStyle = (label: string) => ({
    color: hoveredLink === label ? '#fd7e14' : '#198754',
    cursor: 'pointer',
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setDesktopServicesOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setDesktopSolutionsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1200) closeMenu();
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header d-flex align-items-center sticky-top bg-white py-3" style={{ zIndex: 1050 }}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a className="logo d-flex align-items-center" href="#" onClick={closeMenu}>
          <img src="./images/soarswell_logo.png" alt="Logo" />
        </a>

        <div className="d-xl-none d-flex align-items-center gap-3">
          <i
            className={`fs-3 bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}
            style={{ cursor: 'pointer', color: '#000' }}
            onClick={toggleMobileMenu}
          ></i>
        </div>

        {/* Desktop Menu */}
        <ul className="d-none d-xl-flex list-unstyled m-0 gap-4 align-items-center">
          {['Home', 'About'].map((label) => (
            <li key={label} >
              <a
                href={label === 'Home' ? '#' : `#${label.toLowerCase()}`}
                className="nav-link px-2"
                style={getLinkStyle(label)}
                onMouseEnter={() => setHoveredLink(label)}
                onMouseLeave={() => setHoveredLink(null)}
                onTouchStart={() => setHoveredLink(label)}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}

          <li
            ref={servicesRef}
            className="position-relative"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <a
              href="#engineering"
              className="nav-link px-2"
              style={getLinkStyle('Services')}
              onMouseEnter={() => setHoveredLink('Services')}
              onMouseLeave={() => setHoveredLink(null)}
              onTouchStart={() => setHoveredLink('Services')}
            >
              Services
            </a>
            {isDesktopServicesOpen && (
              <ul className="position-absolute bg-white shadow rounded py-2 px-3 list-unstyled start-0 top-100" style={{ zIndex: 10, minWidth: '200px' }}>
               
                  {[{ label: 'Engineering', href: '#engineering' }, { label: 'Consulting', href: '#consulting' }, { label: 'Technology', href: '#technologys' },
                { label: 'Cloud', href: '#cloud' },
                { label: 'Automation', href: '#automation' },
                ].map(({ label, href }) => (
                  <li key={label} className="mb-3 border-bottom pb-2">
                    <a
                      href={href}
                      className="dropdown-item"
                      style={getLinkStyle(label)}
                      onMouseEnter={() => setHoveredLink(label)}
                      onMouseLeave={() => setHoveredLink(null)}
                      onTouchStart={() => setHoveredLink(label)}
                      onClick={closeMenu}
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="http://www.esgucator.com/"
                    className="dropdown-item"
                    target="_blank"
                    rel="noreferrer"
                    style={getLinkStyle('ESG Solutions')}
                    onMouseEnter={() => setHoveredLink('ESG Solutions')}
                    onMouseLeave={() => setHoveredLink(null)}
                    onTouchStart={() => setHoveredLink('ESG Solutions')}
                    onClick={closeMenu}
                  >
                    ESG Solutions
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li
            ref={solutionsRef}
            className="position-relative"
            onMouseEnter={() => setDesktopSolutionsOpen(true)}
            onMouseLeave={() => setDesktopSolutionsOpen(false)}
          >
            <a
              href="#enterprise"
              className="nav-link px-2"
              style={getLinkStyle('Solutions')}
              onMouseEnter={() => setHoveredLink('Solutions')}
              onMouseLeave={() => setHoveredLink(null)}
              onTouchStart={() => setHoveredLink('Solutions')}
            >
              Solutions
            </a>
            {isDesktopSolutionsOpen && (
              <ul className="position-absolute bg-white shadow rounded py-2 px-3 list-unstyled start-0 top-100" style={{ zIndex: 10, minWidth: '250px' }}>
                {[{ label: 'Enterprise Software', href: '#enterprise' }, { label: 'Technology Infrastructure', href: '#technology' }, { label: 'Development and Operations', href: '#development' },
                { label: 'Security and Compliance', href: '#security' },
                { label: 'Data Science', href: '#datascience' },
                { label: 'Our Products', href: '#ourproducts' },
                ].map(({ label, href }) => (
                  <li key={label} className="mb-3 border-bottom pb-2">
                    <a
                      href={href}
                      className="dropdown-item"
                      style={getLinkStyle(label)}
                      onMouseEnter={() => setHoveredLink(label)}
                      onMouseLeave={() => setHoveredLink(null)}
                      onTouchStart={() => setHoveredLink(label)}
                      onClick={closeMenu}
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="http://www.esgucator.com/"
                    className="dropdown-item"
                    target="_blank"
                    rel="noreferrer"
                    style={getLinkStyle('ESG Solutions')}
                    onMouseEnter={() => setHoveredLink('ESG Solutions')}
                    onMouseLeave={() => setHoveredLink(null)}
                    onTouchStart={() => setHoveredLink('ESG Solutions')}
                    onClick={closeMenu}
                  >
                    ESG Solutions
                  </a>
                </li>
              </ul>
            )}

          </li>

          {[
            { label: 'Clients', href: '#clients' },
            { label: 'Contact Us', href: '#contact' }
          ].map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="nav-link px-2"
                style={getLinkStyle(label)}
                onMouseEnter={() => setHoveredLink(label)}
                onMouseLeave={() => setHoveredLink(null)}
                onTouchStart={() => setHoveredLink(label)}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}

        </ul>
      </div>

      {/* Mobile Side Navigation (unchanged and visible) */}
      {isMobileMenuOpen && (
        <div className="position-absolute start-0 w-100 p-4 bg-light" style={{ top: '100%', zIndex: 1000 }}>
          <ul className="list-unstyled m-0 fs-6 text-start">
            {['Home', 'About'].map((label) => (
              <li key={label} className="mb-3 border-bottom pb-2">
                <a
                  className="nav-link"
                  href={label === 'Home' ? '#' : `#${label.toLowerCase()}`}
                  style={getLinkStyle(label)}
                  onMouseEnter={() => setHoveredLink(label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onTouchStart={() => setHoveredLink(label)}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}

            {/* Mobile Services */}
            <li className="mb-3 border-bottom pb-2">
              <div
                className="d-flex justify-content-between align-items-center"
                onClick={() => {
                  setMobileServicesOpen(!isMobileServicesOpen);
                  setMobileSolutionsOpen(false);
                }}
              >
                <span
                  className="nav-link"
                  style={getLinkStyle('Services')}
                  onMouseEnter={() => setHoveredLink('Services')}
                  onMouseLeave={() => setHoveredLink(null)}
                  onTouchStart={() => setHoveredLink('Services')}
                >
                  Services
                </span>
                <i className={`bi ${isMobileServicesOpen ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`}></i>
              </div>
              {isMobileServicesOpen && (
                <ul className="bg-light shadow rounded mt-2 px-3 list-unstyled">
                       {[{ label: 'Engineering', href: '#engineering' }, { label: 'Consulting', href: '#consulting' }, { label: 'Technology', href: '#technologys' },
                { label: 'Cloud', href: '#cloud' },
                { label: 'Automation', href: '#automation' },
                ].map(({ label, href }) => (
                  <li key={label} className="mb-3 border-bottom pb-2">
                    <a
                      href={href}
                      className="dropdown-item"
                      style={getLinkStyle(label)}
                      onMouseEnter={() => setHoveredLink(label)}
                      onMouseLeave={() => setHoveredLink(null)}
                      onTouchStart={() => setHoveredLink(label)}
                      onClick={closeMenu}
                    >
                      {label}
                    </a>
                  </li>
                ))}
                  <li className="border-bottom py-2">
                    <a
                      className="nav-link"
                      href="http://www.esgucator.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={getLinkStyle('ESG Solutions')}
                      onMouseEnter={() => setHoveredLink('ESG Solutions')}
                      onMouseLeave={() => setHoveredLink(null)}
                      onTouchStart={() => setHoveredLink('ESG Solutions')}
                      onClick={closeMenu}
                    >
                      ESG Solutions
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Mobile Solutions */}
            <li className="mb-3 border-bottom pb-2">
              <div
                className="d-flex justify-content-between align-items-center"
                onClick={() => {
                  setMobileSolutionsOpen(!isMobileSolutionsOpen);
                  setMobileServicesOpen(false);
                }}
              >
                <span
                  className="nav-link"
                  style={getLinkStyle('Solutions')}
                  onMouseEnter={() => setHoveredLink('Solutions')}
                  onMouseLeave={() => setHoveredLink(null)}
                  onTouchStart={() => setHoveredLink('Solutions')}
                >
                  Solutions
                </span>
                <i className={`bi ${isMobileSolutionsOpen ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`}></i>
              </div>
              {isMobileSolutionsOpen && (
                <ul className="bg-light shadow rounded mt-2 px-3 list-unstyled">
                  {[{ label: 'Enterprise Software', href: '#enterprise' }, { label: 'Technology Infrastructure', href: '#technology' },
                  { label: 'Development and Operations', href: '#development' },
                  { label: 'Security and Compliance', href: '#security' },
                  { label: 'Data Science', href: '#datascience' },
                  { label: 'Our Products', href: '#ourproducts' },
                  { label: 'ESG Solutions', href: 'http://www.esgucator.com/', external: true },].map(({ label, href }) => (
                    <li key={label} className="border-bottom py-2">
                      <a
                        className="nav-link"
                        href={href}
                        style={getLinkStyle(label)}
                        onMouseEnter={() => setHoveredLink(label)}
                        onMouseLeave={() => setHoveredLink(null)}
                        onTouchStart={() => setHoveredLink(label)}
                        onClick={closeMenu}
                      >
                        {label}
                      </a>
                    </li>
                  ))}

                </ul>
              )}
            </li>

            {/* Mobile Bottom Links */}
            {[
              { label: 'Clients', href: '#clients' },
              { label: 'Contact Us', href: '#contact' }
            ].map(({ label }) => (
              <li key={label} className="mb-3 border-bottom pb-2">
                <a
                  className="nav-link"
                  href={label === 'Home' ? '#' : `#${label.toLowerCase()}`}
                  style={getLinkStyle(label)}
                  onMouseEnter={() => setHoveredLink(label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  onTouchStart={() => setHoveredLink(label)}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}

          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
