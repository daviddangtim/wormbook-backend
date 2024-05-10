import express from "express";
import authroute from "../routes/auth/authroutes.js";
import userRoute from "../routes/user/userroutes.js";
import bookRoute from "../routes/book/bookroutes.js";

const router = express.Router();

router.use("/auth", authroute);
router.use("/user", userRoute);
router.use("/book", bookRoute);

export default router;
