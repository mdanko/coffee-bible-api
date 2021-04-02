import Coffee from "../models/coffeeModel.js";
// import asyncHandler from 'express-async-handler'

//getUsers function to get all users
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

// //getUserById function to retrieve user by id
// export const getUserById = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id);

//   //if user id match param id send user else throw error
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ message: "User not found" });
//     res.status(404);
//     throw new Error("User not found");
//   }
// });
