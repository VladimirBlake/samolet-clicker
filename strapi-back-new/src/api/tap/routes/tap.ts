export default {
  routes: [
    {
      method: "POST",
      path: "/tap",
      handler: "tap.addTaps",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
