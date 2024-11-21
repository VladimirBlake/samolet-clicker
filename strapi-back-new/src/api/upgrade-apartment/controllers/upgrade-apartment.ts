/**
 * A set of functions called "actions" for `upgrade-apartment`
 */

export default {
  upgrade: async (ctx) => {
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
      if (!isUpgraded) {
        let response = await strapi
          .documents("api::apartment.apartment")
          .update({
            documentId,
            data: {
              isUpgraded: true,
            },
            status: "published",
          });
        let coinsSpendingResponse = await strapi
          .documents("api::telegram-user.telegram-user")
          .update({
            documentId: telegram_user.documentId,
            data: {
              coinsBalance: telegram_user.coinsBalance - 2500,
            },
            status: "published",
          });
      } else {
        throw Error("Apartment is upgraded already");
      }
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
