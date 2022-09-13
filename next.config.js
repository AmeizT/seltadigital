/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const myPWA = require("next-pwa")
module.exports = myPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  }
})
