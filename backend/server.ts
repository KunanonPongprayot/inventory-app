import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

/* ================= GET ================= */
app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

/* ================= POST ================= */
app.post("/products", async (req, res) => {
  const { name, price, quantity } = req.body;

  const product = await prisma.product.create({
    data: {
      name,
      price: Number(price) || 0,
      quantity: Number(quantity) || 0,
    },
  });

  res.json(product);
});

/* ================= PUT ================= */
app.put("/products/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { name, price, quantity } = req.body;

  const product = await prisma.product.update({
    where: { id },
    data: { name, price, quantity },
  });

  res.json(product);
});

/* ================= DELETE ================= */
app.delete("/products/:id", async (req, res) => {
  const id = Number(req.params.id);

  await prisma.product.delete({
    where: { id },
  });

  res.json({ message: "deleted" });
});

app.listen(3000, () => {
  console.log("🚀 http://localhost:3000");
});