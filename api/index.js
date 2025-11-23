const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const v1Router = require("../routes/routes");
const StadiumRoutes = require("../routes/stadium.routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;
const DB_URL = process.env.DB_URL || process.env.DB_url;

// Connect to MongoDB
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" Connected to MongoDB"))
  .catch((error) =>
    console.error(" Database connection error:", error.message)
  );

app.use(express.json());
const allowedOrigins = [
  "http://localhost:3000", // Allow local development
  "http://localhost:5173", // Allow Vite local development
  "https://kickzone-taupe.vercel.app", // Allow production frontend
];
app.use(cors({
  origin: '*', // Allow ANYONE to connect (for testing only)
  credentials: true
}));
// Router
app.use("/api/v1", v1Router);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found", data: null });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
