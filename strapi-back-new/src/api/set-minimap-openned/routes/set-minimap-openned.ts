export default {
  routes: [
    {
      method: "POST",
      path: "/set-minimap-openned",
      handler: "set-minimap-openned.setOpenned",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
