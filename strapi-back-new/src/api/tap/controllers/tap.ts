/**
 * A set of functions called "actions" for `tap`
 */

import { Bot } from "grammy";

export default {
  async addTaps(ctx) {
    try {
      const { body } = ctx.request;
      let { documentId, coinsBalance, currentXp, level, id, chat_id } =
        await strapi.documents("api::telegram-user.telegram-user").findFirst({
          filters: {
            telegram_id: {
              $eq: body.telegram_id,
            },
          },
        });

      const oldLevel = level;
      const oldXp = currentXp;

      if (body.xp + currentXp >= 5000) {
        const levelUpgrades = Math.floor((body.xp + currentXp) / 5000);
        level = Math.min(7, level + levelUpgrades);
        if (level === 7 && oldLevel + levelUpgrades > 7) {
          currentXp = 4999;
        } else {
          currentXp = (body.xp + currentXp) % 5000;
        }
      } else {
        currentXp += body.xp;
      }

      if (
        ((oldXp < 4999 && oldLevel === 7) || oldLevel < 7) &&
        level === 7 &&
        currentXp === 4999
      ) {
        const promocodeLeft = await strapi
          .documents("api::promocode.promocode")
          .findFirst({
            filters: {
              telegram_user: {
                id: {
                  $null: true,
                },
              },
            },
            populate: ["telegram_user"],
          });

        if (promocodeLeft?.documentId) {
          await strapi.documents("api::promocode.promocode").update({
            documentId: promocodeLeft.documentId,
            data: {
              telegram_user: {
                id: id,
              },
            },
            populate: ["telegram_user"],
            status: "published",
          });

          const bot = new Bot(strapi.config.get("server.telergamToken"));
          if (chat_id) {
            await bot.api.sendMessage(
              Number(chat_id),
              `Ваш промокод на покупку квартиры: ${promocodeLeft.promocode_id}`
            );
          }
        }

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
