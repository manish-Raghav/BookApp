 class ModulleController{
    constructor(_id,_desc,_name,_price,_imgeurl){
           this.id=_id,
           this.desc=_desc,
           this.name=_name,
           this.price=_price,
           this.imgurl=_imgeurl

    }

    static get(){
        return products
    }

    static Add(productobj){
      let newpro = new ModulleController(
        products.length+1,
        productobj.name,
        productobj.desc,
        productobj.price,
        productobj.imgurl,


      )
      products.push(newpro);
    }
    
 }

 var products=[
   new ModulleController(1,'product 1','Description for Product 1',19.99,'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'),
   new ModulleController(2,'product 2','Description for Product 2',19.99,'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'),
   new ModulleController(3,'product 3','Description for Product 3',19.99,'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'),

 ]
 module.exports=ModulleController