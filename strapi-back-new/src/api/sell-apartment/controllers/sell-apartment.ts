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

      const { apartments } = await strapi
        .documents("api::telegram-user.telegram-user")
        .findOne({
          documentId: telegram_user.documentId,
          populate: ["apartments"],
        });

      const notSoldApartments = apartments.filter(
        (apartment) => !apartment.isSold
      );
      let optionalBonus = 0;
      if (notSoldApartments.length === 4) {
        optionalBonus = 500;
      } else if (notSoldApartments.length === 1) {
        optionalBonus = 900;
      }

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
              telegram_user.coinsBalance +
              (isUpgraded ? 15000 : 10000) +
              optionalBonus,
          },
          status: "published",
        });
      ctx.body = { data: { bonus: optionalBonus } };
    } catch (err) {
      ctx.body = err;
    }
  },
};
