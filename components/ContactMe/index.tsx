import { ContactInfoItem } from "../ContactInfoItem";
import { contactInformation } from "./constant";

export const ContactMe = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          {contactInformation.map((item) => (
            <ContactInfoItem
              key={item.title}
              title={item.title}
              detail={item.detail}
              className={item.iconClassName}
            />
          ))}
        </div>

        <form action="" className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact_label">
                Name
              </label>
              <input type="text" className="contact__input" />
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact_label">
                Email
              </label>
              <input type="email" className="contact__input" />
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact_label">
                Project
              </label>
              <input type="text" className="contact__input" />
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact_label">
                Message
              </label>
              <textarea
                name=""
                id=""
                cols="0"
                rows="7"
                className="contact__input"
              ></textarea>
            </div>
            <div>
              <a href="" className="button button--flex">
                Send Message
                <i className="uil-uil-message button__icon"></i>
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
