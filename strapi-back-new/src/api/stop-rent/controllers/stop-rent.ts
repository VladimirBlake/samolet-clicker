/**
 * A set of functions called "actions" for `stop-rent`
 */

export default {
  stopRental: async (ctx) => {
    try {
      const { body } = ctx.request;
      let { documentId } = await strapi
        .documents("api::apartment.apartment")
        .findFirst({
          filters: {
            telegram_user: {
              telegram_id: {
                $eq: body.telegram_id,
              },
            },
            flatNum: {
              $eq: body.flatNum,
            },
          },
          populate: {
            telegram_user: {
              fields: ["telegram_id"],
            },
          },
        });
      let response = await strapi.documents("api::apartment.apartment").update({
        documentId,
        data: {
          isRented: false,
        },
        status: "published",
      });
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
