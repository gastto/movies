const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/api/peliculas",
  createProxyMiddleware({
    target: "https://localhost:8080",
    changeOrigin: true
  })
);
app.listen(3000);