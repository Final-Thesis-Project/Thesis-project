const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
const URI ="mongodb+srv://Jar:a!123456789@cluster0-2appk.mongodb.net/test"

 mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected")
});
//user schema
const UserSchema= Schema({ //flower description schema
    name:{type: String},
    mobilenum:{type: Number}, 
    password:{type: String},
    email:{type: String},
    img:{type: String},
    address:{type:String}
  })
  
  const User = mongoose.model('User', UserSchema);
  
  let save = (user) => {  
    var user_model = new User({
      name: user.name,
      mobilenum: user.mobilenum,
      password: user.password,
      email: user.email,
      img: user.img,
      address: user.address
    })
    user_model.save();
  }

//driver schema
const DriverSchema= Schema({
    name:{type: String},
    mobilenum:{type: Number}, 
    password:{type: String}
  })
  
  const Driver= mongoose.model('Driver', DriverSchema);
  
  let save_driver = (driver) => {  
    var driver_model = new Driver({
      name: driver.name,
      mobilenum: driver.mobilenum,
      password: driver.password
    })
    driver_model.save();
  }

  //order schema
  const OrderSchema= Schema({
    driver_id:{type: Number},
    user_id:{type: Number}, 
	order_details:{type: String},
	location_start_lng:{type: Number},
	location_start_lat:{type: Number},
	location_end_lng:{type: Number},
	location_end_lat:{type: Number},
	reciver_name:{type: String},
	order_notes:{type: String},
	rate:{type: Number},
	state:{type: String},
	date:{type:Date},
	price:{type: Number}
  })
  
  const Order= mongoose.model('Order',OrderSchema);
  
  let save_order = (order) => {  
    var order_model = new Order({
	  driver_id: order.driver_id,
      user_id: order.user_id,
	  order_details: order.order_details,
	  location_start_lng: order.location_start_lng,
	  location_start_lat: order.location_start_lat,
	  location_end_lng: order.location_end_lng,
	  location_end_lat: order.location_end_lat,
	  reciver_name:order.reciver_name,
	  order_notes:order.order_notes,
	  rate:order.rate,
	  state:order.state,
	  date:order.date,
	  price:order.price
    })
    order_model.save();
  }

  module.exports={User,save,Driver,save_driver,Order,save_order};