import { FC } from "react";

interface Props {
  name: string;
  expertiseLevel: number;
}

export const Skill: FC<Props> = ({ name, expertiseLevel }) => {
  const width = `${expertiseLevel}%`;
  return (
    <div className="skills__data">
      <div className="skills__titles">
        <h3 className="skills__name">{name}</h3>
        <span className="skills__number">{`${expertiseLevel}%`}</span>
      </div>
      <div className="skills__bar">
        <span className="skills__percentage" style={{ width }}></span>
      </div>
    </div>
  );
};
