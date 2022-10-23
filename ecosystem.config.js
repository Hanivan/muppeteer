module.exports = {
  apps: [
    {
      name: "muppeteer",
      script: "./dist/index.js",
      watch: ".dist",
    },
  ],

  deploy: {
    production: {
      user: "app",
      host: [
        {
          host: "YOUR SERVER",
          port: "22",
        },
      ],
      ref: "origin/dev",
      repo: "git@github.com:Hanivan/muppeteer.git",
      path: "/home/app/GitHub",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && npm run build && pm2 start ecosystem.config.js --name muppeteer",
      "pre-deploy": "",
      "pre-setup": "",
    },
  },
};
