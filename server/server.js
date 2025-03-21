import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import userDetailsRouter from "./routes/userDetailsRoute.js";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

await connectDB();

// Routes
app.use("/api/user", userRouter);
app.use("/api/user", userDetailsRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log("Server Running on port", port);
});
