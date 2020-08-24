export interface IProfile {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: number;
  website: string;
  summary: string;
  profiles: Array<string>;
  location: {
    address: string;
    postalCode: number;
    city: string;
    countryCode: string;
    region: string;
  };
}
