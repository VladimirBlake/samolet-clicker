import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookiesStore = await cookies();
  const jwtToken = cookiesStore.get("jwtToken")?.value || "";
  try {
    const decoded: jwt.JwtPayload = jwt.verify(
      jwtToken,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload;
    const userId = decoded.userId;
    const response = await fetch(
      `${process.env.STRAPI_PROTOCOL}://${process.env.STRAPI_HOST}/api/apartments?sort[0]=flatNum:asc&filters[telegram_user][telegram_id][$eq]=${userId}&populate[telegram_user][fields][0]=telegram_id&status=published`,
      {
        method: "GET",
        headers: { Authorization: `bearer ${process.env.STRAPI_TOKEN}` },
      }
    );
    const responseJson = await response.json();
    const apartmentsData = responseJson;
    return new Response(JSON.stringify(responseJson), {
      status: 200,
    });
  } catch {
    return new Response("Error: getting user info", {
      status: 401,
    });
  }
}
