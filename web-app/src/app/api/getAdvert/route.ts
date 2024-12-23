export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  try {
    const response = await fetch(
      `${process.env.STRAPI_PROTOCOL}://${process.env.STRAPI_HOST}/api/advertisement`,
      {
        method: "GET",
        headers: { Authorization: `bearer ${process.env.STRAPI_TOKEN}` },
        cache: "no-store",
      }
    );
    const responseJson = await response.json();
    const advertData = responseJson;
    return new Response(JSON.stringify({ ...advertData }), {
      status: 200,
    });
  } catch {
    return new Response("Error: getting user info", {
      status: 401,
    });
  }
}
