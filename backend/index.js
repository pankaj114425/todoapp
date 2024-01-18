const express=require("express");
const app=express();
const connectdatabase=require('./config/db')
const dotenv=require('dotenv');
const auth=require('./routes/auth')
const task=require('./routes/task')
const cors=require("cors")
dotenv.config();
connectdatabase();
app.use(cors());
app.use(express.json());

const port=process.env.PORT || 8080;

// app.get("/",(req,res)=>{
//     res.send("hello world")
// });
app.use("/api/v1",auth);
app.use("/api/v2",task);
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`.bgYellow.white );
})