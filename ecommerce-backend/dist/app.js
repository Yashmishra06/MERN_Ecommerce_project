import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
// Importing Routes
import userRoute from "./routes/user.js";
const port = 4000;
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API Working with /api/v1");
});
app.use(errorMiddleware);
// Using Routes
app.use("/api/v1/user", userRoute);
app.listen(port, () => {
    console.log(`Express is working on http://localhost:${port}`);
});
