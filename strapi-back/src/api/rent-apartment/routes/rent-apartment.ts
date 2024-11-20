export default {
  routes: [
    {
      method: "POST",
      path: "/rent-apartment",
      handler: "rent-apartment.rent",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
