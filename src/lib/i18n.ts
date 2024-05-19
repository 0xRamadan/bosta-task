import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    
    supportedLngs: ["en", "ar"],
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
          "SignIn": "Sign In",
          "ENG": "ENG",
          "Main": "Main",
          "Pricing": "Pricing",
          "Talk To Sales": "Talk To Sales",
          "Track Shipment": "Track Shipment",
          "Track Your shipment": "Track Your shipment"
        }
      },
      ar: {
        translation: {
          "Welcome to React": "مرحبا بك في ريأكت",
          "SignIn": "تسجيل الدخول",
          "ENG": "عربي",
          "Main": "الرئيسية",
          "Pricing": "الأسعار",
          "Talk To Sales": "كلم المبيعات",
          "Track Shipment": "تتبع شحنتك",
          "Track your shipment": "تتبع شحنتك",
          "Tracking Number": "رقم التتبع"
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
