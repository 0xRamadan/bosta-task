import { t } from "i18next";
import React from "react";
const CallSupport = () => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex gap-2 justify-center">
          <img src="../assets/have-a-problem.svg" className="w-24 h-24"/>
          <div className="flex flex-col gap-2 p-2 ">
            <p className="font-semibold">{t("Is there a problem with your shipment?!")}</p>
            <button className="outline w-full text-center text-white bg-[#E30613] rounded-lg p-2 font-semibold">{t("Report a problem")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallSupport;
