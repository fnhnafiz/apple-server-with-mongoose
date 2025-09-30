import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import userRoute from "./modules/users/user.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoute);

app.get("/", (req, res) => {
  res.send("🍎🍎🍎  APPLE Server running ");
});

app.listen(config.port, () => {
  console.log(`✳️ Server running on PORT ${config.port}`);
});
async function server() {
  try {
    // console.log(config);
    await mongoose.connect(config.database_url!);
    console.log("✅ connected to databse");
  } catch (error) {
    console.error(`Server error ${server}`);
  }
}
server();
