import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  // ✅ Read saved language from cookie or fallback to English
  const [language, setLanguage] = useState(Cookies.get("lang") || "en");

  // ✅ Update cookie whenever language changes
  useEffect(() => {
    Cookies.set("lang", language, { expires: 365, sameSite: "strict" }); 
    // expires: 365 days, secure cookie with strict same-site
  }, [language]);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    Cookies.set("lang", lang, { expires: 365, sameSite: "strict" });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
