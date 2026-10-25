const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.use(cookieParser());
//Cookie setting & Token generation using JWT.
app.get('/index', (req,res)=>{
     
    //JWT Token generation & send as cookie. 
    // Note: send response on HTML after token generation because it is leads to HTTPS Response Error Conflict.
    let token = jwt.sign({email: 'nadhiya@example.com'}, 'secret');
    res.cookie('token', token);
    console.log(token);
    res.send('Working Index Copy Ok!');
});

//Verify JWT token
app.get('/verify', (req,res)=>{
    let match = jwt.verify(req.cookies.token,'secret');
    console.log(match)
    res.send('ok')
})
app.listen(3000);