export default {
  routes: [
    {
      method: "POST",
      path: "/set-energy",
      handler: "set-energy.setEnergy",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
