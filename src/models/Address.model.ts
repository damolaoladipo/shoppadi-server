import mongoose, { Schema } from "mongoose";
import { DbModels } from "../utils/enum.util";
import { IAddress } from "../utils/interface.util";

const AddressSchema = new Schema<IAddress>(
  {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  { _id: false } 
);

const Address = mongoose.model(DbModels.ADDRESS, AddressSchema);

export default Address;