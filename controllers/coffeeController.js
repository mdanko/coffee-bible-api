import Coffee from "../models/coffeeModel.js";

export const getCoffee = async (req, res, next) => {
  try {
    const coffee = await Coffee.find({});
    res.json(coffee);
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

export const getCoffeeById = async (req, res, next) => {
  try {
    const coffee = await Coffee.findById(req.params.id);
    res.json(coffee);
  } catch (err) {
    return res.status(404).json({
      message: "Coffee not found",
      error: err,
    });
  }
};

export const createCoffee = async (req, res, next) => {
  try {
    const coffee = await Coffee.create(req.params);
    console.log(coffee);
  } catch (err) {
    return res.status(400).json({
      message: "Coffee not created",
      error: err,
    });
  }
};

export const updateCoffee = async (req, res, next) => {
  try {
    console.log(req.body);
    const coffee = await Coffee.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );

    res.json(coffee);
  } catch (err) {
    return res.status(400).json({
      message: "Coffee not updated",
      error: err,
    });
  }
};
