export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env.int("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
        tls: {
          // Esta parte es la clave para permitir certificados autofirmados
          rejectUnauthorized: false,
        },
      },
      settings: {
        defaultFrom: env("SMTP_USER"),
        defaultReplyTo: env("SMTP_USER"),
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",

      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),

        api_key: env("CLOUDINARY_KEY"),

        api_secret: env("CLOUDINARY_SECRET"),
      },

      actionOptions: {
        upload: {},

        delete: {},
      },
    },
  },
});
