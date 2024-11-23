export default {
  routes: [
    {
      method: "POST",
      path: "/set-profile-pic",
      handler: "set-profile-pic.setPicture",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
