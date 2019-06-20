module.exports = {
  apps : [{
    name        : "DGD-app",
    script      : "./server.js",
    watch       : true,
    instances   : 1,
    exec_mode   : "cluster",
    env: {
      "PORT": 3000,
      "NODE_ENV": "development"
    },
    env_staging : {
      "PORT": 80,
      "NODE_ENV": "staging"
    },
    env_production : {
      "PORT": 80,
      "NODE_ENV": "production"
    }
  }]
}
