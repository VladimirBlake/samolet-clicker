/**
 * A set of functions called "actions" for `sell-apartment`
 */

export default {
  sell: async (ctx, next) => {
    try {
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
