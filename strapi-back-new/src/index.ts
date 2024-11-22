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

      if (context.action === "create") {
        const bot = new Bot(strapi.config.get("server.telergamToken"));
        await bot.api.sendMessage(
          406345426,
          JSON.stringify(context.params.data)
        );
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
