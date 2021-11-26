module.exports = {
  reactStrictMode: true,
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    BUSINESS_EMAIL: process.env.BUSINESS_EMAIL,
    NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
