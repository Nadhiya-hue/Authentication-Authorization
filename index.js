const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Cookie setting.
app.get('/', async (req,res)=>{
    res.cookie('name','Nadhiya');
    res.send('Working');
    
    //Salt generation.
    const salt = await bcrypt.genSalt(10, (err, salt)=>{
        console.log(salt);
    });
});


app.listen(3000);