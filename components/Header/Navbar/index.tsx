import { SECTIONS } from "../constant";
import { NavbarItem } from "../NavbarItem";

export const Navbar = ({ navigationLinks }) => {
  return (
    <div className="nav__menu" id="nav-menu">
      <ul className="nav__list grid">
        {SECTIONS.map((section) => (
          <NavbarItem key={section.label} {...section} />
        ))}
      </ul>
      <i className="uil uil-times nav__close" id="nav-close"></i>
    </div>
  );
};
