import Link from "next/link";
import { themeValue, useThemeContext } from "../../context";
import { Navbar } from "./Navbar";

export const Header = ({ content }) => {
  const { darkTheme, setDarkTheme } = useThemeContext();
  const toggleTheme = () => setDarkTheme(!darkTheme);
  const icon = darkTheme ? themeValue.DARK_ICON : themeValue.LIGHT_ICON;

  return (
    <header id="header" className="header">
      <nav className="nav nav container">
        <Link href="/">
          <a className="nav__log">{content.title}</a>
        </Link>

        <Navbar navigationLinks={content.navigationLinks} />

        <div className="nav__btns" onClick={toggleTheme}>
          <i className={`uil change-theme ${icon}`} id="theme-button"></i>

          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
