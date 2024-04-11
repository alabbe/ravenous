import React from "react";
import Business from "../Business/page";
import { BusinessProps } from "../../utils/utils";

const BusinessList = ( {list}: {list: BusinessProps[]} ) => {

  return (
    <div className="flex flex-col gap-y-8 bg-white  mx-5">
      {
        list.map((business: BusinessProps) => <Business business={ business }/>)
      }
    </div>
  );
}

export default BusinessList;