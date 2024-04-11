export type BusinessProps = {
  name: string;
  address: string;
  city: string;
  zipcode: string;
  category: string;
  rating: string;
  reviewsCount: string;
};

/* export interface BusinessesListProps {
  businesses: BusinessProps[];
} */

export function initMock(): BusinessProps[] {
  let businessMock = {} as BusinessProps;
  businessMock.name = "Le Napolitain";
  businessMock.address = "3 rue de la Vertonne";
  businessMock.city = "Vertou";
  businessMock.zipcode = "44120";
  businessMock.category = "italian";
  businessMock.rating = "4.5";
  businessMock.reviewsCount = "90";
  let businessList:BusinessProps[] = [];
  for(let index = 0; index< 5; index++) {
    businessList.push(businessMock);
  }
  return businessList;
}
