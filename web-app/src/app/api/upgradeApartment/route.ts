import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { ApartKey } from "@/lib/features/apartments/apartmentsSlice";

export async function POST(request: Request) {
  const cookiesStore = await cookies();
  const requestBody: { flatNum: ApartKey } = await request.json();
  const { flatNum } = requestBody;
  const jwtToken = cookiesStore.get("jwtToken")?.value || "";
  try {
    const decoded: jwt.JwtPayload = jwt.verify(
      jwtToken,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload;
    const userId = decoded.userId;
    fetch(
      `${process.env.STRAPI_PROTOCOL}://${process.env.STRAPI_HOST}/api/upgrade-apartment`,
      {
        method: "POST",
        headers: {
          Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ flatNum, telegram_id: userId }),
      }
    ).then((res) => {
      if (!res.ok) {
        throw Error("Error in fetch request");
      }
      console.log(res.body);
    });
    return new Response("Apart upgraded", {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response("Apart not upgraded", {
      status: 401,
    });
  }
}
