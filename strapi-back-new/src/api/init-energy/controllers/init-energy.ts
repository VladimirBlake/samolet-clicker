/**
 * A set of functions called "actions" for `init-energy`
 */

export default {
  setEnergy: async (ctx) => {
    try {
      const { body } = ctx.request;
      const user = await strapi
        .documents("api::telegram-user.telegram-user")
        .findFirst({
          filters: {
            telegram_id: {
              $eq: body.telegram_id,
            },
          },
        });
      const userLastUpdated = new Date(user.updatedAt);
      const timeDifference = (Date.now() - userLastUpdated.getTime()) / 1000;
      const newEnergy = user.energy + Math.round(timeDifference * 0.83333333);
      await strapi.documents("api::telegram-user.telegram-user").update({
        documentId: user.documentId,
        data: {
          energy: newEnergy,
        },
        status: "published",
      });
      ctx.body = { energy: newEnergy };
    } catch (err) {
      ctx.body = err;
    }
  },
};
