import Link from "next/link";
import { FC } from "react";

interface SocialMediaIconProps {
  link: string;
  className: string;
}

const FooterLink = ({ service }: { service: string }) => {
  return (
    <li>
      <Link href="#services" passHref>
        <div className="footer__link">{service}</div>
      </Link>
    </li>
  );
};

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ link, className }) => {
  return (
    <a href={link} className="footer__social">
      <i className={className}></i>
    </a>
  );
};

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Hissam</h1>
              <span className="footer__subtitle">Frontend Developer</span>
            </div>

            <ul className="footer__links">
              <FooterLink service="Services" />
              <FooterLink service="Portfolio" />
              <FooterLink service="Contact Me" />
            </ul>

            <div className="footer__socials">
              <SocialMediaIcon className="uil uil-facebook-f" link="" />
              <SocialMediaIcon className="uil uil-instagram" link="" />
              <SocialMediaIcon className="uil uil-twitter-alt" link="" />
            </div>
          </div>

          <p className="footer__copy">
            &#169; HissamHussain. All rights reserved
          </p>
        </div>
      </footer>
      <a href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </>
  );
};
