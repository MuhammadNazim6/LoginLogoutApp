//require mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system"); //Establish a connection to Database
const nocache = require("nocache");
  
// require express
const express = require("express");
const app = express(); // create an instance for express

//using nocache
app.use(nocache());

//for static files
app.use(express.static('public'));

//for user routes
const user_route = require("./routes/userRoute");
app.use("/", user_route);

//for admin route
const adminRoute = require("./routes/adminRoute");
app.use("/admin", adminRoute);

//listen to port 3000
app.listen(3000, () => {
  console.log("server is Running at port 3000");
});
