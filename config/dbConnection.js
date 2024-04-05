const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const DATABASE_URL =
      process.env.CONNECTION_STRING || "mongodb://127.0.0.1:3001";
    const connect = await mongoose.connect(DATABASE_URL);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
