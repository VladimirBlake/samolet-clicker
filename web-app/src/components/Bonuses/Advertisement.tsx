import { useEffect, useState } from "react";
import { Link } from "../Link/Link";

export default function Advertisement() {
  const [advertisementData, setAdvertisementData] = useState<{
    url: string;
    photo: string;
  }>({
    url: "",
    photo: "url",
  });

  useEffect(() => {
    fetch(`https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/getAdvert`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) =>
        setAdvertisementData({
          url: res.data.url,
          photo: res.data.thumbnail_image_url,
        })
      )
      .catch((err) => {});
  }, []);

  return (
    <Link
      href={advertisementData.url ? advertisementData.url : ""}
      style={{
        background:
          advertisementData.url === ""
            ? "#3496FD"
            : `url(${advertisementData.photo}) center / cover no-repeat`,
        backgroundSize: "cover",
      }}
      className="col-span-2 bg-[#3496FD] rounded-3xl bg-cover w-full text-lg font-medium flex items-center justify-center"
    >
      {/* <span className="text-white">реклама</span> */}
    </Link>
  );
}
