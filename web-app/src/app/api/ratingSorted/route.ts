export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sortType = searchParams.get("sortType");
  try {
    const response = await fetch(
      `${process.env.STRAPI_PROTOCOL}://${process.env.STRAPI_HOST}/api/rating-sorted/${sortType}`,
      {
        method: "GET",
        headers: { Authorization: `bearer ${process.env.STRAPI_TOKEN}` },
      }
    );
    const responseJson = await response.json();
    const userData = responseJson;
    return new Response(JSON.stringify({ userData }), {
      status: 200,
    });
  } catch {
    return new Response("Error: getting user info", {
      status: 401,
    });
  }
}
