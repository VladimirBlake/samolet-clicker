export const dynamic = "force-dynamic";

export const fetchCache = "force-no-store";

import { Bot, webhookCallback } from "grammy";
import { Menu } from "@grammyjs/menu";

const token = process.env.TELEGRAM_API_TOKEN;

if (!token)
  throw new Error("TELEGRAM_API_TOKEN environment variable not found.");

const menu = new Menu("start-command-menu")
  .webApp("Играть", "https://24samolet.ru/")
  .text("Инструкция");

const bot = new Bot(token);
bot.command("start", async (ctx) => {
  await ctx.reply(
    "Привет!👋 <br/>Рады приветствовать тебя в чат-боте компании «Самолет",
    {
      reply_markup: menu,
      parse_mode: "HTML",
    }
  );
});

export const POST = webhookCallback(bot, "std/http");
