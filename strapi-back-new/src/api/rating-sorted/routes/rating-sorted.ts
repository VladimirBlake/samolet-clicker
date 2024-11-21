export default {
  routes: [
    {
      method: "GET",
      path: "/rating-sorted/:type",
      handler: "rating-sorted.getRating",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
