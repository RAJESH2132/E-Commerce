import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Allowed Origins
const allowedOrigins = [
  // "http://localhost:5173", // Local Frontend
  // "http://localhost:5174", // Local Admin Panel
  "https://e-commerce-frontend-inky-nu.vercel.app", // Deployed Frontend
  "https://e-commerce-admin-black.vercel.app", // Deployed Admin Panel
];

// Middlewares
app.use(express.json());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Api Working");
});

// Start Server
app.listen(port, () => {
  console.log(`Server Started on PORT: ${port}`);
});
