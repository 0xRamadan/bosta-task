import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/layout/Header"
import TrackingDetailsPage from "./pages/TrackingDetailsPage";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "en" ? "ltr" : "rtl";
    document.documentElement.dir = dir;
  }, [i18n.language]);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-extrabold font-body">
      <Header />
      <TrackingDetailsPage/>
    </div>
  );
}

export default App;
