import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

const orderDetails = [
  {
    branch: "مدينة نصر",
    date: "05/04/2020",
    time: "12:30pm",
    details: "تم إنشاء الشحنة",
  },
  {
    branch: "مدينة نصر",
    date: "05/04/2020",
    time: "12:30pm",
    details: "تم استلام الشحنة من التاجر",
  },
  {
    branch: "مدينة نصر",
    date: "05/04/2020",
    time: "12:30pm",
    details: "الشحنة خرجت للتسليم",
  },
  {
    branch: "مدينة نصر",
    date: "05/04/2020",
    time: "12:30pm",
    details: "لم يتم تسليم الشحنة",
  },
];

export default function ShipmentDetails() {
  const { i18n } = useTranslation();

  return (
    <div className="basis-2/3">
      <div className="sm:flex sm:items-center">
        <h1 className="text-xl font-semibold">{t("Shipment Details")}</h1>
      </div>
      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className={`px-4 py-3.5 ${
                        i18n.language === "en" ? "text-left" : "text-right"
                      } text-sm font-semibold text-gray-900 sm:pl-6`}
                    >
                      {t("Branch")}
                    </th>
                    <th
                      scope="col"
                      className={`px-3 py-3.5 ${
                        i18n.language === "en" ? "text-left" : "text-right"
                      } text-sm font-semibold text-gray-900`}
                    >
                      {t("Date")}
                    </th>
                    <th
                      scope="col"
                      className={`px-3 py-3.5 ${
                        i18n.language === "en" ? "text-left" : "text-right"
                      } text-sm font-semibold text-gray-900`}
                    >
                      {t("Time")}
                    </th>
                    <th
                      scope="col"
                      className={`px-3 py-3.5 ${
                        i18n.language === "en" ? "text-left" : "text-right"
                      } text-sm font-semibold text-gray-900`}
                    >
                      {t("Details")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {orderDetails.map((order, index) => (
                    <tr key={index}>
                      <td className={`whitespace-nowrap ${i18n.language === "en"? "px-6": "px-4"} py-4 text-sm text-gray-500 font-semibold`}>
                        {order.branch}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-semibold">
                        {order.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-semibold">
                        {order.time}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-semibold">
                        {order.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
