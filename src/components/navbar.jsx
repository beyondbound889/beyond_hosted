import { useState } from "react";
import "../css/navbar.css";
import beyondLogo from "../assets/beyond.svg";
import GoogleSignIn from "./GoogleSignIn";

const scienceItems = [
  { title: "Our Research", subtitle: "Peer-reviewed studies" },
  { title: "Ingredients", subtitle: "Botanical sourcing & purity" },
  { title: "Clinical Results", subtitle: "Real-world outcomes" },
];

const aboutItems = [
  { title: "Our Story", subtitle: "How Beyond Bound began" },
  { title: "Mission & Values", subtitle: "What drives us" },
  { title: "Certifications", subtitle: "Quality standards" },
];

const accountMenuItems = [
  "View Details",
  "Delivery Status",
  "Order History",
  "Address",
  "Help",
  "Settings",
];

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [signedInUser, setSignedInUser] = useState(null);

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <>
      <header
        className="navbar-wrapper"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <nav className="navbar">
          <div className="navbar-brand">
            <img src={beyondLogo} alt="Beyond Bound" className="navbar-logo" />
            BEYOND BOUND<sup>®</sup>
          </div>

          <ul className="navbar-links">
            <li className="menu-item">
              <button type="button" className="menu-trigger">
                Home
              </button>
            </li>

            <li className="menu-item">
              <button type="button" className="menu-trigger">
                Products
              </button>
            </li>

            {/* Add Product button only visible after login */}
            {signedInUser && (
              <li className="menu-item">
                <button type="button" className="menu-trigger add-product-btn">
                  Add Product
                </button>
              </li>
            )}

            <li
              className="menu-item"
              onMouseEnter={() => setActiveMenu("science")}
              onTouchStart={() => setActiveMenu("science")}
            >
              <button
                type="button"
                className="menu-trigger"
                onClick={() => toggleMenu("science")}
                aria-expanded={activeMenu === "science"}
              >
                Science
                <span className="menu-caret">⌄</span>
              </button>
              {activeMenu === "science" ? (
                <div className="dropdown-panel compact-panel">
                  {scienceItems.map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      className="compact-item"
                    >
                      <span className="panel-title">{item.title}</span>
                      <span className="panel-subtitle">{item.subtitle}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </li>

            <li
              className="menu-item"
              onMouseEnter={() => setActiveMenu("about")}
              onTouchStart={() => setActiveMenu("about")}
            >
              <button
                type="button"
                className="menu-trigger"
                onClick={() => toggleMenu("about")}
                aria-expanded={activeMenu === "about"}
              >
                About
                <span className="menu-caret">⌄</span>
              </button>
              {activeMenu === "about" ? (
                <div className="dropdown-panel compact-panel">
                  {aboutItems.map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      className="compact-item"
                    >
                      <span className="panel-title">{item.title}</span>
                      <span className="panel-subtitle">{item.subtitle}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </li>

            <li className="menu-item">
              <button type="button" className="menu-trigger">
                Contact
              </button>
            </li>
          </ul>

          <div
            className={`navbar-icons${mobileOpen ? " navbar-icons--hidden" : ""}`}
          >
            <div className="login-menu">
              <button
                type="button"
                className="login-trigger"
                onClick={() => toggleMenu("login")}
                aria-label={signedInUser ? "Logout menu" : "Login menu"}
                aria-expanded={activeMenu === "login"}
              >
                <i className="fa-solid fa-user" aria-hidden="true" />
              </button>
              {activeMenu === "login" ? (
                <div className="dropdown-panel login-panel">
                  <GoogleSignIn onUserChange={setSignedInUser} />
                  {signedInUser ? (
                    <>
                      {accountMenuItems.map((item) => (
                        <button key={item} type="button" className="login-item">
                          {item}
                        </button>
                      ))}
                      {/* Logout button after login */}
                      <button
                        type="button"
                        className="login-item logout-btn"
                        onClick={() => setSignedInUser(null)}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <p className="login-hint">
                      Sign in to access your account options.
                    </p>
                  )}
                </div>
              ) : null}
            </div>
          </div>

          <button
            type="button"
            className={`hamburger${mobileOpen ? " hamburger--open" : ""}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </nav>

        {mobileOpen && (
          <div className="mobile-menu">
            <button type="button" className="mobile-link">
              Home
            </button>
            <button type="button" className="mobile-link">
              Products
            </button>

            <button
              type="button"
              className="mobile-link mobile-link--has-sub"
              onClick={() =>
                setMobileSubMenu((p) => (p === "science" ? null : "science"))
              }
              aria-expanded={mobileSubMenu === "science"}
            >
              Science
              <span
                className={`mobile-caret${mobileSubMenu === "science" ? " mobile-caret--open" : ""}`}
              >
                ⌄
              </span>
            </button>
            {mobileSubMenu === "science" && (
              <div className="mobile-submenu">
                {scienceItems.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    className="mobile-sub-item"
                  >
                    <span className="panel-title">{item.title}</span>
                    <span className="panel-subtitle">{item.subtitle}</span>
                  </button>
                ))}
              </div>
            )}

            <button
              type="button"
              className="mobile-link mobile-link--has-sub"
              onClick={() =>
                setMobileSubMenu((p) => (p === "about" ? null : "about"))
              }
              aria-expanded={mobileSubMenu === "about"}
            >
              About
              <span
                className={`mobile-caret${mobileSubMenu === "about" ? " mobile-caret--open" : ""}`}
              >
                ⌄
              </span>
            </button>
            {mobileSubMenu === "about" && (
              <div className="mobile-submenu">
                {aboutItems.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    className="mobile-sub-item"
                  >
                    <span className="panel-title">{item.title}</span>
                    <span className="panel-subtitle">{item.subtitle}</span>
                  </button>
                ))}
              </div>
            )}

            <button type="button" className="mobile-link">
              Contact
            </button>
          </div>
        )}
      </header>

      <button
        type="button"
        className={`cart-fab${mobileOpen || activeMenu === "login" ? " cart-fab--hidden" : ""}`}
        aria-label="Cart"
      >
        <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
      </button>
    </>
  );
}

export default Navbar;
