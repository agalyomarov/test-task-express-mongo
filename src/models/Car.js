import mongoose from "mongoose";

const newCarSchema = mongoose.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    engine: { type: String, required: true },
    hp: { type: String, required: true },
    transmission: { type: String, required: true },
  },
  { timestamps: true }
);

const NewCar = mongoose.model("NewCar", newCarSchema);
export default NewCar;
