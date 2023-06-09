const express = require('express');
const router = express.Router();
const app = express();
require("dotenv").config(); 
var cors = require('cors');
const userRoute = require('./routers/userRoute');



app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use("/api/user", userRoute);


app.listen(process.env.PORT, ()=>{
    console.log(`server running successfully on port : ${process.env.PORT}`);
})