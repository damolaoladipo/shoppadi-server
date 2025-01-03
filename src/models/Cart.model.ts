import mongoose, { Schema, Model } from "mongoose";
import { ICartDoc, IProductDoc } from "../utils/interface.util";
import { DbModels } from "../utils/enum.util";

const CartSchema = new mongoose.Schema<ICartDoc>(
  {
    users: [{ type: Schema.Types.ObjectId, ref: DbModels.USER }],
    products: [
        {
          productId: { type: Schema.Types.ObjectId, ref: DbModels.PRODUCT, required: true },
          quantity: { type: Number, required: true },
        },
      ],
    coupon: { type: String, default: null },
    checkout: { type: Boolean, default: false },

  },
  {
    timestamps: true,
    versionKey: "_version",
    toJSON: {
      transform(doc: any, ret) {
        ret.id = ret._id;
      },
    },
  }
);

CartSchema.methods.getAll = async function () {
  return Cart.find({});
};

CartSchema.methods.addToCart = function (productId: mongoose.Types.ObjectId, quantity: number) {
    const productIndex = this.products.findIndex((p: IProductDoc) => p.id.toString() === productId.toString());
  
    if (productIndex !== -1) {
      this.products[productIndex].quantity += quantity;
    } else {
      this.products.push({ productId, quantity });
    }
  
    return this.save();
  };

CartSchema.methods.removeFromCart = function (productId: mongoose.Types.ObjectId) {
    this.products = this.products.filter((p: IProductDoc) => p.id.toString() !== productId.toString());
    return this.save();
  };
  
CartSchema.methods.applyCoupon = function (coupon: string) {
    this.coupon = coupon;
    return this.save();
  };
  
CartSchema.methods.proceedToCheckout = function () {
    this.checkout = true;
    return this.save();
  };

const Cart: Model<ICartDoc> = mongoose.model<ICartDoc>(
  DbModels.CART,
  CartSchema
);

export default Cart;
