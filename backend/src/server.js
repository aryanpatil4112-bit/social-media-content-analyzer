
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Upload API
app.use("/api/upload", uploadRoutes);

// Test API
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Social Media Content Analyzer Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});