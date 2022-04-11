import { Photo } from "../Photo";
import { SocialIcons } from "../SocialIcons";

export const IntroSection = () => {
  return (
    <div>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <SocialIcons />
            <Photo path="img/perfil.png" />
            <div className="home__data">
              <h1 className="home__title">Hi,I am Hissam</h1>
              <h3 className="home__subtitle">Frontend Developer</h3>
              <p className="home__description">
                High level experience in web design
              </p>
              <a href="#contact" className="button button--flex">
                Contact Me <i className="uil uil-message button__icon"></i>
              </a>
            </div>
          </div>
          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <i className="uil uil-mouse-alt home__scroll-mouse"></i>
              <span className="home__scroll-name">Scroll down</span>
              <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
