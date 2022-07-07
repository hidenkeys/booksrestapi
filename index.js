const express = require('express');

const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;
require('dotenv').config();

// connect to mongodb atlas
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true}).then(() => 
{
        console.log("connected to mogo db atlas");
}).catch(err =>{
        console.log(`something has happened ${error}`)
})

//start server
app.listen(PORT, () => {
        console.log(`server started at port ${PORT}`);
})

