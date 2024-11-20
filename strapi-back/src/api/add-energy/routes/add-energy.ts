export default {
  routes: [
    {
      method: "POST",
      path: "/add-energy",
      handler: "add-energy.plusEnergy",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
