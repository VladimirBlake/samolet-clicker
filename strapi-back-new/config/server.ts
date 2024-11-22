export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  telergamToken: env("TELEGRAM_BOT_KEY"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
