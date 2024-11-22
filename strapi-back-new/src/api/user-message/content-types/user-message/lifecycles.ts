import { Bot } from "grammy";

export default {
  async afterCreate(event) {
    const { result, params } = event;
    const bot = new Bot(strapi.config.get("server.telergamToken"));
    if (params.data?.telegram_user?.chat_id) {
      await bot.api.sendMessage(
        Number(params.data.telegram_user.chat_id),
        params.data?.message
      );
    }
  },
};
