
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

         const{name,desc,price,imgurl} = req.body;
         let errors =[];
         
         if(name.trim()==''||!name)
         {
            errors.push("name is required");
         }
         if(!price || parseFloat(price)<1)
         {
          errors.push("price must be positive")
         }
         try{
          const validUrl =new URL(imgurl);  
         } catch(err){
           errors.push("url is invalid")
         }

         if(errors.length>0)
           {
            return res.render('Form',{errormsg:errors[0]});
           }


           ModulleController.Add(req.body)
     
        let pro =ModulleController.get();
        console.log(req.body);
        
        return  res.render("products",{product:pro})
    }

}
module.exports =productcontroller

