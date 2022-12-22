const express = require("express");
const dbConnect = require("./dbConnect");
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const app = express();

app.use(express.json());

app.use(cors());



const itemsRoute = require("./routes/itemsRoute");
const usersRoute = require("./routes/userRoute");
const billsRoute = require('./routes/billsRoute')
app.use("/api/items/", itemsRoute);
app.use("/api/users/", usersRoute);
app.use("/api/bills/", billsRoute);

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})


const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World! from home api"));
app.listen(port, () => console.log(`Node JS Server Running at port ${port}`));
