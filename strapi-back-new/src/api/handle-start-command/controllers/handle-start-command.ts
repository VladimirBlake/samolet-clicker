/**
 * A set of functions called "actions" for `handle-start-command`
 */

export default {
  start: async (ctx) => {
    try {
      const { body } = ctx.request;
      const attemptToFind = await strapi
        .documents("api::telegram-user.telegram-user")
        .findFirst({
          filters: {
            telegram_id: body.telegram_id,
          },
        });
      if (!attemptToFind?.documentId) {
        const createUser = await strapi
          .documents("api::telegram-user.telegram-user")
          .create({
            data: {
              username: body.username,
              telegram_id: body.telegram_id,
              first_name: body.first_name,
              last_name: body.last_name,
              telegram_username: body.telegram_username,
              coinsBalance: 0,
              chat_id: body.chat_id,
            },
            status: "published",
          });
      } else {
        const updateUser = await strapi
          .documents("api::telegram-user.telegram-user")
          .update({
            documentId: attemptToFind.documentId,
            data: {
              chat_id: body.chat_id,
            },
            status: "published",
          });
      }
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
