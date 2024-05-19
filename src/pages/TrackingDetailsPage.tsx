import React from "react";
import ShipmentStatus from "../components/ShipmentStatus"
import ShipmentDetails from "../components/ShipmentDetails"
import DeliveryAddress from "../components/DeliveryAddress"
import CallSupport from "../components/CallSupport"

const TrackingDetailsPage = () => {
  return (
    <div className="flex flex-col gap-6 pt-8">
      <ShipmentStatus />
      <div className="flex flex-col lg:flex-row gap-6">
        <ShipmentDetails />
        <div className="flex flex-col gap-4">
          <DeliveryAddress />
          <CallSupport />
        </div>
      </div>
    </div>
  );
};

export default TrackingDetailsPage;
