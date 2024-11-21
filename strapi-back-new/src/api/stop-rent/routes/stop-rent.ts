export default {
  routes: [
    {
      method: "POST",
      path: "/stop-rent",
      handler: "stop-rent.stopRental",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
