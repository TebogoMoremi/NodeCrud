import express from "express";
import bodyParser from "body-parser";

const app = express(); //initializing express app
const PORT = 5000; //initializing the port

//initializing the bodyParser middleware
app.use(bodyParser.json());
//application listen to upcoming requests
app.listen(PORT,()=>console.log(`server running on port:http://localhost:${PORT}`));