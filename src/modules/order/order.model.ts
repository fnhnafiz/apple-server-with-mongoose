import { model, Schema, Types } from "mongoose";
import { IAddress, IOrder } from "./order.interface";
import { Apple } from "../apple/apple.model";

const addressSchema = new Schema<IAddress>(
  {
    zipcode: String,
    state: String,
    country: String,
    street: String,
  },
  {
    versionKey: false,
    _id: false,
  }
);

const orderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    apple: { type: Schema.Types.ObjectId, ref: "Apple", required: true },
    quantity: { type: Number, min: 0 },
    totalPrice: { type: Number, min: 0 },
    //   address: {
    //     zipcode: String,
    //     state: String,
    //     country: String,
    //     street: String,
    //   },
    address: { type: addressSchema },
    status: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// orderSchema.pre("save", async function (doc) {
//   // console.log("this is apple field value:", this.apple);
//   console.log("doc from pree:", doc);
//   // console.log("this doc from pre hooks:", this);
//   const apple = await Apple.findById(this.apple);
//   if (!apple) throw new Error("Apple not found");
//   // this.totalPrice = apple.price * this.totalPrice;
//   this.totalPrice = apple.price * this.quantity;
// });

// orderSchema.pre("save", async function () {
//   // console.log("Doc from pre:" + this);
//   const apple = await Apple.findById(this.apple._id);
//   console.log("this is appleId:", apple._id);
//   if (!apple) throw new Error("Apple not found");
//   this.totalPrice = apple.price * this.quantity;
// });
// orderSchema.post("save", function (doc, next) {
//   console.log("doc from pre:" + doc);
//   next();
// });

// bojha zay na kotha

// valo thaiko allah hapej!!!

orderSchema.pre("save", async function () {
  // this.apple is already ObjectId, no need for _id
  if (!Types.ObjectId.isValid(this.apple)) {
    throw new Error("Invalid Apple ID");
  }

  const apple = await Apple.findById(this.apple);
  if (!apple) throw new Error("Apple not found");

  // calculate total price
  this.totalPrice = apple.price * this.quantity;
});

const Order = model("Order", orderSchema);
export default Order;
