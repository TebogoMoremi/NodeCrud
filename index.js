import express from "express";
import bodyParser from "body-parser";

const app = express(); //initializing express app
const PORT = 5000; //initializing the port

//initializing the bodyParser middleware
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    console.log("Hello from home page of node CRUD");
    res.send("Hello from home page of node CRUD");
}
);
//application listen to upcoming requests
app.listen(PORT,()=>console.log(`server running on port:http://localhost:${PORT}`));