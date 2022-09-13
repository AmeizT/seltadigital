const myPWA = require("next-pwa");

module.exports = myPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  }
})
