import React from "react";

enum businessMock {
  name = "Napolitan",
  address = "3 rue de la Vertonne",
  city = "Vertou",
  zipcode = "44120",
  category = "italian",
  rating = "4.5",
  reviewsCount = "90"
};

const Business = () => {
  return (
    <>
      <img src="#" alt=""></img>
      <h2>{ businessMock.name }</h2>
      <div>
        <p> { businessMock.address } </p>
        <p> { businessMock.zipcode } </p>
        <p> { businessMock.city } </p>
      </div>
      <div> { businessMock.category } </div>
      <div> { businessMock.rating } </div>
      <div> { businessMock.reviewsCount } </div>
    </>
  );
};

export default Business;