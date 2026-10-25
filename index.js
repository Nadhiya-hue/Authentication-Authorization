const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Cookie setting.
app.get('/', (req,res)=>{
    res.cookie('name','Nadhiya');
    res.send('Working');
    
    //Salt generation & Encrypt the password using bcrypt.
    bcrypt.genSalt(10, (err, salt)=>{
        console.log(salt)
        bcrypt.hash('password', salt, (err, hash)=>{
            console.log(hash)
        })
    });
});


app.listen(3000);