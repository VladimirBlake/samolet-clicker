export default {
  routes: [
    {
      method: "POST",
      path: "/read-vk",
      handler: "read-vk.readVk",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
