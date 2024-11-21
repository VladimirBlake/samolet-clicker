/**
 * A set of functions called "actions" for `sell-apartment`
 */

export default {
  sell: async (ctx) => {
    try {
      const { body } = ctx.request;
      let { documentId, isUpgraded, telegram_user } = await strapi
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
              fields: ["telegram_id", "coinsBalance"],
            },
          },
        });
      let response = await strapi.documents("api::apartment.apartment").update({
        documentId,
        data: {
          isSold: true,
        },
        status: "published",
      });
      let coinsSpendingResponse = await strapi
        .documents("api::telegram-user.telegram-user")
        .update({
          documentId: telegram_user.documentId,
          data: {
            coinsBalance:
              telegram_user.coinsBalance + (isUpgraded ? 12500 : 10000),
          },
          status: "published",
        });
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
