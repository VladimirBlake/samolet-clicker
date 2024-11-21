import { parse, validate } from "@telegram-apps/init-data-node";
import { cookies, headers } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  const headersList = await headers();
  const cookiesStore = await cookies();
  const [authType, initData = ""] = (
    headersList.get("authorization") || ""
  ).split(" ");
  switch (authType) {
    case "tma":
      try {
        validate(initData, process.env.TELERGAM_API_TOKEN as string, {
          expiresIn: 3600,
        });
        const parsedData = parse(initData);
        const userId = parsedData.user?.id?.toString();
        const userData = {
          username: parsedData.user?.username
            ? parsedData.user.username
            : parsedData.user?.firstName +
              " " +
              (parsedData.user?.lastName || ""),
          telegram_id: userId,
          first_name: parsedData.user?.firstName,
          last_name: parsedData.user?.lastName || "",
          telegram_username: parsedData.user?.username || "",
          photo_url: parsedData.user?.photoUrl,
          coinsBalance: 0,
        };
        const userJwt = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
          expiresIn: "10h",
        });
        cookiesStore.set("jwtToken", userJwt, { maxAge: 36000 });
        fetch(
          `${process.env.STRAPI_PROTOCOL}://${process.env.STRAPI_HOST}/api/telegram-users?filters[telegram_id][$eq]=${userId}`,
          {
            method: "GET",
            headers: { Authorization: `bearer ${process.env.STRAPI_TOKEN}` },
          }
        )
          .then((data) => data.json())
          .then((data) => {
            if (data.data.length === 0) {
              return fetch(
                `${process.env.STRAPI_PROTOCOL}://${process.env.STRAPI_HOST}/api/telegram-users`,
                {
                  method: "POST",
                  headers: {
                    Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    data: {
                      ...userData,
                    },
                  }),
                }
              );
            }
          })
          .then((response) => response?.json() || 0)
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
        return new Response(JSON.stringify({ userJwt }), {
          status: 200,
          headers: { "Set-Cookie": `jwtToken=${userJwt}` },
        });
      } catch {
        return new Response("Error in auth token validation", {
          status: 401,
        });
      }
    default:
      return new Response("Error auth method", {
        status: 401,
      });
  }
}
