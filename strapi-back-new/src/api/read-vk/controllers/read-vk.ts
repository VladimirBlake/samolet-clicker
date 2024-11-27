/**
 * A set of functions called "actions" for `read-vk`
 */

export default {
  readVk: async (ctx) => {
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

      if (!tgUser.have_read_about_samolet) {
        await strapi.documents("api::telegram-user.telegram-user").update({
          documentId: tgUser.documentId,
          data: {
            have_read_about_samolet: true,
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
