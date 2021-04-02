import { getCoffee, getCoffeeById } from "../controllers/coffeeController.js";
import express from "express";

const router = express.Router();

// express router method to create route for getting all users
router.route("/").get(getCoffee);

// // express router method to create route for getting users by id
router.route("/:id").get(getCoffeeById);

export default router;
