import "./styles/app.css";

import Navigation from "./components/Navigation";
import { useTranslation } from "react-i18next";
function App() {
  const { t } = useTranslation();
  return (
    <>
      <Navigation />
      <div className="container">
        <h3>React Js </h3>
        <p>{t("content")}</p>
      </div>
    </>
  );
}

export default App;
