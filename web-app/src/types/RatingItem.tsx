import { StaticImageData } from "next/image";

export type RatingItem = {
  profilePicUrl?: string;
  username: string;
  stats: {
    buildingLevel: number;
    balance: number;
    apartmentsNum?: number;
  };
};
