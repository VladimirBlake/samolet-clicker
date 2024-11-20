export default {
  routes: [
    {
      method: "POST",
      path: "/upgrade-apartment",
      handler: "upgrade-apartment.upgrade",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
