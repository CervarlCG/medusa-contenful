const dotenv = require("dotenv");
dotenv.config();

// CORS when consuming Medusa from admin
const ADMIN_CORS = process.env.ADMIN_CORS || "*";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || "http://localhost:8000";

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL =
  process.env.DATABASE_URL || "postgres://localhost/medusa-store";

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

// Stripe keys
const STRIPE_API_KEY = process.env.STRIPE_API_KEY || "TEST_API_KEY";
const STRIPE_WEBHOOK_SECRET =
  process.env.STRIPE_WEBHOOK_SECRET || "https://example.com";

// Contentful Variables
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID || "";
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || "";
const CONTENTFUL_ENV = process.env.CONTENTFUL_ENV || "";

// This is the place to include plugins. See API documentation for a thorough guide on plugins.

const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  `medusa-payment-paypal`,
  {
    resolve: "medusa-hygraph-pim",
    options: {
      apiUrl: process.env.HYGRAPH_URL,
      apiAuthorization: process.env.HYGRAPH_TOKEN,
    },
  },
  {
    resolve: "@medusajs/admin",
    /** @type {import('@medusajs/admin').PluginOptions} */
    options: {
      // ...
      autoRebuild: true,
    },
  },
  // Uncomment to add Stripe support.
  // You can create a Stripe account via: https://stripe.com
  {
    resolve: `medusa-payment-stripe`,
    options: {
      api_key: STRIPE_API_KEY,
      webhook_secret: STRIPE_WEBHOOK_SECRET,
    },
  },
];

if (process.env.NODE_ENV !== "production") plugins.push("@medusajs/file-local");

module.exports = {
  projectConfig: {
    redis_url: REDIS_URL,
    // For more production-like environment install PostgresQL
    database_url: DATABASE_URL,
    database_type: "postgres",
    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
    jwtSecret: process.env.JWT_SECRET,
    cookieSecret: process.env.COOKIE_SECRET,
  },
  plugins,
};
