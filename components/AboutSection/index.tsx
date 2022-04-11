import { Info } from "../Info";

export const AboutSection = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src="img/about.jpg" alt="abc" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            Web Devloper with extensive experience
          </p>

          <div className="about__info">
            <Info num="08+" title="Years experience" />
            <Info num="20+" title="Completed projects" />
            <Info num="05+" title="Comapnies worked" />
          </div>

          <div className="about__buttons">
            <a
              download=""
              href="assets/pdf/Alexa-Cv.pdf"
              className="button button--flex"
            >
              Download CV <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
