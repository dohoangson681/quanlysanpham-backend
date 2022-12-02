const { Product } = require("../model/product.model") ; 
class ProductService  {
    getProductListService = async () => {
        let productList = Product.findAll() ;
        if(productList) return productList ; 
        else return false ; 
    };

    getProductDetailService = async (id) => {
        console.log('getProductDetailService' , id) ; 
        let productDetail = await Product.findOne({
            where : {
                id
            }
        }) ;
        console.log('productDetail' , productDetail ) ; 
        if(productDetail) return productDetail ;
        else return false ; 
    };

    addNewProductService = async (newProduct) => {
        let productAdded = await Product.create(newProduct) ;
        
        if(productAdded) return productAdded ; 
        else return false ; 
       
    } ;

    updateProductService = async (id , newData) => {
        let productWillUpdate = await this.getProductDetailService(id) ;
        // console.log('newdata' , newData) ; 
        if(productWillUpdate) {
            // console.log('product will update' , productWillUpdate) ; 
            for (const key in newData ) {
                productWillUpdate.dataValues[key] = newData[key] ; 
            }
           await Product.update(productWillUpdate.dataValues , {
            where : {
                id
            }
           })
           return productWillUpdate ; 
        }else return false ;
    } ; 

     deleteProductService = async (id) =>  {
        let productWillDelete = await this.getProductDetailService(id) ; 
        // console.log('productWillDelete' , productWillDelete) ; 
        if(productWillDelete){
            await Product.destroy({
                where : {
                    id 
                }
            }) ; 
            return productWillDelete ; 
        }else return false ; 
    } ; 
} ; 

module.exports = {ProductService}


