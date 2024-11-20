import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookiesStore = await cookies();
  const { searchParams } = new URL(request.url);
  const flatNum = searchParams.get("flatNum");
  const jwtToken = cookiesStore.get("jwtToken")?.value || "";
  try {
    const decoded: jwt.JwtPayload = jwt.verify(
      jwtToken,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload;
    const userId = decoded.userId;
    const response = await fetch(
      `${process.env.STRAPI_PROTOCOL}://${process.env.STRAPI_HOST}/api/apartments?filters[telegram_user][telegram_id][$eq]=${userId}&filters[flatNum][$eq]=${flatNum}&populate[telegram_user][fields][0]=telegram_id&status=published`,
      {
        method: "GET",
        headers: { Authorization: `bearer ${process.env.STRAPI_TOKEN}` },
      }
    );
    const responseJson = await response.json();
    const apartmentData = responseJson.data[0];
    return new Response(JSON.stringify({ apartmentInfo: apartmentData }), {
      status: 200,
    });
  } catch {
    return new Response("Error: getting user info", {
      status: 401,
    });
  }
}
