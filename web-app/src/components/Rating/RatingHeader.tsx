import profilePic from "../../app/_assets/rating/profile-pic.png";
import secondThirdUpperIcon from "../../app/_assets/rating/second-third-upper.svg";
import crownIcon from "../../app/_assets/rating/crown-icon.svg";
import { RatingItem } from "@/types/RatingItem";

export default function RatingHeader({
  ratingItems,
}: {
  ratingItems: RatingItem[];
}) {
  return (
    <div className="w-full bg-ratingHeader bg-center bg-no-repeat bg-ratingHeaderSize rounded-b-[30px] pt-5 px-5 pb-6">
      <h1 className="text-center text-2xl font-black">Рейтинг</h1>
      <div className="flex mt-2 justify-between">
        <div className="flex flex-col items-center mt-12">
          <img src={secondThirdUpperIcon.src} alt="" />
          <div
            style={{
              backgroundImage: ratingItems[1]?.profilePicUrl
                ? `url("${ratingItems[1].profilePicUrl}")`
                : "#027BFC",
            }}
            className="size-[87px] mt-2 relative rounded-full bg-cover border-[3px] border-[#027BFC]"
          >
            <div className="absolute bg-[#027BFC] -bottom-2 left-1/2 -translate-x-1/2 size-5 font-bold rounded-full flex items-center justify-center text-xs">
              2
            </div>
          </div>
          <p className="text-sm font-bold mt-3">
            {ratingItems[1]?.username || ""}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={crownIcon.src} alt="" />
          <div
            style={{
              backgroundImage: ratingItems[0]?.profilePicUrl
                ? `url("${ratingItems[0].profilePicUrl}")`
                : "#027BFC",
            }}
            className="size-[112px] mt-2 relative rounded-full bg-cover border-[3px] border-[#027BFC]"
          >
            <div className="absolute bg-[#027BFC] -bottom-3 left-1/2 -translate-x-1/2 size-5 font-bold rounded-full flex items-center justify-center text-xs">
              1
            </div>
          </div>
          <p className="text-[15px] font-bold mt-3">
            {ratingItems[0]?.username || ""}
          </p>
        </div>
        <div className="flex flex-col items-center mt-12">
          <img src={secondThirdUpperIcon.src} alt="" />
          <div
            style={{
              backgroundImage: ratingItems[2]?.profilePicUrl
                ? `url("${ratingItems[2].profilePicUrl}")`
                : "#027BFC",
            }}
            className="size-[87px] mt-2 relative rounded-full bg-cover border-[3px] border-[#027BFC]"
          >
            <div className="absolute bg-[#027BFC] -bottom-2 left-1/2 -translate-x-1/2 size-5 font-bold rounded-full flex items-center justify-center text-xs">
              3
            </div>
          </div>
          <p className="text-sm font-bold mt-3">
            {ratingItems[2]?.username || ""}
          </p>
        </div>
      </div>
    </div>
  );
}
