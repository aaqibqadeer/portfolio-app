import { TestimonialItem } from "../../components/TestimonialItem";
import { testimonialList } from "./constant";

export const Testimonial = () => {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My Client Saying</span>

      <div className="testimonial__container container swiper-container">
        <div className="swiper-wrapper">
          {testimonialList.map((testimonial) => (
            <TestimonialItem
              key={testimonial.name}
              name={testimonial.name}
              relation={testimonial.relation}
              rating={testimonial.rating}
              comments={testimonial.comments}
              imagePath={testimonial.imagePath}
            />
          ))}
        </div>

        {/* <!-- add pagination --> */}
        <div className="swiper-pagination swiper-pagination-testimonial"></div>
      </div>
    </section>
  );
};
