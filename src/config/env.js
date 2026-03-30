import "dotenv/config";

const getEnv = (key, fallback) => {
  const value = process.env[key];
  if (value === undefined || value === "") return fallback;
  return value;
};

export const env = {
  NODE_ENV: getEnv("NODE_ENV", "development"),
  PORT: Number(getEnv("PORT", "4000")),
  MONGO_URI: getEnv("MONGO_URI", "mongodb://127.0.0.1:27017/dairy-drop"),
  JWT_SECRET: getEnv("JWT_SECRET", "change-me"),
  JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "1d"),
  SESSION_SECRET: getEnv("SESSION_SECRET", "dairy-drop"),
  ADMIN_EMAIL: getEnv("ADMIN_EMAIL"),
  CORS_ORIGIN: getEnv("CORS_ORIGIN", "*"),
  RATE_LIMIT_WINDOW_MS: Number(
    getEnv("RATE_LIMIT_WINDOW_MS", String(15 * 60 * 1000)),
  ),
  RATE_LIMIT_MAX: Number(getEnv("RATE_LIMIT_MAX", "200")),
  CLOUDINARY_CLOUD_NAME: getEnv("CLOUDINARY_CLOUD_NAME"),
  CLOUDINARY_API_KEY: getEnv("CLOUDINARY_API_KEY"),
  CLOUDINARY_API_SECRET: getEnv("CLOUDINARY_API_SECRET"),
  STRIPE_SECRET_KEY: getEnv("STRIPE_SECRET_KEY"),
  STRIPE_WEBHOOK_SECRET: getEnv("STRIPE_WEBHOOK_SECRET"),
  STRIPE_CURRENCY: getEnv("STRIPE_CURRENCY", "pkr"),
  CLIENT_URL_SUCCESS: getEnv(
    "CLIENT_URL_SUCCESS",
    "http://localhost:5173/orders",
  ),
  CLIENT_URL_CANCEL: getEnv("CLIENT_URL_CANCEL", "http://localhost:5173/cart"),
  GOOGLE_CLIENT_ID: getEnv("GOOGLE_CLIENT_ID"),
  GOOGLE_CLIENT_SECRET: getEnv("GOOGLE_CLIENT_SECRET"),
  GOOGLE_CALLBACK_URL: getEnv("GOOGLE_CALLBACK_URL", "http://localhost:4000/api/auth/google/callback"),
  ADMIN_PHONE: getEnv("ADMIN_PHONE"),
  ADMIN_PASSWORD: getEnv("ADMIN_PASSWORD"),
  CLIENT_URL: getEnv("CLIENT_URL", "http://localhost:5173"),
};
