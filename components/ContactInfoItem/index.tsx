import { FC } from "react";

interface Props {
  title: string;
  detail: string;
  className: string;
}

export const ContactInfoItem: FC<Props> = ({ title, detail, className }) => {
  return (
    <div className="contact__information">
      <i className={className}></i>

      <div>
        <h3 className="contact__title">{title}</h3>
        <span className="contact__subtitle">{detail}</span>
      </div>
    </div>
  );
};
