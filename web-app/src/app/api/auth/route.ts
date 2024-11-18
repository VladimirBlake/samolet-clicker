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
        const userId = parsedData.user?.id;
        const userJwt = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
          expiresIn: "10h",
        });
        cookiesStore.set("jwtToken", userJwt, { maxAge: 36000 });
        // const request = fetch(`${process.env.STRAPI_PROTOCOL}://`);
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
