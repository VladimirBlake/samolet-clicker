/**
 * A set of functions called "actions" for `subscribe-tg`
 */

export default {
  getBonus: async (ctx) => {
    try {
      const { body } = ctx.request;
      const tgUser = await strapi
        .documents("api::telegram-user.telegram-user")
        .findFirst({
          filters: {
            telegram_id: {
              $eq: body.telegram_id,
            },
          },
        });

      if (!tgUser.is_subscribed_to_channel) {
        await strapi.documents("api::telegram-user.telegram-user").update({
          documentId: tgUser.documentId,
          data: {
            is_subscribed_to_channel: true,
            coinsBalance: tgUser.coinsBalance + 200,
          },
          status: "published",
        });
        ctx.body = { bonus: 200 };
      } else {
        ctx.body = { bonus: 0 };
      }
    } catch (err) {
      ctx.body = err;
    }
  },
};
