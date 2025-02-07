import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { ApartKey } from "@/lib/features/apartments/apartmentsSlice";

export async function POST(request: Request) {
  const cookiesStore = await cookies();
  const requestBody: { flatNum: ApartKey } = await request.json();
  const { flatNum } = requestBody;
  const jwtToken = cookiesStore.get("jwtToken")?.value || "";
  try {
    let response = {};
    const decoded: jwt.JwtPayload = jwt.verify(
      jwtToken,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload;
    const userId = decoded.userId;
    const fetching = await fetch(
      `${process.env.STRAPI_PROTOCOL}://${process.env.STRAPI_HOST}/api/sell-apartment`,
      {
        method: "POST",
        headers: {
          Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ flatNum, telegram_id: userId }),
      }
    );
    const fetchingData = await fetching.json();
    return new Response(JSON.stringify({ ...fetchingData }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response("Apart not sold", {
      status: 401,
    });
  }
}
