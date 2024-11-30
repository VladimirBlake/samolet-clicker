/**
 * A set of functions called "actions" for `set-minimap-openned`
 */

export default {
  setOpenned: async (ctx) => {
    try {
      const { body } = ctx.request;
      const user = await strapi
        .documents("api::telegram-user.telegram-user")
        .findFirst({
          filters: {
            telegram_id: body.telegram_id,
          },
        });
      const update = await strapi
        .documents("api::telegram-user.telegram-user")
        .update({
          documentId: user.documentId,
          data: {
            opened_miniapp: true,
          },
          status: "published",
        });
      ctx.body = { status: "ok" };
    } catch (err) {
      ctx.body = err;
    }
  },
};
