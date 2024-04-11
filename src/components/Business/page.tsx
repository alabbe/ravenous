import React from "react";
import { BusinessProps } from "../../utils/utils";

const Business = ( { business }: {business: BusinessProps}) => {
  return (
    <div className="flex flex-col bg-slate-100 border-cyan-500 shadow rounded">
      <img src="/pizza-bg-mobile.jpg" className="max-w-full h-auto"></img>
      <h2 className="text-lg font-bold text-neutral-600 ml-2">{business.name}</h2>
      <div className="flex flex-row justify-between mx-2">
        <div className="  text-neutral-600 text-left">
          <p> {business.address} </p>
          <p> {business.zipcode} </p>
          <p> {business.city} </p>
        </div>
        <div className="text-neutral-500 text-right">
          <p className="font-bold uppercase text-amber-600"> {business.category} </p>
          <p className="text-amber-400"> {business.rating} </p>
          <p> {business.reviewsCount} </p>
        </div>
      </div>
    </div>
  );
};

export default Business;