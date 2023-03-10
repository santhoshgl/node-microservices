const dotEnv = require("dotenv");

module.exports = {
  PORT: 8001,
  DB_URL: "mongodb://mongodb:27017/customers",
  APP_SECRET: "jg_youtube_tutorial",
  EXCHANGE_NAME: "ONLINE_STORE",
  MSG_QUEUE_URL: "amqp://nodejs_microservice-rabbitmq-1",
  CUSTOMER_SERVICE: "customer_service",
  SHOPPING_SERVICE: "shopping_service",
};
