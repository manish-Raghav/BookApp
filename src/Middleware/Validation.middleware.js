const Validationmiddle=(req,res,next)=>{
 
 
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

   next();
}
module.exports ={Validationmiddle}