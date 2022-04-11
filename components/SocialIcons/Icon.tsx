import { FC } from "react";

interface Props {
  iconClasses: string;
  path: string;
}

export const Icon: FC<Props> = ({ iconClasses, path }) => {
  return (
    <a
      href={path}
      target="_blank"
      className="home__social-icon"
      rel="noreferrer"
    >
      <i className={iconClasses}></i>
    </a>
  );
};
