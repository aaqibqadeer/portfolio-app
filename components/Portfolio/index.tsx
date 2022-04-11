import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PortfolioItem } from "../../components/PortfolioItem";
import { portfolioList } from "./constant";

export const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {portfolioList.map((item) => (
          <SwiperSlide key={item.title}>
            <PortfolioItem
              title={item.title}
              description={item.description}
              url={item.url}
              imagePath={item.imagePath}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </section>
  );
};
