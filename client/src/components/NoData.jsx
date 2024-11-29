import React from "react";
import noDataImage from "../assets/nothing.gif";

const NoData = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-2 mt-6">
      <img src={noDataImage} alt="no data" className="w-1/3" />
      <p className="text-neutral-600">Nothing to see here</p>
    </div>
  );
};

export default NoData;
