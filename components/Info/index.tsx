export const Info = ({ num, title }) => {
  return (
    <div>
      <span className="about__info-title">{num}</span>
      <span className="about__info-name">{title}</span>
    </div>
  );
};
