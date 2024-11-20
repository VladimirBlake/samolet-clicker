/**
 * A set of functions called "actions" for `tap`
 */

export default {
  async addTaps(ctx) {
    try {
      const { body } = ctx.request;
      let { documentId, coinsBalance, currentXp, level, id } = await strapi
        .documents("api::telegram-user.telegram-user")
        .findFirst({
          filters: {
            telegram_id: {
              $eq: body.telegram_id,
            },
          },
        });

      const oldLevel = level;

      if (body.xp >= 30) {
        if (level === 7) {
          currentXp = 29;
        } else {
          const levelUpgrades = Math.floor(body.xp / 30);
          const lastLevel = level;
          level = Math.min(7, level + levelUpgrades);
          if (level === 7 && lastLevel + levelUpgrades > 7) {
            currentXp = 29;
          } else {
            currentXp = body.xp - 30 * levelUpgrades;
          }
        }
      } else {
        if (body.xp + currentXp >= 30) {
          currentXp = level === 7 ? 29 : body.xp + currentXp - 30;
          level = Math.min(7, level + 1);
        } else {
          currentXp += body.xp;
        }
      }

      if (oldLevel < level && level === 7) {
        await strapi.documents("api::apartment.apartment").create({
          data: {
            flatNum: 1,
            telegram_user: id,
          },
          populate: ["telegram_user"],
          status: "published",
        });
        await strapi.documents("api::apartment.apartment").create({
          data: {
            flatNum: 2,
            telegram_user: id,
          },
          populate: ["telegram_user"],
          status: "published",
        });
        await strapi.documents("api::apartment.apartment").create({
          data: {
            flatNum: 3,
            telegram_user: id,
          },
          populate: ["telegram_user"],
          status: "published",
        });
        await strapi.documents("api::apartment.apartment").create({
          data: {
            flatNum: 4,
            telegram_user: id,
          },
          populate: ["telegram_user"],
          status: "published",
        });
        await strapi.documents("api::apartment.apartment").create({
          data: {
            flatNum: 5,
            telegram_user: id,
          },
          populate: ["telegram_user"],
          status: "published",
        });
        await strapi.documents("api::apartment.apartment").create({
          data: {
            flatNum: 6,
            telegram_user: id,
          },
          populate: ["telegram_user"],
          status: "published",
        });
        await strapi.documents("api::apartment.apartment").create({
          data: {
            flatNum: 7,
            telegram_user: id,
          },
          populate: ["telegram_user"],
          status: "published",
        });
        await strapi.documents("api::apartment.apartment").create({
          data: {
            flatNum: 8,
            telegram_user: id,
          },
          populate: ["telegram_user"],
          status: "published",
        });
      }

      const update = await strapi
        .documents("api::telegram-user.telegram-user")
        .update({
          documentId,
          status: "published",
          data: {
            coinsBalance: coinsBalance + body.coins,
            energy: body.energy,
            currentXp,
            level,
          },
        });
      ctx.body = update.documentId;
    } catch (err) {
      ctx.body = err;
    }
  },
};
