
const path =require('path');
const ModulleController = require('../models/Moduel.controller');


 class productcontroller{

    getProducts(req,res){
       let pro =ModulleController.get();
      //  console.log(pro);
       
      
          res.render("products",{product:pro})
     
      //  return res.sendFile(
      //   path.join(path.resolve(),'src','view','products.html')
      //  )
    }

    getAddForm(req,res)
    {
      res.render('Form');
    }

    uploaddata(req,res)
    {   
       ModulleController.Add(req.body)
     
        let pro =ModulleController.get();
        console.log(req.body);
        
        return  res.render("products",{product:pro})
    }

}
module.exports =productcontroller

