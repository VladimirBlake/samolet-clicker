/**
 * A set of functions called "actions" for `update-coins`
 */

export default {
  updateFunc: async (ctx) => {
    try {
      const { body } = ctx.request;
      let { documentId, coinsBalance } = await strapi
        .documents("api::telegram-user.telegram-user")
        .findFirst({
          filters: {
            telegram_id: {
              $eq: body.telegram_id,
            },
          },
        });
      const update = await strapi
        .documents("api::telegram-user.telegram-user")
        .update({
          documentId,
          status: "published",
          data: {
            coinsBalance: coinsBalance + body.coins,
          },
        });
      ctx.body = update.documentId;
    } catch (err) {
      ctx.body = err;
    }
  },
};
