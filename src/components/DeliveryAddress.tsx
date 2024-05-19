import { t } from "i18next";
import React from "react";

const DeliveryAddress = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl">{t("Delivery Address")}</h1>
      <div className="mt-4 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full p-4 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow md:rounded-lg border-1 bg-gray-50 text-gray-500 font-semibold p-4">
              Ambaba, talat Harb st, labor city towards 12 blocks, Harb st,
              labor city towards 12 cairo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
