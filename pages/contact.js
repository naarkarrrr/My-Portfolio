import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Contact = () => {
  return (
    <Layout pageName={"Contact"}>
      <PageBanner pageName={"Contact"} />
      <div className="neoh_fn_contact_page">
        <div className="container">
          <div className="mw_500">
            <form
              action="/"
              method="post"
              className="contact_form"
              id="contact_form"
              autoComplete="off"
            >
              <div className="input_list">
                <ul>
                  <li>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Your Name" />
                  </li>
                  <li>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="text"
                      placeholder="youremail@mail.com"
                    />
                  </li>
                  <li>
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" />
                  </li>
                  <li>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" defaultValue={""} />
                  </li>
                  <li>
                    <a
                      id="send_message"
                      href="#"
                      className="neoh_fn_button only_text"
                    >
                      <span className="text">Send Message</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="returnmessage"
                data-success="Your message has been received, We will contact you soon."
              />
              <div className="empty_notice">
                <span>Please Fill Required Fields</span>
              </div>
            </form>
            <div className="desc_holder">
              <p>
              Lets Connect! Whether youre interested in collaborating on a project, have a question about my work, or simply want to say hello, Im just a click away. Reach out and lets start a conversation.
              </p>
              <p>
              Get in Touch! Im thrilled to connect with you. If youre looking to discuss a potential project, inquire about my services, or even just share your thoughts, don't hesitate to reach out. Im here to listen, collaborate, and bring your ideas to life.
              </p>
            </div>
            <div className="info_list">
              <ul>
                <li>
                  <p className="label">I'm From</p>
                  <h3 className="value">Vasai, Maharashtra</h3>
                </li>
                <li>
                  <p className="label">Contact</p>
                  <h3 className="value">
                    <a href="tel:+91 84598 72341">+91 84598 72341</a>
                  </h3>
                </li>
                <li>
                  <a href="mailto:shivamnarkar04@gmail.com" className="email">
                    shivamnarkar04@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
