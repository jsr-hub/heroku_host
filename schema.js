let mongoose  = require("./mongoconfig");
mongoose = mongoose.mongoose

const MenuSchema = new mongoose.Schema({ Product: String, brand:String, Units:String, Price:String});
const Menu = mongoose.model('Menu', MenuSchema);



/*const orderSchema = new mongoose.Schema({ table:Number, order:Array});
const Order = mongoose.model('orders', orderSchema);*/


 module.exports.Menu = Menu;
 //module.exports.Order= Order;
