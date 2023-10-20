import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};



const Contact = () => {
  return (
    <Layout pageName={"Contact"}>
      <PageBanner pageName={"Contact"} />
      <div className="neoh_fn_contact_page">
        <div className="container">
          <div className="mw_500">
            
              <form name="contact"  className="contact_form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

              <input type="hidden" name="form-name" value="contact" />

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
                      className="neoh_fn_button only_text"
                      type="submit"

                    >
                      <button type="submit" className="neoh_fn_button">Send Message</button>
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
                Let&apos;s Connect! Whether you&apos;re interested in collaborating on a project, have a question about my work, or simply want to say hello, I&apos;m just a click away. Reach out and let&apos;s start a conversation.
              </p>
              <p>
                Get in Touch! I&apos;m thrilled to connect with you. If you&apos;re looking to discuss a potential project, inquire about my services, or even just share your thoughts, don&apos;t hesitate to reach out. I&apos;m here to listen, collaborate, and bring your ideas to life.
              </p>
            </div>
            {/* <div className="info_list">
              <ul>
                <li>
                  <p className="label">I&apos;m From</p>
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
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
