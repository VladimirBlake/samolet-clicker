import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  const cookiesStore = await cookies();
  let bonus = 0;
  const jwtToken = cookiesStore.get("jwtToken")?.value || "";
  try {
    const decoded: jwt.JwtPayload = jwt.verify(
      jwtToken,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload;
    const userId = decoded.userId;
    const requesting = await fetch(
      `${process.env.STRAPI_PROTOCOL}://${process.env.STRAPI_HOST}/api/read-vk`,
      {
        method: "POST",
        headers: {
          Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ telegram_id: userId }),
      }
    );
    const jsonData = await requesting.json();
    return new Response(JSON.stringify({ bonus: jsonData.bonus }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response("Apart not rented", {
      status: 401,
    });
  }
}
