export const QualificationTab = ({
  title,
  iconClassName,
  onClick,
}: {
  title: string;
  iconClassName: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="qualification__button button--flex qualification__active"
      onClick={onClick}
    >
      <i className={`uil qualification__icon ${iconClassName}`}></i>
      {title}
    </div>
  );
};
