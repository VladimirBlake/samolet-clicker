import { StaticImageData } from "next/image";

export type RatingItem = {
  profilePic: StaticImageData;
  username: string;
  stats: {
    buildingLevel: number;
    balance: number;
    apartmentsNum?: number;
  };
};
