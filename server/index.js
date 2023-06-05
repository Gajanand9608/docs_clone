const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const authRouter = require("./routes/auth");
const documentRouter = require("./routes/document");


const PORT = process.env.PORT | 3001; 
const app = express();
const DB= "mongodb+srv://gajanandsharma088:wgZEHgAST9fvEXfz@cluster0.ugyhllc.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(documentRouter);

mongoose.connect(DB).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});

app.listen(PORT, "0.0.0.0", function (){
    console.log(`connected at port ${PORT} `);
    console.log('a');
});