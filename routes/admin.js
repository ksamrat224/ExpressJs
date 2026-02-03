const {  Router } = require("express");
const adminRouter = Router();

adminRouter.post("/signup",function(req,res){
    res.json({
        message:"sign up endpoint"
    })
})

adminRouter.post("/signin",function(req,res){
    res.json({
        message:"sign in endpoint"
    })
})
adminRouter.post("/course",function(res,req){
    res.json({
        message:"course endpoint"
    })
})
adminRouter.put("/course",function(res,req){
    res.json({
        message:"update course endpoint"
    })
})
adminRouter.get("/course/bulk",function(res,req){
    res.json({
        message:"get course buyers endpoint"
    })
})

module.exports ={adminRouter:adminRouter};