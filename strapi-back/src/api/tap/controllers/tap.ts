/**
 * A set of functions called "actions" for `tap`
 */

export default {
  async addTaps(ctx) {
    try {
      const { body } = ctx.request;
      let { documentId, coinsBalance, currentXp, level } = await strapi
        .documents("api::telegram-user.telegram-user")
        .findFirst({
          filters: {
            telegram_id: {
              $eq: body.telegram_id,
            },
          },
        });
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
