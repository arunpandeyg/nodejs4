const express = require("express");
const productController = require("../controller/product");
const router = express.Router();


router
  //   .post("/products", productController.createProduct)
  //   .get("/products", productController.getallProducts)
  //   .get("/products/:id", productController.getProduct)
  //   .put("/products/:id", productController.replaceProduct)
  //   .patch("/products/:id", productController.updateProduct)
  //   .delete("/products/:id", productController.deleteProduct);
  .post("/", productController.createProduct)
  .get("/", productController.getallProducts)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);
  
exports.router = router;
