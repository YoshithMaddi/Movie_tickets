import mangoose from "mongoose";
const connectDB = async () => {
  try {
    mangoose.connection.on("connected", () =>
      console.log("Database connected")
    );

    await mangoose.connect(`${process.env.MONGODV_URI}/quickshow`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;