import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.js";

const app = express();
const PORT = 3000;

// Fix __dirname (since ES modules don’t have it)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // optional static files folder


// Routes
app.use("/", router);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
