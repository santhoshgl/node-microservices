const express = require("express");
const cors = require("cors");
const { customer, appEvents } = require("./api");
const { CreateChannel, SubscribeMessage } = require("./utils");

module.exports = async (app) => {
  app.use(express.json());
  app.use(cors());
  app.use(express.static(__dirname + "/public"));

  //api
  // appEvents(app);
  try {
    const channel = await CreateChannel();
    customer(app, channel);
  } catch (err) {
    console.log(err);
  }

  // error handling
};
