const express = require("express");
const { productCon } = require("../controller/main.controller");
const {
  getProductListController,
  getProductDetailController,
  addNewProductController,
  updateProductController,
  deleteProductController,
} = productCon;

const productRoute = express.Router();
// lấy danh sách sản phẩm
productRoute.get("/products", getProductListController);
// lấy sản phẩm chi tiết
productRoute.get("/products/:id", getProductDetailController);
// thêm sản phẩm
productRoute.post("/products", addNewProductController);
// cập nhật sản phẩm
productRoute.put("/products/:id", updateProductController);
// xóa sản phẩm
productRoute.delete("/products/:id", deleteProductController);

module.exports = { productRoute };
