export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // 👇 Asegura que Strapi use la zona horaria correcta
  cron: { enabled: true },
  timezone: 'America/Santo_Domingo',
});
