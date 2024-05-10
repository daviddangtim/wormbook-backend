import express from "express";
const Router = express.Router()
import { getAllBooks,getSingleBook, addNewBook, reserveBook } from "../../controllers/bookcontroller.js";

Router.get("/list", getAllBooks)
Router.get("/detail/:id", getSingleBook)
Router.post("/create", addNewBook)
Router.post("/reserve/:id", reserveBook)

export default Router;