export default {
  dailyRent: {
    task: async () => {
      try {
        const rentedAparts = await strapi
          .documents("api::apartment.apartment")
          .findMany({
            filters: {
              isRented: true,
            },
            populate: {
              telegram_user: {
                fields: ["coinsBalance"],
              },
            },
            status: "published",
          });
        await Promise.all(
          rentedAparts.map(async (apartment) => {
            await strapi.documents("api::telegram-user.telegram-user").update({
              documentId: apartment.telegram_user.documentId,
              data: {
                coinsBalance:
                  apartment.telegram_user.coinsBalance +
                  (apartment.isUpgraded ? 500 : 600),
              },
              status: "published",
            });
          })
        );
        console.log("Cron task completed");
      } catch (err) {
        console.log(err);
      }
    },
    options: {
      rule: "0 0 0 * *",
      tz: "Europe/Moscow",
    },
  },
  dailyBonus: {
    task: async () => {
      try {
        const appUsers = await strapi
          .documents("api::telegram-user.telegram-user")
          .findMany({
            status: "published",
          });
        await Promise.all(
          appUsers.map(async (user) => {
            let bonus = 0;
            if (user.level <= 2) {
              bonus = 500;
            } else if (user.level <= 4) {
              bonus = 1000;
            } else {
              bonus = 1500;
            }

            await strapi.documents("api::telegram-user.telegram-user").update({
              documentId: user.documentId,
              data: {
                coinsBalance: user.coinsBalance + bonus,
              },
              status: "published",
            });
          })
        );
        console.log("Bonuses added successfully");
      } catch (err) {
        console.log(err);
      }
    },
    options: {
      rule: "0 0 0 * *",
      tz: "Europe/Moscow",
    },
  },
};
