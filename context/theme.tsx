import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children: React.ReactNode;
}

interface ContextType {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

const defaultValue = {
  darkTheme: false,
  setDarkTheme: () => {},
};

export const themeValue = {
  DARK_PAGE_STYLE: "dark-theme",
  DARK_ICON: "uil-sun",
  LIGHT_ICON: "uil-moon",
};

const ThemeContext = createContext<ContextType>(defaultValue);

export const ThemeProvider = ({ children }: Props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add(themeValue.DARK_PAGE_STYLE);
    } else {
      document.body.classList.remove(themeValue.DARK_PAGE_STYLE);
    }
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
