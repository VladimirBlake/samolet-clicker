/**
 * A set of functions called "actions" for `set-profile-pic`
 */

export default {
  setPicture: async (ctx) => {
    try {
      const { body } = ctx.request;
      let user = await strapi
        .documents("api::telegram-user.telegram-user")
        .findFirst({
          filters: {
            telegram_id: {
              $eq: body.telegram_id,
            },
          },
        });
      let updateReq = await strapi
        .documents("api::telegram-user.telegram-user")
        .update({
          documentId: user.documentId,
          data: {
            photo_url: body.photo_url,
          },
          status: "published",
        });
      ctx.body = { res: "ok" };
    } catch (err) {
      ctx.body = err;
    }
  },
};
