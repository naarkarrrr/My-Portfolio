import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="neoh_fn_footer">
        {/* Footer Top */}
        <div className="footer_top">
          <div className="container">
            <div className="ft_in">
              <div className="desc">
                <div className="img">
                  <img src="img/footer-logo.png" alt="" />
                </div>
                <h3 className="fn_title">Join our Newsletter</h3>
                <p className="fn_desc">Subscribe to Receive a Treasure Trove of Exclusive Insights, Creative Inspirations, 
                and Stay Ahead with the Latest Cutting-Edge Trends in Web Development, Design, and Beyond
                </p>
              </div>

                <div className="subscribe_form">
                <form
              action="/"
              method="post"
              className="newsletter"
              id="newsletter"
              autoComplete="off"
              data-netlify="true"
            >
                  <div className="subscribe_in">
                  <input type="text" placeholder="Enter Your Email ID" />
                    <a href="#" className="neoh_fn_button only_text">
                      <span className="text">Subscribe</span>
                    </a>
                  </div>
                </form>
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                    data-message="You have subscribed to our updates. Thank you"
                    data-invalid-email="Please enter valid email!"
                  />
                  <div className="empty_notice">
                    <span>Please enter your Email</span>
                  </div>
                </div>
              <div className="neoh_fn_social_list">
                <ul>
                  {/* <li>
                    <a href="https://github.com/naarkarrrr" target='_blank'>
                      <i className="fn-icon-github" />
                    </a>
                  </li> */}
                  <li>
                    <a href="https://www.instagram.com/underscore.social" target='_blank'>
                      <i className="fn-icon-instagram" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="https://www.linkedin.com/in/shivam-narkar-61277527a/" target='_blank'>
                      <i className="fn-icon-linkedin" />
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="https://www.youtube.com/c/ShivamNarkar" target='_blank'>
                      <i className="fn-icon-youtube" />
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="#">
                      <i className="fn-icon-github" />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Top */}
        {/* Footer Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="fb_in">
              <div className="fb_left">
                <p>
                  Copyright {new Date().getFullYear()} - Designed &amp;
                  Developed by{" "}
                  <a
                    href="https://instagram.com/underscore.social"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Underscore Digital Solutions
                  </a>
                </p>
              </div>
              <div className="fb_right">
                <audio></audio>
                {/* <ul>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Bottom */}
      </div>
    </footer>
  );
};
export default Footer;
