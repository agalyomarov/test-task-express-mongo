import express from "express";
import connectDB from "./src/config/db.js";

import indexRoutes from "./src/routes/indexRoutes.js";
import carRoutes from "./src/routes/carRoutes.js";

const app = express();
connectDB();

app.use(express.json());
app.use("/", indexRoutes);
app.use("/api", indexRoutes);
app.use("/api/cars", carRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порту http://127.0.0.1:${PORT}`));
