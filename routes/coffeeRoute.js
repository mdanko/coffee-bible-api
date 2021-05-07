import {
  getCoffee,
  getCoffeeById,
  createCoffee,
  updateCoffee,
} from "../controllers/coffeeController.js";
import express from "express";

const router = express.Router();

router.route("/").get(getCoffee).post(createCoffee);

router.route("/:id").get(getCoffeeById).put(updateCoffee);

export default router;
