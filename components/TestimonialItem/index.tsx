import { FC } from "react";

interface Props {
  name: string;
  relation: string;
  rating: number;
  comments: string;
  imagePath: string;
}

export const TestimonialItem: FC<Props> = ({
  name,
  relation,
  rating,
  comments,
  imagePath,
}) => {
  return (
    <div className="testimonial__content swiper-slide">
      <div className="testimonial__data">
        <div className="testimonial__header">
          <img src={imagePath} alt="" className="testimonial__img" />

          <div>
            <h3 className="testimonial__name">{name}</h3>
            <span className="testimonial__client">{relation}</span>
          </div>
        </div>

        <div>
          {[...Array(rating)].map((_, index) => (
            <i key={index} className="uil uil-star testimonial__icon-star"></i>
          ))}
        </div>
      </div>

      <p className="testimonial__description">{comments}</p>
    </div>
  );
};
