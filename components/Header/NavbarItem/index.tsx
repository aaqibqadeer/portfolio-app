import Link from "next/link";
import { FC } from "react";

interface Props {
  label: string;
  path: string;
  iconClasses: string;
}

export const NavbarItem: FC<Props> = ({ label, path, iconClasses }) => {
  return (
    <li className="nav__item">
      <Link href={path}>
        <a className="nav__link active-link">
          <i className={iconClasses}></i>
          {label}
        </a>
      </Link>
    </li>
  );
};
