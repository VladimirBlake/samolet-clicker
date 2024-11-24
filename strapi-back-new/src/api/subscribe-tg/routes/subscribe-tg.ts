export default {
  routes: [
    {
      method: "POST",
      path: "/subscribe-tg",
      handler: "subscribe-tg.getBonus",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
