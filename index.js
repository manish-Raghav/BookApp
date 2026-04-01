const express =require('express');
const path =require('path')
const  productcontroller  = require('./src/controller/product.controller');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
app.use(express.urlencoded({extended:true}))
app.set("view engine" ,"ejs")
app.set("views", path.join(path.resolve(), 'src', 'views'));
const obj =new productcontroller();
 app.use(ejsLayouts);

app.get('/',obj.getProducts)
app.get('/Adddata',obj.getAddForm)
app.post('/',obj.uploaddata)
app.use(express.static('src/views')) 







app.listen(4000,()=>{
   console.log('server is running on 4000');
   
});