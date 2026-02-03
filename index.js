const express = require('express');
const app = express();
const port = 3000;


app.post("/users/signup",function(req,res){
    res.json({
     message:"sign up endpoint"
    })
})

app.post("/users/signin",function(req,res){
    res.json({
     message:"sign in endpoint"
    })
})

app.get("/courses",function(req,res){
    res.json({
     message:"courses endpoint"
    })
})

app.post("/courses/purchases",function(req,res){
    res.json({
     message:"purchase endpoint"
    })
})
app.post("/users/purchases",function(req,res){
    res.json({
     message:"purchase endpoint"
    })
})
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

