import { t } from "i18next";
import React, { useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

const ShipmentTrackingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { i18n } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 250);
  };

  const onTrackShipment = () => {
    console.log(inputRef.current?.value)
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cursor-pointer hover:text-[#E30613]">
        {t("Track Shipment")}
      </div>
      {isVisible && (
        <div className="absolute right-0 mt-2 w-80 h-28 p-4 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <form className="flex flex-col">
            <label
              htmlFor="search"
              className="block text-sm font-medium text-[#4f5665]"
            >
              {t("Track your shipment")}
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="flex flex-grow">
                <input
                  type="text"
                  name="search"
                  ref={inputRef}
                  id="search"
                  className={`block w-full text-sm font-normal rounded-none rounded-l-md sm:text-sm ${
                    i18n.language === "en" ? "pl-2" : "pr-2"
                  }`}
                  placeholder={t("Tracking Number")}
                />
              </div>
              <button
                onClick={onTrackShipment}
                type="button"
                className={`-ml-px relative inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium ${
                  i18n.language === "en" ? "rounded-r-md" : "rounded-l-md"
                } bg-[#E30613]`}
              >
                <MagnifyingGlassIcon className="h-6 w-6 text-white" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShipmentTrackingButton;
