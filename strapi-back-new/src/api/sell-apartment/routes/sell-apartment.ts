export default {
  routes: [
    {
      method: "POST",
      path: "/sell-apartment",
      handler: "sell-apartment.sell",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
