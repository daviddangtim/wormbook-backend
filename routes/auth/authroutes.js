import express from "express";
const Router = express.Router()
import { signUp, signIn } from "../../controllers/authcontroller.js";

Router.post("/register",signUp)
Router.post("/login", signIn)
export default Router;