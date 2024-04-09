import React from "react";

enum businessMock {
  name = "Le Napolitain",
  address = "3 rue de la Vertonne",
  city = "Vertou",
  zipcode = "44120",
  category = "italian",
  rating = "4.5",
  reviewsCount = "90"
};

const Business = () => {
  return (
    <div className="flex flex-col bg-slate-100 border-cyan-500 shadow rounded">
      <img src="/pizza-bg-mobile.jpg" className="max-w-full h-auto"></img>
      <h2 className="text-lg font-bold text-neutral-600 ml-2">{businessMock.name}</h2>
      <div className="flex flex-row justify-between mx-2">
        <div className="  text-neutral-600 text-left">
          <p> {businessMock.address} </p>
          <p> {businessMock.zipcode} </p>
          <p> {businessMock.city} </p>
        </div>
        <div className="text-neutral-500 text-right">
          <p className="font-bold uppercase text-amber-600"> {businessMock.category} </p>
          <p className="text-amber-400"> {businessMock.rating} </p>
          <p> {businessMock.reviewsCount} </p>
        </div>
      </div>
    </div>
  );
};

export default Business;