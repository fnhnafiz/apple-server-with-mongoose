import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true, trim: true, min: 3, max: 25 },
  email: {
    type: String,
    required: true,
    unique: [true, "Why using the same mail!!"],
    validate: {
      validator: function (value) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        );
      },
      message: (props) =>
        `${props.value} is not a valid email!! please provide a valid email`,
    },
  },
  phone: { type: String, required: [true, "Please use another number!!"] },
  password: { type: String, required: true },
  address: { type: String, required: true },
  role: {
    type: String,
    enum: { values: ["Admin", "Customer"], message: "{VALUE} is not provide" },
    required: true,
  },
});

const User = model("User", userSchema);

export default User;
