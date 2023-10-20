import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const About = () => {
  return (
    <Layout pageName={"About Us"}>
      <PageBanner pageName={"About Us"} />
      <div className="neoh_fn_aboutpage">
        {/* Information Section */}
        <section id="information">
          <div className="container">
            {/* About Item #1 */}
            <div className="neoh_fn_about_item">
              <div className="img_item">
                <img src="img/about/img1.jpg" alt="" />
              </div>
              <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Who are we?</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              Underscore Digital Solutions is your gateway to innovative and impactful digital experiences. Born from a passion for pushing the boundaries of what&apos;s possible online, our dedicated team of professionals is committed to transforming concepts into compelling digital realities. 
              </p>
              <p>
              At Underscore, We believe in the power of collaboration, merging creativity, technology, and strategic thinking to deliver solutions that resonate with both our clients and their audiences. Join us on a journey where innovation meets implementation, and together, let&apos;s create a digital presence that truly stands out.
              </p>
            </div>
            {/* <div className="buttons">
              <a
                href="https://www.linkedin.com/in/shivam-narkar-61277527a/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/linkedin.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">LinkedIn</span>
              </a>
              <a
                href="https://github.com/naarkarrrr/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/github.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">GitHub</span>
              </a>
            </div> */}
          </div>
            </div>
            {/* !About Item #1 */}
            {/* Guarantee List */}
            <div className="neoh_fn_gualist">
              <ul>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img
                      src="svg/web-designer.svg"
                      alt=""
                      className="fn__svg"
                    />
                    <h3 className="fn_title">Website Development</h3>
                    <p className="fn_desc fn_animated_text">
                    Build a powerful online presence with our user-focused website development.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/graphic-designer.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Mobile App Development</h3>
                    <p className="fn_desc fn_animated_text">
                    Turn your ideas into engaging mobile experiences with our innovative app development.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/web-developer.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Graphic Designer</h3>
                    <p className="fn_desc fn_animated_text">
                    Ensure lasting performance with our meticulous website and app maintenance services.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Guarantee List */}
            {/* About Item #2 */}
            <div className="neoh_fn_about_item reverse">
              <div className="img_item">
                <img src="img/about/img2.jpg" alt="" />
              </div>
              <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Who are we?</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              Underscore Digital Solutions is your gateway to innovative and impactful digital experiences. Born from a passion for pushing the boundaries of what&apos;s possible online, our dedicated team of professionals is committed to transforming concepts into compelling digital realities. 
              </p>
              <p>
              At Underscore, We believe in the power of collaboration, merging creativity, technology, and strategic thinking to deliver solutions that resonate with both our clients and their audiences. Join us on a journey where innovation meets implementation, and together, let&apos;s create a digital presence that truly stands out.
              </p>
            </div>
            {/* <div className="buttons">
              <a
                href="https://www.linkedin.com/in/shivam-narkar-61277527a/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/linkedin.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">LinkedIn</span>
              </a>
              <a
                href="https://github.com/naarkarrrr/"
                target="_blank"
                rel="noreferrer"
                className="neoh_fn_button"
              >
                <span className="icon">
                  <img src="svg/github.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">GitHub</span>
              </a>
            </div> */}
          </div>
            </div>
            {/* !About Item #2 */}
          </div>
        </section>
        {/* !Information Section */}
       
      </div>
    </Layout>
  );
};
export default About;
