import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";
import notesRoutes from "./routes/notes.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend-url.vercel.app"],
    credentials: true,
  })
);

app.use("/api/users", authRoutes);
app.use("/api/notes", notesRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.resolve(__dirname, "..", "frontend", "dist");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(frontendDistPath));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });
}

connectDB();

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
