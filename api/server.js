#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/server-filesystem";
import fs from "fs";
import path from "path";

const server = new Server({
  name: "pizza-mcp-server",
  version: "1.0.0",
});

// Simple tool that reads pizzas.json
server.tool("list_pizzas", {
  description: "Lists all pizzas from backend/pizzas.json",
  inputSchema: { type: "object", properties: {} },
  async execute() {
    const filePath = path.join(process.cwd(), "backend", "pizzas.json");
    const pizzas = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return { content: pizzas };
  },
});

export default async function handler(req, res) {
  await server.handleRequest(req, res);
}
