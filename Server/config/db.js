const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGO_URL;
if (!uri) {
  throw new Error("Mongo URI is missing. Please set it in the .env file.");
}

(async function () {
  let connection;

  async function connectToDb() {
    if (!connection) {
      connection = await mongoose.connect(uri);
      console.log("Established new connection to MongoDB.");
    }

    return connection;
  }

  async function closeConnection() {
    if (connection) {
      await connection.close();
      console.log("Closed connection to MongoDB.");
    }
  }

  module.exports = {
    connectToDb,
    closeConnection, // Optional export
  };
})();
