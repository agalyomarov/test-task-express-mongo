import Car from "../models/Car.js";

export const store = async (req, res) => {
  try {
    const { brand, model, price, imageUrl, engine, hp, transmission } = req.body;
    const car = new Car({ brand, model, price, imageUrl, engine, hp, transmission });
    await car.save();
    res.status(201).json({ message: "Машина успешно создана" });
  } catch (error) {
    res.status(500).json({ message: "Ошибка при создании машины" });
  }
};

export const update = async (req, res) => {
  try {
    const { brand, model, price, imageUrl, engine, hp, transmission } = req.body;
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Машина не найдена" });
    }
    car.brand = brand;
    car.model = model;
    car.price = price;
    car.imageUrl = imageUrl;
    car.engine = engine;
    car.hp = hp;
    car.transmission = transmission;
    await car.save();
    res.status(200).json({ message: "Машина успешно обновлена" });
  } catch (error) {
    res.status(500).json({ message: "Ошибка при обновлении машины" });
  }
};

export const destroy = async (req, res) => {
  try {
    await Car.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Машина успешно удалена" });
  } catch (error) {
    res.status(500).json({ message: "Ошибка при удалении машины" });
  }
};
