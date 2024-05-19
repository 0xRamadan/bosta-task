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
          "Main": "Main",
          "Pricing": "Pricing",
          "Talk To Sales": "Talk To Sales",
          "Track Shipment": "Track Shipment",
          "Track Your shipment": "Track Your shipment",
          "Delivery Address": "Delivery Address",
          "Shipment Details": "Shipment Details",
          "Shipment Number:": "Shipment Number:",
          "Last Update": "Last Update",
          "Vendor Name": "Vendor Name",
          "Delivery Date Through": "Delivery Date Through",
          "Do you have a problem with your shipment?!": "Do you have a problem with your shipment?!",
          "Report a problem": "Report a problem",
          "Branch": "Branch",
          "Date": "Date",
          "Time": "Time",
          "Details": "Details",

        }
      },
      ar: {
        translation: {
          "Welcome to React": "مرحبا بك في ريأكت",
          "SignIn": "تسجيل الدخول",
          "Main": "الرئيسية",
          "Pricing": "الأسعار",
          "Talk To Sales": "كلم المبيعات",
          "Track Shipment": "تتبع شحنتك",
          "Track your shipment": "تتبع شحنتك",
          "Tracking Number": "رقم التتبع",
          "Delivery Address": "عنوان التوصيل",
          "Shipment Details": "تفاصيل الشحنة",
          "Shipment Number" : "رقم الشحنة",
          "Last Update": "آخر تحديث",
          "Vendor Name": "اسم البائع",
          "Delivery Date Through": "موعد التسليم خلال",
          "Is there a problem with your shipment?!": "هل يوجد مشكلة في شحنتك؟!",
          "Report a problem": "إبلاغ عن مشكلة",
          "Branch": "الفرع",
          "Date": "التاريخ",
          "Time": "الوقت",
          "Details": "تفاصيل",
          
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
