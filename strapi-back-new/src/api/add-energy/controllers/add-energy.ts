/**
 * A set of functions called "actions" for `add-energy`
 */

export default {
  plusEnergy: async (ctx) => {
    try {
      const { body } = ctx.request;
      let { documentId, energy, coinsBalance } = await strapi
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
            energy: Math.min(5000, energy + body.energy),
            coinsBalance: coinsBalance - body.coins,
            updatedLastTime: new Date(Date.now()).toISOString(),
          },
        });
      ctx.body = documentId;
    } catch (err) {
      ctx.body = err;
    }
  },
};
