import { FC, useState } from "react";

interface Props {
  heading1: string;
  heading2: string;
  children: React.ReactNode;
}

export const TechStack: FC<Props> = ({ heading1, heading2, children }) => {
  const [showSkills, setShowSkills] = useState(false);
  const className = showSkills ? "skills__open" : "skills__close";
  const toggleShowSkills = () => setShowSkills(!showSkills);

  return (
    <div className={`skills__content ${className}`}>
      <div className="skills__header" onClick={toggleShowSkills}>
        <i className="uil uil-brackets-curly skills__icon"></i>

        <div>
          <h1 className="skills__title">{heading1}</h1>
          <span className="skills__subtitle">{heading2}</span>
        </div>

        <i className="uil uil-angle-down skills__arrow"></i>
      </div>

      <div className="skills__list grid">{children}</div>
    </div>
  );
};
