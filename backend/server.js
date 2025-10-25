import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());

// GET /pizzas
app.get("/pizzas", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./backend/pizzas.json", "utf-8"));
  res.json({ pizzas: data });
});

// Serve static UI (optional)
app.use("/ui", express.static("ui"));

// Serve OpenAPI spec
app.get("/openapi.json", (req, res) => {
  res.sendFile(process.cwd() + "/openapi.json");
});

app.listen(3000, () =>
  console.log("🚀 Togger running at http://localhost:3000")
);
