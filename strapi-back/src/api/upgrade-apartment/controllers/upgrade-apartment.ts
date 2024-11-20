/**
 * A set of functions called "actions" for `upgrade-apartment`
 */

export default {
  upgrade: async (ctx, next) => {
    try {
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
