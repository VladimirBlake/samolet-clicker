export default {
  routes: [
    {
      method: "POST",
      path: "/handle-start-command",
      handler: "handle-start-command.start",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
