/**
 * A set of functions called "actions" for `subscribe-vk`
 */

export default {
  subscribeVk: async (ctx) => {
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

      if (!tgUser.is_subscribed_to_vk) {
        await strapi.documents("api::telegram-user.telegram-user").update({
          documentId: tgUser.documentId,
          data: {
            is_subscribed_to_vk: true,
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
