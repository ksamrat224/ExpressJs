function createUserRoutes(app) {

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
    
    
    app.post("/users/purchases",function(req,res){
        res.json({
         message:"purchase endpoint"
        })
    })
}

module.exports = {createUserRoutes:createUserRoutes}