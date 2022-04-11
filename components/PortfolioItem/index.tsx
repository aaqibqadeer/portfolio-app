import { FC } from "react";

interface Props {
  title: string;
  description: string;
  url: string;
  imagePath: string;
}

export const PortfolioItem: FC<Props> = ({
  title,
  description,
  url,
  imagePath,
}) => {
  return (
    <div className="portfolio__content grid swiper-slide">
      <img src={imagePath} alt="" className="portfolio__img" />

      <div className="portfolio__data">
        <h3 className="portfolio__title">{title}</h3>
        <p className="portfolio__description">{description}</p>

        <a
          href={url}
          className="button button--flex button--small portfolio__button"
        >
          Demo
          <i className="uil uil-arrow-right button__icon"></i>
        </a>
      </div>
    </div>
  );
};
