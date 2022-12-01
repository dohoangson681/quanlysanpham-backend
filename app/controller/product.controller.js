const { productSer } = require("../service/main.service");

class ProductController {
  getProductListController(req, res) {
    res.send("Lấy danh sách sản phẩm");
  }

  getProductDetailController(req, res) {
    let { id } = req.params;
    res.send(`Lấy sản phẩm chi tiết với id :${id} `);
  }

  addNewProductController(req, res) {
    let newProduct = req.body;
    console.log("newProduct", newProduct);
    res.send(`Thêm sản phẩm`);
  }

  updateProductController(req, res) {
    let { id } = req.params;
    let newProduct = req.body;
    console.log("newProduct", newProduct);
    console.log("id", id);
    res.send(`Cập nhật sản phẩm`);
  }

  deleteProductController(req, res) {
    let {id} = req.params ; 
    res.send(`Xóa sản phẩm có id : ${id}`) ;
  }
}

module.exports = { ProductController };
