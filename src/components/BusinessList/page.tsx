import React from "react";
import Business from "../Business/page";

const BusinessList = () => {

  return (
    <div className="flex flex-col gap-y-8 bg-white  mx-5">
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
    </div>
  );
}

export default BusinessList;