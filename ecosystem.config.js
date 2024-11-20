module.exports = {
  apps: [
    {
      name: 'watermelon-game-backend',
      script: 'index.js',
      instances: process.env.PM2_INSTANCES || 1,
    },
  ],
};
