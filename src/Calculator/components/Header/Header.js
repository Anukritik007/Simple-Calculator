import React, { useContext } from "react";
import Button from "../Button/Button";
import "./Header.css";
import themeContext from "../../ThemeContext";
import { buttonName } from "./Header.constants";

const Header = ({ showScientific, toggleMode }) => {
  const { isThemeDark, toggleTheme } = useContext(themeContext);

  return (
    <div className="header">
      <h3>Calculator</h3>
      <div className="options-bar">
        <Button
          displayName={buttonName.lightTheme}
          onClick={toggleTheme}
          disabled={!isThemeDark}
        />
        <Button
          displayName={buttonName.darkTheme}
          onClick={toggleTheme}
          disabled={isThemeDark}
        />

        <Button
          displayName={
            showScientific ? buttonName.normal : buttonName.scientific
          }
          onClick={toggleMode}
        />
      </div>
    </div>
  );
};

export default Header;
