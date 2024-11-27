export default {
  routes: [
    {
      method: "POST",
      path: "/subscribe-vk",
      handler: "subscribe-vk.subscribeVk",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
