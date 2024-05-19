import Header from "./components/header";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const {i18n} = useTranslation();

  useEffect(() => {
    const dir = i18n.language === 'en'? 'ltr': 'rtl';
    document.documentElement.dir = dir;
  }, [i18n.language]);
  return (
    <>
      <Header/>
    </>
  );
}

export default App;
