import Link from "next/link";
import { Fragment, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  return (
    <Fragment>
      {/* Right Navigation */}
      <div
        className={`nav_overlay ${toggle ? "go" : ""}`}
        onClick={() => setToggle(false)}
      />
      <div className={`neoh_fn_nav ${toggle ? "go" : ""}`}>
        <div className="trigger is-active">
          <div className="trigger_in" onClick={() => setToggle(false)}>
            <span className="text">Close</span>
            <span className="hamb">
              <span className="hamb_a" />
              <span className="hamb_b" />
              <span className="hamb_c" />
            </span>
          </div>
        </div>
        <div className="nav_content">
          <div className="nav_menu">
            <ul>
              {/* <li className="menu-item menu-item-has-children">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setHomeToggle(!homeToggle);
                  }}
                >
                  Home
                </a>
                <ul
                  className="sub-menu"
                  style={{ display: homeToggle ? "block" : "none" }}
                >
                  <li>
                    <Link href="/">Home Static</Link>
                  </li>
                  <li>
                    <Link href="/kenburns">Full Kenburns</Link>
                  </li>
                  <li>
                    <Link href="/half-kenburns">Half Kenburns</Link>
                  </li>
                  <li>
                    <Link href="/half-slider">Half Slider</Link>
                  </li>
                </ul>
              </li> */}
               <li className="menu-item">
                <Link href="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link href="/about">About</Link>
              </li>
              {/* <li className="menu-item">
                <Link href="/blog">Blog</Link>
              </li> */}
              <li className="menu-item">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="menu-item" style={{fontSize: "10px"}}>
                <Link href="#">More Coming Soon</Link>
              </li>
            </ul>
          </div>
          <div className="nav_buttons">
            <a
              href="https://www.linkedin.com/in/shivam-narkar-61277527a/"
              className="neoh_fn_button"
              target="_blank"
            >
              <span className="icon">
                <img src="svg/linkedin.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">OpenSea</span>
            </a>
            <a
              href="https://github.com/naarkarrrr"
              className="neoh_fn_button"
              target="_blank"
            >
              <span className="icon">
                <img src="svg/github.svg" alt="" className="fn__svg" />
              </span>
              <span className="text">Discord</span>
            </a>
          </div>
        </div>
        {/* Nav Footer */}
        <div className={`nav_footer ${toggle ? "ready" : ""}`}>
          <div className="nf_left">
            <p>
              Copyright 2022- Designed &amp; Developed by{" "}
              <a
                href="https://instagram.com/underscore.social"
                target="_blank"
              >
                Underscore Digital Solutions
              </a>
            </p>
          </div>
          <div className="nf_right">
            <div className="neoh_fn_social_list">
              <ul>
                <li>
                  <a href="https://www.instagram.com/underscore.social" target='_blank'>
                    <i className="fn-icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* !Nav Footer */}
      </div>
      {/* !Right Navigation */}
      {/* Header */}
      <header className="neoh_fn_header">
        <div className="container">
          <div className="header_in">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="img/logo.png" alt="" />
                </a>
              </Link>
            </div>
            <div className="trigger">
              <div className="trigger_in" onClick={() => setToggle(!toggle)}>
                <span className="text">Menu</span>
                <span className="hamb">
                  <span className="hamb_a" />
                  <span className="hamb_b" />
                  <span className="hamb_c" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* !Header */}
    </Fragment>
  );
};
export default Header;
