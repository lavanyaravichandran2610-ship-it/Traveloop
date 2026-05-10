import express from "express";
import cors from "cors";

import aiRoutes from "./routes/aiRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import tripRoutes from "./routes/tripRoutes.js";

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.use("/api/ai", aiRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/trip", tripRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});