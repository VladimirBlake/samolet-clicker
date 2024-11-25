export default {
  routes: [
    {
      method: "POST",
      path: "/init-energy",
      handler: "init-energy.setEnergy",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
