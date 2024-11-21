export default {
  routes: [
    {
      method: "POST",
      path: "/update-coins",
      handler: "update-coins.updateFunc",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
