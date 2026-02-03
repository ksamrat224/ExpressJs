function createCourseRoutes(app) {
app.get("/course/preview",function(req,res){
    res.json({
     message:"preview endpoint"
    })
})

app.post("/courses/purchases",function(req,res){
    res.json({
     message:"purchase endpoint"
    })
})
}

module.exports = {createCourseRoutes:createCourseRoutes}