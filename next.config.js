/** @type {import('next').NextConfig} */
const path = require("path");
const fs = require("fs");
const envPath = path.resolve(__dirname, ".vercel/.env.development.local");
const env = fs.readFile(envPath, "utf8", (err, data) => {
  if (err) return err.message;

  const envObj = {};

  const dataArray = data.split("\n");
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].includes("=")) {
      const temp = dataArray[i].split("=");

      envObj[temp[0]] = temp[1].substring(1, temp[1].length - 1).trim();
    }
  }
  return envObj;
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "source.unsplash."],
  },
  env: env,
};

module.exports = nextConfig;
