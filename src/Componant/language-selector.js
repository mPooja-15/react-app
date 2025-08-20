import { useEffect, useState } from "react";
import i18n from "../i18n";
import { useLocation } from "react-router-dom";

const LanguageHandler = () => {
  const location = useLocation();
  const [, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const lang = location.pathname.split("/")[1];
    if (["en", "he"].includes(lang)) {
      i18n.changeLanguage(lang).then(() => setLanguage(lang));
    } else {
      i18n.changeLanguage("en").then(() => setLanguage("en"));
    }
  }, [location]);

  return null; // This component only handles language changes
};

export default LanguageHandler;



