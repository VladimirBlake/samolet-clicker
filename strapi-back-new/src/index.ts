// @ts-nocheck
// import type { Core } from '@strapi/strapi';
import { Bot } from "grammy";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register() {
    strapi.documents.use(async (context, next) => {
      if (context.uid !== "api::user-message.user-message") {
        return next();
      }

      if (context.action === "create" && context.params.data?.telegram_user) {
        const { chat_id } = await strapi
          .documents("api::telegram-user.telegram-user")
          .findOne({
            documentId: context.params.data.telegram_user.connect[0].documentId,
            fields: ["chat_id"],
          });
        if (chat_id) {
          const bot = new Bot(strapi.config.get("server.telergamToken"));
          await bot.api.sendMessage(
            Number(chat_id),
            context.params.data.message
          );
        }
      }

      return next();
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
