/**
 * A set of functions called "actions" for `set-energy`
 */

export default {
  setEnergy: async (ctx) => {
    try {
      const { body } = ctx.request;
      const user = await strapi
        .documents("api::telegram-user.telegram-user")
        .findFirst({
          filters: {
            telegram_id: body.telegram_id,
          },
        });
      const date = new Date(Date.now()).toISOString();
      const update = await strapi
        .documents("api::telegram-user.telegram-user")
        .update({
          documentId: user.documentId,
          data: {
            energy: body.energy,
            updatedLastTime: date,
          },
          status: "published",
        });
      ctx.body = { status: "ok" };
    } catch (err) {
      ctx.body = err;
    }
  },
};
