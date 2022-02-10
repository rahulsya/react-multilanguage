import "../styles/navigation.css";
import { useState } from "react";

import { useTranslation } from "react-i18next";

function Navigation() {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("i18nextLng") || ""
  );
  const handleChangeLanguage = (codeLanguage) => {
    setCurrentLanguage(codeLanguage);
    i18n.changeLanguage(codeLanguage);
    localStorage.setItem("i18nextLng", codeLanguage);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">React-i18n</div>
        <div className="links">
          <a href="#home" className="active">
            {t("menu.home")}
          </a>
          <a href="#features">{t("menu.features")}</a>
          <a href="#about">{t("menu.about")}</a>
          <a href="#support">{t("menu.support")}</a>
          <select
            value={currentLanguage}
            onChange={({ target }) => handleChangeLanguage(target.value)}
            className="btn-switch"
            name="Languages"
          >
            <option disabled={currentLanguage === "en"} value="en">
              English
            </option>
            <option disabled={currentLanguage === "id"} value="id">
              Indonesia
            </option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
