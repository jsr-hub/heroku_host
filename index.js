const express = require("express"); 
const bodyPars = require("body-parser"); // to parse post request body
const cors = require("cors"); // accept cross client request
let schema = require("./schema"); // 
let {Menu} = schema;

const app = express();
// using middle ware for parse and cross request
app.use(bodyPars());
// only allowing cros fom my site
app.use( cors({}));
app.get("/customer",(req,res)=>{
    
    let a;
    Menu.find({},(err,val)=>{ //request all data from menu collection
        a= val  
    })
    a={"brands":a}
    res.send(a)

});

// get list of all orders in database used in chef page 
/*app.get("/order",(req,res)=>{
    
    
    Order.find({},(err,val)=>{ // getting all data from 
        //console.log(val)
        res.send(val)
    })
});*/

app.get("/",(req,res)=>{
    
   res.send("success connection - 1")

});

// this rest point didn't used in front end but used to add new item in menu
app.post("/admin",(req,res)=>{

    const body = req.body;  // copying request body

    let val = new Menu({      // fitting request to menu schema
        Product:body.Product,
        Brand: body.Brand,
        Units:body.Units,
        Price:body.Price,
    });
    
    val.save().then(doc=>{   // saving new item to  mongoose
        //console.log(doc)
        res.write("sucess");
        res.end();
    })

    
});

// insert new order to database from user

/*app.post("/order",(req,res)=>{
    const body = req.body;

    //console.log(body);
    let val = new Order({   // fitting request to Order schema
        table:body.table,  // order table number
        order:body.orders  // order item
    });
    
    val.save().then(doc=>{  // saving data to database 
        //console.log(doc)
        res.write("sucess");
        res.end();   // end response 
    }) 
  
})*/

// to listern on coresponding port 
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("server started lisening in port 3000.....");
})
