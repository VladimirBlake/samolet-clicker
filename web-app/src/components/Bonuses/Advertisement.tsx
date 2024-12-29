"use client";
import { useEffect, useState } from "react";
import { Link } from "../Link/Link";
import useSWR from "swr";
import Image from "next/image";

export default function Advertisement() {
  const { data, isLoading, error } = useSWR(
    `https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/getAdvert`
  );

  if (isLoading) {
    return (
      <Link
        href={""}
        className="col-span-2 bg-[#3496FD] rounded-3xl bg-cover w-full text-lg font-medium flex items-center justify-center"
      ></Link>
    );
  }

  return (
    <Link
      href={data.data.url}
      style={{
        background: `url(${data.data.thumbnail_image_url}) center / cover no-repeat`,
        backgroundSize: "cover",
      }}
      className="col-span-2 bg-[#3496FD] rounded-3xl bg-cover w-full text-lg font-medium flex items-center justify-center overflow-hidden relative"
    >
      <Image
        src={data.data.thumbnail_image_url}
        alt=""
        fill={true}
        className="w-full h-full object-cover"
      />
    </Link>
  );
}
