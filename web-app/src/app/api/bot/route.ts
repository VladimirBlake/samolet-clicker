export const dynamic = "force-dynamic";

export const fetchCache = "force-no-store";

import { Bot, webhookCallback } from "grammy";
import { Menu } from "@grammyjs/menu";

const token = process.env.TELERGAM_API_TOKEN;

if (!token)
  throw new Error("TELEGRAM_API_TOKEN environment variable not found.");

const menu = new Menu("start-command-menu").webApp(
  "Играть",
  "https://24samolet.ru/"
);

const bot = new Bot(token);
bot.use(menu);
bot.command("start", async (ctx) => {
  await ctx.reply(
    `Приготовьтесь к захватывающей стройке!
Стройте здание, зарабатывайте очки и наслаждайтесь результатом. А в финале вас ждет бонус — скидка 8% на квартиры от Самолет!`,
    {
      reply_markup: menu,
    }
  );
  const userData = {
    username: ctx?.from?.username
      ? ctx.from.username
      : ctx?.from?.first_name + " " + (ctx?.from?.last_name || ""),
    telegram_id: ctx.from?.id.toString(),
    first_name: ctx?.from?.first_name,
    last_name: ctx?.from?.last_name || "",
    telegram_username: ctx?.from?.username || "",
    chat_id: ctx.chatId.toString(),
  };
  try {
    await fetch(
      `${process.env.STRAPI_PROTOCOL}://${process.env.STRAPI_HOST}/api/handle-start-command`,
      {
        method: "POST",
        headers: {
          Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
  } catch (err) {}
});

export const POST = webhookCallback(bot, "std/http");
