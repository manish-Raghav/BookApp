
const path =require('path');
const ModulleController = require('../models/Moduel.controller');


 class productcontroller{

    getProducts(req,res){
       let pro =ModulleController.get();
     
          res.render("products",{product:pro})
    
    }

    getAddForm(req,res)
    {
      res.render('Form' ,{errormsg : null});
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

