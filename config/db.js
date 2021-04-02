import mongoose from "mongoose";
import Coffee from "../models/coffeeModel.js";

const connectDB = async () => {
  try {
    //database Name
    const databaseName = "coffee-bible";
    console.log(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ugwlq.mongodb.net/${databaseName}?retryWrites=true&w=majority`
    );
    const con = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ugwlq.mongodb.net/${databaseName}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log(`Database connected : ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
