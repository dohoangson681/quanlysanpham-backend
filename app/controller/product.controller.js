const { productSer } = require("../service/main.service");
const {
  addNewProductService,
  deleteProductService,
  getProductListService,
  getProductDetailService,
  updateProductService,
} = productSer;
class ProductController {
  async getProductListController(req, res) {
    let productList = await getProductListService() ; 
    console.log('productList' , productList.length) ; 
    if(productList.length === 0) res.status(404).send('No Data') ; 
    else if(productList) res.status(200).send(productList) ;
    else res.status(404).send("Data not found !") ; 
  }

  async getProductDetailController(req, res) {
    let { id } = req.params;
    let productDetail = await getProductDetailService(id) ; 
    if(productDetail) res.status(200).send(productDetail) ; 
    else res.status(404).send("Product not found !") ; 
  }

  async addNewProductController(req, res) {
    let newProduct = req.body;
    let newProductAdded = await addNewProductService(newProduct) ; 
    console.log('newProductAdded',newProductAdded) ; 
    if(newProductAdded) res.status(201).send(newProductAdded) ; 
    else res.status(400).send(newProductAdded) ; 
  }

  updateProductController = async (req, res) => {
    let { id } = req.params;
    let newProduct = req.body;
    let productDidUpdate = await updateProductService(id,newProduct) ; 
    if(productDidUpdate) res.status(200).send(productDidUpdate) ; 
    else res.status(404).send("Product not found to update !") ; 
  }

  async deleteProductController(req, res) {
    let { id } = req.params;
    console.log('id' , id)  ;
    let productDidDelete = await deleteProductService(id) ; 
    if(productDidDelete) res.status(200).send(productDidDelete) ; 
    else res.status(404).send("Product not found to delete !") ; 
  }
}

module.exports = { ProductController };
