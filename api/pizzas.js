import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const filePath = join(process.cwd(), "backend", "pizzas.json");
  const data = JSON.parse(readFileSync(filePath, "utf-8"));

  res.status(200).json({ pizzas: data });
}
