import Link from "next/link";
import { useEffect, useState } from "react";
import { scroll } from "../utils/utils";

const Header = ({
  navLight,
  whiteLogo,
  getStartText,
  btnCustomHover,
  navHoverColor,
  singlePage,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);

  const [toggle, setToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState("");

  const toggleFun = () => {
    setToggle(!toggle);
    document.querySelector("body").classList.toggle("wsactive");
  };
  const toggleMenu = (value) => {
    setMobileMenuToggle(mobileMenuToggle !== value ? value : "");
  };

  return (
    <header
      id="header"
      className={`header tra-menu ${navLight ? "navbar-light" : "navbar-dark"}`}
    >
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="/images/logo-012.png" alt="mobile-logo" />
          </span>
          <a
            id="wsnavtoggle"
            onClick={() => toggleFun()}
            className="wsanimated-arrow"
          >
            <span />
          </a>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            {/* HEADER LOGO */}
            <div className="desktoplogo">
              <Link href="#top">
                <a className="logo-black">
                  <img src="/images/logo-012.png" alt="header-logo" />
                </a>
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="#top">
                <a className="logo-white">
                  <img
                    src={`${
                      whiteLogo
                        ? "/images/logo-white2.png"
                        : "/images/logo-02.png"
                    }`}
                    alt="header-logo"
                  />
                </a>
              </Link>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix">
              <div className="overlapblackbg" onClick={() => toggleFun()} />

              <ul
                className={`wsmenu-list ${
                  navHoverColor ? navHoverColor : "nav-skyblue-hover"
                }`}
              >
                <li class="nl-simple"><a href="#top">ראשי</a></li>
                <li class="nl-simple"><a href="#features-4">איך זה עובד ?</a></li>
                <li class="nl-simple"><a href="#content-5">הרשמה לאתגר</a></li>
                <li class="nl-simple"><a href="#content-5"> בדיקה מהירה</a></li>
                <li class="nl-simple"><a href="#faqs-2">שאלות ותשובות</a></li>
                <li class="nl-simple"><a href="#reviews-1">סיפורי הצלחה</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
