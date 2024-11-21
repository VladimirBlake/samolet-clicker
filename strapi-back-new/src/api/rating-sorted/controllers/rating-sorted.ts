/**
 * A set of functions called "actions" for `rating-sorted`
 */

export default {
  getRating: async (ctx) => {
    try {
      const { type } = ctx.params;
      const users = await strapi
        .documents("api::telegram-user.telegram-user")
        .findMany({
          populate: {
            apartments: {
              fields: ["isSold"],
            },
          },
        });

      const usersWithApartNums = users.map((user) => {
        return {
          profilePicUrl: user.photo_url,
          username: user.username,
          stats: {
            balance: user.coinsBalance,
            buildingLevel: user.level,
            apartmentsNum:
              user.apartments?.reduce(
                (a, apartment) => a + (apartment.isSold ? 0 : 1),
                0
              ) || 0,
          },
        };
      });

      switch (type) {
        case "all":
          usersWithApartNums.sort((a, b) => {
            if (a.stats.buildingLevel > b.stats.buildingLevel) {
              return -1;
            } else if (a.stats.buildingLevel === b.stats.buildingLevel) {
              if (a.stats.balance > b.stats.balance) {
                return -1;
              } else if (a.stats.balance === b.stats.balance) {
                return b.stats.apartmentsNum - a.stats.apartmentsNum;
              } else {
                return 1;
              }
            } else {
              return 1;
            }
          });
          break;
        case "level":
          usersWithApartNums.sort(
            (a, b) => b.stats.buildingLevel - a.stats.buildingLevel
          );
          break;
        case "balance":
          usersWithApartNums.sort((a, b) => b.stats.balance - a.stats.balance);
          break;
        case "apartments":
          usersWithApartNums.sort(
            (a, b) => b.stats.apartmentsNum - a.stats.apartmentsNum
          );
          break;
        default:
          throw new Error("Wrong sort type");
      }

      ctx.body = { usersWithApartNums: usersWithApartNums };
    } catch (err) {
      ctx.body = err;
    }
  },
};
