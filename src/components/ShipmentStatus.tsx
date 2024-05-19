import { t } from "i18next";
import React from "react";

const ShipmentStatus = () => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border-t">
      <div className="px-4 sm:p-6">
        {/* first div in the card */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 p-4">
            <p className="text-gray-400 font-normal">
              {t("Shipment Number")}: 1232131
            </p>
            <p>Shipment still not sent</p>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <p className="text-gray-400 font-normal">{t("Last Update")}</p>
            <p>MON at 5:33pm 06/04/2020</p>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <p className="text-gray-400 font-normal">{t("Vendor Name")}</p>
            <p>SOUQ.COM</p>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <p className="text-gray-400 font-normal">{t("Delivery Date Through")}</p>
            <p>3 Jan 2020</p>
          </div>
        </div>
        <div className="divide-x-2"></div>
      </div>
    </div>
  );
};

export default ShipmentStatus;
