const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const v1Router = require("../routes/routes");
// const StadiumRoutes = require("../routes/stadium.routes"); 

dotenv.config();

// 1. INITIALIZE APP
const app = express();

const PORT = process.env.PORT || 7000;
const DB_URL = process.env.DB_URL || process.env.DB_url;

// 2. CORS CONFIGURATION
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://kickzone-taupe.vercel.app",
  "https://kickzone-frontend.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true 
}));

// 3. BODY PARSER WITH 10MB LIMIT
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// 4. DATABASE CONNECTION
if (!DB_URL) {
  console.error("CRITICAL ERROR: No DB_URL found in environment variables.");
}

mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) =>
    console.error("Database connection error:", error.message)
  );

// 5. ROUTES
app.get("/", (req, res) => {
  res.send("Kickzone API is running!");
});

app.use("/api/v1", v1Router);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found", data: null });
});

// 6. START SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
