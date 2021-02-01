export interface Address {
  street: string;
  suite: any;
  city: string;
  zipcode: number;
  geo: {
    lat: number;
    lng: number;
  };
}
