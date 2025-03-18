import express from "express";
// import userAuth from "../middlewares/userAuth.js";
import UserDetails from "../controllers/userDetailsController.js";
const userDetailsRouter = express.Router();
userDetailsRouter.post("/user-details/",  UserDetails);
export default userDetailsRouter;
