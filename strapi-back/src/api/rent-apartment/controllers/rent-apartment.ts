/**
 * A set of functions called "actions" for `rent-apartment`
 */

export default {
  rent: async (ctx, next) => {
    try {
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
