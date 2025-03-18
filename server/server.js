import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

connectDB();

// Routes
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log("Server Running on port", port);
});
